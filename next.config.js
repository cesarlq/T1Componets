// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Para generar sitio estático
  
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

    // Configurar alias para Material-UI
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }

    return config
  },

  // Para Storybook
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig