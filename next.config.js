// next.config.js - Reemplaza todo el contenido de tu next.config.js con esto:
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  // Configurar imágenes para permitir assets locales
  images: {
    // Permitir todos los dominios locales
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Configurar paths locales
    domains: [],
    // Permitir SVGs
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Configurar rutas de assets
    unoptimized: false, // Cambiar a true si sigue dando problemas
  },
  
  webpack: (config, { isServer }) => {
    // Configurar fallbacks para el navegador
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        events: false,
        string_decoder: false,
        os: false,
        net: false,
        tls: false
      }
    }

    // Configurar manejo de SVGs si es necesario
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config
  },
  transpilePackages: ['@t1-org/t1components'], 

  // Configurar rutas públicas
  async rewrites() {
    return [
      {
        source: '/t1-assets/:path*',
        destination: '/t1-assets/:path*',
      },
    ];
  },
}

module.exports = nextConfig