import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5', // Cambiado de @storybook/nextjs
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  // Agregar configuración para soportar características de Next.js
  webpackFinal: async (config) => {
    // Soporte para absolute imports y module aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '../src'),
      '@components': require('path').resolve(__dirname, '../src/components'),
      '@assets': require('path').resolve(__dirname, '../src/assets'),
      '@styles': require('path').resolve(__dirname, '../src/styles'),
      '@interfaces': require('path').resolve(__dirname, '../src/interfaces'),
      '@redux': require('path').resolve(__dirname, '../src/redux'),
      '@context': require('path').resolve(__dirname, '../src/context'),
      '@reducers': require('path').resolve(__dirname, '../src/reducers'),
    };

    // Soporte para SVGs
    const fileLoaderRule = config.module?.rules?.find(rule => 
      rule && typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('.svg')
    );
    
    if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    // Soporte para SCSS modules
    config.module?.rules?.push({
      test: /\.module\.s[ac]ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'sass-loader',
      ],
    });

    return config;
  },
  env: (config) => ({
    ...config,
    // Variables de entorno para Vercel
    IS_STORYBOOK: 'true',
  }),
};

export default config;