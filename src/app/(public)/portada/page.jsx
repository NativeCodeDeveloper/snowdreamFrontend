import Image from 'next/image';
import Link from 'next/link';
import AppleCarousel from "@/Componentes/AppleCarousel.jsx";


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
    <main className="relative min-h-screen bg-black">
      {/* Hero Section con imagen de fondo */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/snow.webp"
            alt="Snowboard en montaña nevada"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/50 via-black/40 to-black/80" />
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="max-w-5xl">
            {/* Logo/Título Principal */}
            <h1 className="mb-6 text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] sm:text-7xl md:text-8xl lg:text-9xl">
              snowdreams
            </h1>

            {/* Subtítulo */}
            <p className="mb-4 text-xl font-light tracking-wide text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] sm:text-2xl md:text-3xl">
              VIVE TU PASIÓN EN LA NIEVE
            </p>

            <p className="mb-12 px-4 text-base font-light text-cyan-50 drop-shadow-lg sm:text-lg md:text-xl">
              Equipamiento premium para snowboard y deportes de nieve.<br className="hidden sm:block" />
              Diseño innovador. Máximo rendimiento. Estilo único.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="group relative overflow-hidden rounded-full border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-500 to-cyan-600 px-10 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]"
              >
                <span className="relative z-10">Explorar Colección</span>
              </Link>

              <Link
                href="/"
                className="rounded-full border-2 border-cyan-400/80 bg-cyan-500/10 px-10 py-4 text-lg font-bold text-cyan-50 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-400/20 hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                Ver Ofertas
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Scroll</p>
              <div className="h-8 w-5 rounded-full border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <div className="mt-1 ml-1.5 h-2 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 bg-gradient-to-b from-white to-cyan-50/30 py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 md:text-5xl lg:text-6xl">
              Tecnología de Élite
            </h2>
            <p className="text-lg text-gray-700 md:text-xl">
              Equipamiento diseñado para conquistar las montañas más extremas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-white p-8 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-3xl text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                ❄️
              </div>
              <h3 className="mb-3 text-2xl font-bold text-cyan-900">Impermeabilidad 20K</h3>
              <p className="text-gray-700 leading-relaxed">
                Membrana técnica que te mantiene seco en las condiciones más extremas. Sellado térmico en todas las costuras.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-white p-8 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-3xl text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                🌬️
              </div>
              <h3 className="mb-3 text-2xl font-bold text-cyan-900">Respirabilidad Total</h3>
              <p className="text-gray-700 leading-relaxed">
                Sistema de ventilación avanzado. Mantén la temperatura perfecta sin importar la intensidad de tu sesión.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-white p-8 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-3xl text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                🎯
              </div>
              <h3 className="mb-3 text-2xl font-bold text-cyan-900">Diseño Ergonómico</h3>
              <p className="text-gray-700 leading-relaxed">
                Cortes anatómicos que se adaptan a tu cuerpo. Máxima libertad de movimiento para tus mejores trucos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-black via-cyan-950/20 to-black py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <h2 className="mb-6 text-4xl font-black uppercase text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] md:text-5xl lg:text-6xl">
              Lista tu próxima aventura
            </h2>
            <p className="mb-10 text-lg text-cyan-200 md:text-xl">
              Envío gratis en pedidos superiores a $50.000 | Devolución gratuita 30 días
            </p>
            <Link
              href="/"
              className="inline-block rounded-full border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-cyan-600 px-12 py-5 text-xl font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all hover:border-cyan-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)]"
            >
              Comprar Ahora →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-white to-cyan-50/50 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-600">10K+</p>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-700">Clientes Felices</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-600">50+</p>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-700">Modelos Disponibles</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-600">100%</p>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-700">Satisfacción</p>
            </div>
            <div className="rounded-2xl border border-cyan-200/50 bg-white/50 p-6 shadow-lg transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <p className="mb-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-600">24/7</p>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-700">Soporte</p>
            </div>
          </div>
        </div>
      </section>


        <AppleCarousel />




    </main>
  );
}

