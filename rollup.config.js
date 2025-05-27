// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';

// Plugin personalizado para manejar SVGs como módulos
const svgPlugin = {
  name: 'svg',
  load(id) {
    if (id.endsWith('.svg')) {
      // Devolver el path del SVG en lugar del contenido
      return `export default "${id}";`;
    }
  }
};

// Plugin personalizado para eliminar directivas 'use client'
const removeUseClientDirectivePlugin = {
  name: 'remove-use-client',
  transform(code) {
    return code.replace(/(['"])use client\1;?\n/g, '');
  }
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/lib/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto'
    },
    {
      file: 'dist/lib/index.es.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: false
    }),
    resolve({
      browser: true,
      preferBuiltins: false,
      skip: ['fs', 'path', 'crypto', 'util', 'stream', 'buffer', 'events']
    }),
    commonjs({
      include: /node_modules/,
      exclude: ['fs', 'path', 'crypto', 'util', 'stream', 'buffer', 'events']
    }),
    removeUseClientDirectivePlugin,
    
    // Manejar SVGs correctamente - NO convertir a data URLs
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.gif'], // Solo para imágenes raster
      limit: 10000,
      fileName: '[dirname][name][extname]'
    }),
    
    // Plugin específico para SVGs
    svgPlugin,
    
    postcss({
      modules: true,
      extract: 'styles.css',
      minimize: true,
      use: ['sass']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/lib/types',
      rootDir: './src',
      exclude: ['**/*.stories.*', '**/*.test.*']
    }),
    terser()
  ],
  external: [
    // React
    'react', 
    'react-dom',
    'react/jsx-runtime',
    
    // Next.js
    'next',
    'next/image',
    'next/router',
    'next/navigation',
    'next-auth',
    'next-intl',
    
    // Material-UI
    '@mui/material',
    '@mui/material/styles',
    '@mui/material/Button',
    '@mui/material/IconButton',
    '@mui/material/Menu',
    '@mui/material/MenuItem',
    '@mui/material/ListItemText',
    '@mui/icons-material',
    '@mui/icons-material/Add',
    '@mui/system',
    '@mui/styled-engine',
    '@mui/lab',
    
    // Otros
    '@emotion/react',
    '@emotion/styled',
    
    // Node.js modules
    'fs', 'path', 'crypto', 'util', 'stream', 'buffer', 'events', 'os', 'net', 'tls', 'string_decoder'
  ]
};