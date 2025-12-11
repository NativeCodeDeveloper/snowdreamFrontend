"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCarritoGlobal } from "@/ContextosGlobales/CarritoContext";

export default function NavBar() {
    const pathname = usePathname();
    const [carrito] = useCarritoGlobal();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Montar el componente para evitar hidratación
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cantidadProductos = isMounted ? (carrito?.length ?? 0) : 0;

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { id: 'inicio', href: '/', label: 'Inicio' },
        { id: 'catalogo', href: '/catalogo', label: 'Catálogo' },
        { id: 'portada', href: '/portada', label: 'Portada' },
        { id: 'contacto', href: '/#contacto', label: 'Contacto' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Navbar Principal */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-cyan-200/20 border-b border-cyan-200/30'
                        : 'bg-white/80 backdrop-blur-md border-b border-cyan-100/20'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex-shrink-0 group"
                        >
                            <h1 className="text-2xl md:text-3xl font-black lowercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500 transition-all group-hover:from-cyan-500 group-hover:to-cyan-400 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                snowdreams
                            </h1>
                        </Link>

                        {/* Links Desktop */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`relative px-4 lg:px-5 py-2 text-sm lg:text-base font-medium tracking-wide uppercase transition-all duration-300 rounded-lg group ${
                                        isActive(link.href)
                                            ? 'text-cyan-600'
                                            : 'text-gray-700 hover:text-cyan-600'
                                    }`}
                                >
                                    {link.label}
                                    {/* Indicador activo */}
                                    <span
                                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 transition-all duration-300 ${
                                            isActive(link.href)
                                                ? 'w-full opacity-100'
                                                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                                        }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Carrito y Menú Móvil */}
                        <div className="flex items-center space-x-2 md:space-x-4">
                            {/* Carrito */}
                            <Link
                                href="/carrito"
                                className="relative group"
                            >
                                <div className="relative p-2 md:p-2.5 rounded-full bg-cyan-50/50 border border-cyan-200/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                    <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-cyan-700 group-hover:text-white transition-colors" />

                                    {/* Badge de cantidad */}
                                    {cantidadProductos > 0 && (
                                        <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse">
                                            {cantidadProductos}
                                        </span>
                                    )}
                                </div>
                            </Link>

                            {/* Botón Menú Móvil */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-cyan-50/50 border border-cyan-200/50 text-cyan-700 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Barra de progreso de scroll */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-100/30">
                    <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-150"
                        style={{
                            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
                        }}
                    />
                </div>
            </nav>

            {/* Menú Móvil Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menú Móvil Slide */}
            <div
                className={`fixed top-16 right-0 bottom-0 w-full sm:w-80 z-40 bg-gradient-to-b from-white via-cyan-50/30 to-white shadow-2xl transition-transform duration-300 md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Header del menú móvil */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-black lowercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                            menú
                        </h2>
                        <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-transparent" />
                    </div>

                    {/* Links del menú móvil */}
                    <nav className="flex-1 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-5 py-4 rounded-xl text-base font-medium tracking-wide uppercase transition-all duration-300 ${
                                    isActive(link.href)
                                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-400/30'
                                        : 'bg-white/50 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border border-cyan-100/50'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Footer del menú móvil */}
                    <div className="mt-6 pt-6 border-t border-cyan-200/30">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 font-light mb-2">
                                Equipamiento Premium
                            </p>
                            <p className="text-xs text-cyan-600/70">
                                © 2025 SnowDreams
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer para compensar el navbar fixed */}
            <div className="h-16 md:h-20" />
        </>
    );
}

