import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-cyan-950/20 to-black border-t border-cyan-900/50">
      {/* Efecto de brillo superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <h3 className="text-3xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all group-hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]">
                snowdreams
              </h3>
            </Link>
            <p className="text-sm text-cyan-300/70 leading-relaxed">
              Equipamiento premium para snowboard y deportes de nieve. Diseño innovador, máximo rendimiento y estilo único para conquistar la montaña.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-4">
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Columna 2: Tienda */}
          <div>
            <h4 className="mb-5 text-lg font-bold uppercase tracking-wide text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              Tienda
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Tablas de Snowboard
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Casacas y Chaquetas
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Pantalones de Nieve
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Botas y Fijaciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Ofertas y Descuentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ayuda e Información */}
          <div>
            <h4 className="mb-5 text-lg font-bold uppercase tracking-wide text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              Ayuda
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Guía de Tallas
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Garantía y Cuidados
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-cyan-300/70 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto y Newsletter */}
          <div>
            <h4 className="mb-5 text-lg font-bold uppercase tracking-wide text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              Contacto
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-cyan-300/70">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@snowdreams.com" className="hover:text-cyan-400 transition-colors">
                  info@snowdreams.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cyan-300/70">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+56912345678" className="hover:text-cyan-400 transition-colors">
                  +569 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cyan-300/70">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Santiago, Chile</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="mb-3 text-sm text-cyan-300/70">Suscríbete a nuestras ofertas</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-2 text-sm text-cyan-100 placeholder-cyan-500/50 backdrop-blur-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />
                <button
                  onClick={() => window.location.href = '/'}
                  className="rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Métodos de Pago y Envío */}
        <div className="mt-12 pt-8 border-t border-cyan-900/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Métodos de Pago */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-wide text-cyan-500/70">Métodos de Pago Seguros</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-10 items-center justify-center rounded-lg border border-cyan-800/50 bg-white/5 px-4 backdrop-blur-sm">
                  <Image
                    src="/mpblack.webp"
                    alt="Mercado Pago"
                    width={80}
                    height={30}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex h-10 items-center rounded-lg border border-cyan-800/50 bg-white/5 px-3 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-cyan-300">💳 VISA</span>
                </div>
                <div className="flex h-10 items-center rounded-lg border border-cyan-800/50 bg-white/5 px-3 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-cyan-300">💳 MASTERCARD</span>
                </div>
                <div className="flex h-10 items-center rounded-lg border border-cyan-800/50 bg-white/5 px-3 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-cyan-300">💰 WEBPAY</span>
                </div>
              </div>
            </div>

            {/* Métodos de Envío */}
            <div className="md:text-right">
              <p className="mb-4 text-xs uppercase tracking-wide text-cyan-500/70">Envíos con</p>
              <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
                <div className="flex h-10 items-center justify-center rounded-lg border border-cyan-800/50 bg-white/5 px-4 backdrop-blur-sm">
                  <Image
                    src="/logoStarken.png"
                    alt="Starken"
                    width={70}
                    height={25}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex h-10 items-center justify-center rounded-lg border border-cyan-800/50 bg-white/5 px-4 backdrop-blur-sm">
                  <Image
                    src="/Chilexpress_2012.webp"
                    alt="Chilexpress"
                    width={70}
                    height={25}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex h-10 items-center rounded-lg border border-cyan-800/50 bg-white/5 px-3 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-cyan-300">📦 BLUEXPRESS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="mt-10 pt-8 border-t border-cyan-900/50">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-cyan-700/60">
              © 2025 <span className="font-bold text-cyan-600">SnowDreams</span>. Todos los derechos reservados. | Tienda de equipamiento premium para snowboard y deportes de nieve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-cyan-600/60">
              <Link href="/" className="transition-colors hover:text-cyan-400">Privacidad</Link>
              <span>•</span>
              <Link href="/" className="transition-colors hover:text-cyan-400">Términos</Link>
              <span>•</span>
              <Link href="/" className="transition-colors hover:text-cyan-400">Cookies</Link>
              <span>•</span>
              <Link href="/" className="transition-colors hover:text-cyan-400">Accesibilidad</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
}

