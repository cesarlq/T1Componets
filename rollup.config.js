// rollup.config.js - Convertir SVGs a base64 data URLs
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { readFileSync } from 'fs';

// Plugin para convertir SVGs a base64 data URLs
const svgToBase64Plugin = {
  name: 'svg-to-base64',
  load(id) {
    if (id.endsWith('.svg')) {
      try {
        // Leer el archivo SVG
        const svgContent = readFileSync(id, 'utf8');
        
        // Limpiar el SVG (remover saltos de línea y espacios extra)
        const cleanSvg = svgContent
          .replace(/\n/g, '')
          .replace(/\s+/g, ' ')
          .trim();
        
        // Convertir a base64
        const base64 = Buffer.from(cleanSvg).toString('base64');
        
        // Crear data URL
        const dataUrl = `data:image/svg+xml;base64,${base64}`;
        
        return `export default "${dataUrl}";`;
      } catch (error) {
        console.warn(`Failed to load SVG: ${id}`, error);
        // Fallback: retornar una imagen transparente
        const fallbackSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="transparent"/></svg>';
        const fallbackBase64 = Buffer.from(fallbackSvg).toString('base64');
        return `export default "data:image/svg+xml;base64,${fallbackBase64}";`;
      }
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
    
    // Plugin para convertir SVGs a base64
    svgToBase64Plugin,
    
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
    'react', 'react-dom', 'react/jsx-runtime',
    'next', 'next/image', 'next/router', 'next/navigation',
    'next-auth', 'next-intl',
    '@mui/material', '@mui/material/styles', '@mui/material/Button',
    '@mui/material/IconButton', '@mui/material/Menu', '@mui/material/MenuItem',
    '@mui/material/ListItemText', '@mui/icons-material', '@mui/icons-material/Add',
    '@mui/system', '@mui/styled-engine', '@mui/lab',
    '@emotion/react', '@emotion/styled',
    'fs', 'path', 'crypto', 'util', 'stream', 'buffer', 'events', 'os', 'net', 'tls', 'string_decoder'
  ]
};