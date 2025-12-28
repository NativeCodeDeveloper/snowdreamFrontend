import Image from 'next/image';
import Link from 'next/link';

import AppleCarousel from "@/Componentes/AppleCarousel.jsx";
import Footer from "@/Componentes/Footer.jsx";


export const metadata = {
  title: 'SnowDreams - Equipamiento Premium para Snowboard | Tienda Oficial',
  description: 'Descubre equipamiento técnico de alta performance para snowboard y deportes de nieve. Impermeabilidad 20K, tecnología avanzada y diseño innovador. Envío gratis.',
  keywords: 'snowboard, equipamiento snowboard, ropa nieve, tablas snowboard, casacas impermeables, snowboard gear, equipamiento técnico, ropa snowboard, accesorios nieve',
  authors: [{ name: 'SnowDreams' }],
  openGraph: {
    title: 'SnowDreams - Equipamiento Premium para Snowboard',
    description: 'Equipamiento técnico de alta performance. Impermeabilidad 20K. Diseño innovador para conquistar la montaña.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'SnowDreams',
    images: [
      {
        url: '/snow.webp',
        width: 1200,
        height: 630,
        alt: 'SnowDreams - Equipamiento para Snowboard',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnowDreams - Equipamiento Premium para Snowboard',
    description: 'Equipamiento técnico de alta performance para conquistar la montaña',
    images: ['/snow.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://snowdreams.com/portada',
  },
  category: 'sports',
};

export default function PortadaPage() {
  return (
    <main className="relative min-h-screen bg-white text-base flex flex-col">
      {/* Hero Section con imagen de fondo */}
      <section className="relative min-h-[80vh] h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/snowport2.jpg"
            alt="Snowboard en montaña nevada"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-linear-to-b from-cyan-950/50 via-black/40 to-black/80" />
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 sm:px-4 text-center">
          <div className="w-full max-w-4xl mx-auto">
            {/* Logo/Título Principal */}
            <h1 className="mb-6 text-3xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] font-black uppercase tracking-tight text-cyan-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.10)] text-center leading-none">
              snowdreams
            </h1>

            {/* Subtítulo */}
            <p className="mb-4 text-lg sm:text-2xl md:text-3xl font-light tracking-wide text-cyan-800 text-center mt-12">
              Vive la adrenalina de los deportes extremos en la nieve
            </p>


            {/* CTAs */}
            <div className="flex flex-col gap-3 xs:gap-4 sm:flex-row justify-center items-center">
              <Link
                href="/"
                className="group relative overflow-hidden rounded-full border-2 border-cyan-400/50 bg-linear-to-r from-cyan-500 to-cyan-600 px-6 xs:px-10 py-3 xs:py-4 text-base xs:text-lg font-bold text-cyan-700 backdrop-blur-smshadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]"
              >
                <span className="relative z-10">Explorar Colección</span>
              </Link>

              <Link
                href="/"
                className="rounded-full border-2 border-cyan-400/80 bg-cyan-500/10 px-6 xs:px-10 py-3 xs:py-4 text-base xs:text-lg font-bold text-cyan-700 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-400/20 hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                Ver Ofertas
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-2 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Scroll</p>
              <div className="h-8 w-5 rounded-full border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-start justify-center">
                <div className="mt-2 ml-1.5 h-2 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 bg-white py-10 xs:py-16 md:py-20 px-2 xs:px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 xs:mb-16 text-center">
            <h2 className="mb-2 xs:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400">
              Tecnología de Élite
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 md:text-xl">
              Equipamiento diseñado para conquistar las montañas más extremas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 xs:gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-300/60 bg-white p-7 xs:p-10 shadow-xl transition-all hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-4xl text-white shadow-lg">
                
              </div>
              <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-cyan-800 uppercase">Impermeabilidad 20K</h3>
              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">
                Membrana técnica que te mantiene seco en las condiciones más extremas.<br />Sellado térmico en todas las costuras.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-300/60 bg-white p-7 xs:p-10 shadow-xl transition-all hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-4xl text-white shadow-lg">
                
              </div>
              <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-cyan-800 uppercase">Respirabilidad Total</h3>
              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">
                Sistema de ventilación avanzado.<br />Mantén la temperatura perfecta sin importar la intensidad de tu sesión.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-300/60 bg-white p-7 xs:p-10 shadow-xl transition-all hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-4xl text-white shadow-lg">
                
              </div>
              <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-cyan-800 uppercase">Diseño Ergonómico</h3>
              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">
                Cortes anatómicos que se adaptan a tu cuerpo.<br />Máxima libertad de movimiento para tus mejores trucos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-10 xs:py-16 md:py-20 px-2 xs:px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <h2 className="mb-4 xs:mb-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-cyan-700 tracking-tightdrop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              Lista tu próxima aventura
            </h2>
            <p className="mb-6 xs:mb-10 text-sm xs:text-base sm:text-lg text-cyan-500 md:text-xl">
              Envío gratis en pedidos superiores a $50.000 | Devolución gratuita 30 días
            </p>
            <Link
              href="/"
              className="inline-block rounded-full border-2 border-cyan-400/60 bg-linear-to-r from-cyan-500 to-cyan-600 px-8 xs:px-12 py-3 xs:py-5 text-base xs:text-xl font-bold text-cyan-700 shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)]"
            >
              Comprar Ahora →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 xs:py-12 md:py-16 px-2 xs:px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 xs:gap-8 text-center md:grid-cols-4">
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-3 xs:p-4 sm:p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-1 xs:mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-cyan-600">10K+</p>
              <p className="text-xs xs:text-sm font-medium uppercase tracking-wide text-cyan-700">Clientes Felices</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-3 xs:p-4 sm:p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-1 xs:mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-cyan-600">50+</p>
              <p className="text-xs xs:text-sm font-medium uppercase tracking-wide text-cyan-700">Modelos Disponibles</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-3 xs:p-4 sm:p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-1 xs:mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-cyan-600">100%</p>
              <p className="text-xs xs:text-sm font-medium uppercase tracking-wide text-cyan-700">Satisfacción</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-3 xs:p-4 sm:p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-1 xs:mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-cyan-600">24/7</p>
              <p className="text-xs xs:text-sm font-medium uppercase tracking-wide text-cyan-700">Soporte</p>
            </div>
          </div>
        </div>
      </section>


        <AppleCarousel />
      </main>
  );
}

