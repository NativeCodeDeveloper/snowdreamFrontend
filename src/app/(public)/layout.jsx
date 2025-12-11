'use client'
// src/app/(public)/layout.jsx
import NavBar from "@/Componentes/shadcnNavBar";
import Footer from '@/Componentes/Footer'
import CarritoProvider from "@/ContextosGlobales/CarritoContext";
import ToasterClient from "@/Componentes/ToasterClient";
import ObjetoPagarProvider from "@/ContextosGlobales/ObjetoPagarContext";
import FloatingWhatsApp from "@/Componentes/FloatingWhatsApp";
import FlotanteInstagram from "@/Componentes/FlotanteInstagram";

export default function PublicLayout({ children }) {
    return (
<ObjetoPagarProvider>
    <CarritoProvider>
        <div className="relative">
            <ToasterClient />
            <nav className="sticky top-0 z-50">
                <NavBar />
            </nav>
            <main className="relative z-0">{children}</main>
            <Footer id="footer" />

          <FloatingWhatsApp/>

        </div>
    </CarritoProvider>
</ObjetoPagarProvider>
    )
}