"use client";
import dynamic from 'next/dynamic';

// Importación dinámica para evitar problemas con SSR
const FloatingWhatsApp = dynamic(
    () => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp),
    { ssr: false }
);

export default function WhatsAppButton() {
    return (
        <FloatingWhatsApp
            phoneNumber="+56999999999" // tu número con código de país
            accountName="SnowDreams"
            avatar="" // opcional: logo o imagen en public/
            statusMessage=""
            chatMessage="¡Hola! 👋 ¿Que estas buscando?"
            placeholder="Escribe tu mensaje..."
            notification
            notificationSound
        />
    );
}