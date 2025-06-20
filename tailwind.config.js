const { BREAKPOINTS } = require('./src/config/breakpoints.ts');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'xs': `${BREAKPOINTS.xs}px`,
      'sm': `${BREAKPOINTS.sm}px`,
      'md': `${BREAKPOINTS.md}px`,
      'lg': `${BREAKPOINTS.lg}px`,
      'xl': `${BREAKPOINTS.xl}px`,
      '2xl': `${BREAKPOINTS.xxl}px`,
      // Breakpoints personalizados
      'mobile': `${BREAKPOINTS.mobile}px`,
      'tablet': `${BREAKPOINTS.tablet}px`,
      'desktop': `${BREAKPOINTS.desktop}px`,
    },
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Tamaños responsivos usando clamp
        'responsive-xs': 'clamp(12px, 2.5vw, 14px)',
        
        'responsive-sm': 'clamp(14px, 3vw, 16px)',
        'responsive-base': 'clamp(16px, 3.5vw, 18px)',
        'responsive-lg': 'clamp(18px, 4vw, 22px)',
        'responsive-xl': 'clamp(22px, 4.5vw, 26px)',
        'responsive-2xl': 'clamp(26px, 5vw, 32px)',
        'responsive-3xl': 'clamp(32px, 6vw, 40px)',
      },
      spacing: {
        // Espaciados responsivos
        'responsive-xs': 'clamp(0.25rem, 1vw, 0.5rem)',
        'responsive-sm': 'clamp(0.5rem, 2vw, 1rem)',
        'responsive-md': 'clamp(1rem, 3vw, 1.5rem)',
        'responsive-lg': 'clamp(1.5rem, 4vw, 2rem)',
        'responsive-xl': 'clamp(2rem, 5vw, 3rem)',
      },
    },
  },
  plugins: [],
}
