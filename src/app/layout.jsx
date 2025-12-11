// src/app/layout.jsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatedLayout } from "@/Componentes/AnimatedLayout";

// Metadata optimizada para SEO máximo de SnowDreams - Equipamiento Snowboard y Ropa de Nieve
// Configuración completa para indexación en Google, Bing, Yahoo y otros buscadores

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://snowdream.nativecode.cl"),
    title: {
        default: "SnowDreams | Equipamiento Premium Snowboard y Ropa de Nieve Chile",
        template: "%s | SnowDreams",
    },
    description:
        "SnowDreams - Equipamiento premium para snowboard, casacas técnicas y ropa especializada para nieve y montaña en Chile. La mejor selección de productos para conquistar las pistas con estilo y seguridad.",
    keywords: [
        // Marca principal
        "SnowDreams",
        "snowdreams chile",
        "snow dreams",

        // Categorías principales
        "equipamiento snowboard",
        "ropa de nieve",
        "ropa de montaña",
        "casacas para nieve",
        "ropa snowboard",
        "equipamiento esquí",

        // Productos específicos
        "casacas técnicas",
        "pantalones snowboard",
        "ropa impermeable nieve",
        "chaquetas Gore-Tex",
        "equipo completo snowboard",

        // Por características
        "ropa impermeable montaña",
        "casacas técnicas Chile",
        "equipamiento premium nieve",
        "ropa térmica montaña",
        "protección nieve",

        // Long-tail keywords
        "comprar ropa snowboard online Chile",
        "tienda equipamiento nieve Santiago",
        "casacas impermeables para nieve",
        "equipamiento snowboard profesional",
        "ropa técnica montaña Chile",
    ],
    authors: [{ name: "SnowDreams", url: "https://snowdream.nativecode.cl" }],
    creator: "SnowDreams",
    publisher: "SnowDreams",

    // Configuración de robots optimizada para máxima indexación
    robots: {
        index: true,
        follow: true,
        nocache: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // URL canónica
    alternates: {
        canonical: "/",
    },

    // Información de categorización
    category: "Equipamiento Deportivo",
    classification: "E-commerce - Snowboard y Montaña",

    // Open Graph optimizado para redes sociales
    openGraph: {
        title: "SnowDreams | Equipamiento Premium Snowboard Chile",
        description:
            "Descubre el mejor equipamiento para snowboard y ropa técnica para nieve en Chile. SnowDreams ofrece casacas impermeables, pantalones técnicos y equipo completo de alta calidad.",
        url: "https://snowdream.nativecode.cl",
        siteName: "SnowDreams",
        images: [
            {
                url: "/snow.webp",
                width: 1200,
                height: 630,
                alt: "SnowDreams - Equipamiento Premium Snowboard Chile",
                type: "image/webp",
            },
        ],
        locale: "es_CL",
        type: "website",
        countryName: "Chile",
    },

    // Twitter/X Cards optimizado
    twitter: {
        card: "summary_large_image",
        title: "SnowDreams | Equipamiento Snowboard Premium Chile",
        description:
            "Equipamiento profesional para snowboard y montaña. Casacas técnicas impermeables y ropa especializada. ¡Envío a todo Chile!",
        images: ["/snow.webp"],
        creator: "@snowdreams",
        site: "@snowdreams",
    },

    // Información de aplicación
    applicationName: "SnowDreams",

    // Información de verificación (añade tus IDs cuando los tengas)
    verification: {
        // google: "tu-codigo-de-verificacion-google",
        // yandex: "tu-codigo-yandex",
        // bing: "tu-codigo-bing",
    },

    // Información adicional para buscadores
    other: {
        "revisit-after": "7 days",
        "distribution": "global",
        "rating": "general",
        "language": "Spanish",
        "geo.region": "CL",
        "geo.placename": "Chile",
    },
};

export default function RootLayout({ children }) {
    // JSON-LD Schema para SEO estructurado
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        "name": "SnowDreams",
        "description": "Equipamiento premium para snowboard, casacas técnicas y ropa especializada para nieve y montaña en Chile.",
        "url": "https://snowdream.nativecode.cl",
        "logo": "https://snowdream.nativecode.cl/snow.webp",
        "image": "https://snowdream.nativecode.cl/snow.webp",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CL",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana"
        },
        "telephone": "+56999999999",
        "email": "contacto@snowdreams.cl",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.instagram.com/snowdreams",
            "https://www.facebook.com/snowdreams",
            "https://twitter.com/snowdreams"
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://snowdream.nativecode.cl/catalogo?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <ClerkProvider>
            <html lang="es">
            <head>
                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen bg-white">
            {/* Aquí usamos el componente cliente que ya maneja Motion */}
            <AnimatedLayout>{children}</AnimatedLayout>
            </body>
            </html>
        </ClerkProvider>
    );
}