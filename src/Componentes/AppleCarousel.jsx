'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppleCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const products = [
        {
            id: 1,
            src: "/snow.webp",
            title: "Casaca Técnica Pro",
            category: "Premium Snowboard",
            price: "$129.990",
            description: "Impermeabilidad 20K. Membrana Gore-Tex. Diseño ergonómico para máximo rendimiento.",
            features: ["Impermeable 20K", "Transpirable", "Corte Anatómico"]
        },
        {
            id: 2,
            src: "/snow.jpg",
            title: "Pantalón Extreme",
            category: "Alta Performance",
            price: "$99.990",
            description: "Resistencia extrema. Ventilación regulable. Protección total contra el frío y la nieve.",
            features: ["Sellado Térmico", "Ventilación", "Refuerzos"]
        },
        {
            id: 3,
            src: "/snow.webp",
            title: "Set Completo Elite",
            category: "Pack Premium",
            price: "$199.990",
            description: "Casaca + Pantalón. Tecnología de punta. Todo lo que necesitas para conquistar la montaña.",
            features: ["Pack Completo", "Ahorra 20%", "Envío Gratis"]
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="relative bg-gradient-to-b from-cyan-50/50 to-white py-20 px-4 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Título de la sección */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 md:text-5xl lg:text-6xl">
                        Productos Destacados
                    </h2>
                    <p className="text-lg text-gray-700 md:text-xl">
                        Equipamiento premium seleccionado para ti
                    </p>
                </div>

                {/* Carrusel */}
                <div className="relative">
                    {/* Cards Container */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-5xl">
                            {/* Card Principal */}
                            <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-200/50 bg-white shadow-2xl">
                                <div className="grid md:grid-cols-2">
                                    {/* Imagen */}
                                    <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-cyan-900 to-black">
                                        <Image
                                            src={products[activeIndex].src}
                                            alt={products[activeIndex].title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        {/* Categoría Badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="inline-block rounded-full border border-cyan-300/50 bg-cyan-500/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                                {products[activeIndex].category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="flex flex-col justify-between p-8 md:p-12">
                                        <div>
                                            <h3 className="mb-3 text-3xl font-black text-cyan-900 md:text-4xl">
                                                {products[activeIndex].title}
                                            </h3>

                                            <p className="mb-6 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                                                {products[activeIndex].price}
                                            </p>

                                            <p className="mb-6 text-gray-700 leading-relaxed">
                                                {products[activeIndex].description}
                                            </p>

                                            {/* Features */}
                                            <div className="mb-8 flex flex-wrap gap-2">
                                                {products[activeIndex].features.map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700"
                                                    >
                                                        ✓ {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <Link
                                                href="/"
                                                className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
                                            >
                                                Ver Detalles
                                            </Link>
                                            <Link
                                                href="/"
                                                className="flex-1 rounded-full border-2 border-cyan-500 bg-white px-6 py-3 text-center text-base font-bold text-cyan-600 transition-all hover:bg-cyan-50 hover:scale-105"
                                            >
                                                Agregar al Carrito
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botones de navegación */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-white shadow-lg transition-all hover:bg-cyan-500 hover:text-white hover:scale-110 hover:shadow-xl"
                                aria-label="Anterior"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-white shadow-lg transition-all hover:bg-cyan-500 hover:text-white hover:scale-110 hover:shadow-xl"
                                aria-label="Siguiente"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Indicadores */}
                    <div className="mt-8 flex justify-center gap-2">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-3 rounded-full transition-all ${
                                    index === activeIndex
                                        ? 'w-12 bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg'
                                        : 'w-3 bg-cyan-200 hover:bg-cyan-300'
                                }`}
                                aria-label={`Ir a producto ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Miniaturas de productos */}
                    <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {products.map((product, index) => (
                            <button
                                key={product.id}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative overflow-hidden rounded-xl transition-all ${
                                    index === activeIndex
                                        ? 'ring-4 ring-cyan-500 shadow-xl scale-105'
                                        : 'ring-2 ring-cyan-200 hover:ring-cyan-400 hover:scale-105'
                                }`}
                            >
                                <div className="relative aspect-square">
                                    <Image
                                        src={product.src}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className={`absolute inset-0 transition-all ${
                                        index === activeIndex
                                            ? 'bg-cyan-500/20'
                                            : 'bg-black/40 group-hover:bg-black/20'
                                    }`} />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                    <p className="text-xs font-bold text-white truncate">{product.title}</p>
                                    <p className="text-xs font-bold text-cyan-300">{product.price}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}