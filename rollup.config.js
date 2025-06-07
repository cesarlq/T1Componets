// rollup.config.js - Actualiza tu configuración existente
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { readFileSync } from 'fs';
import { basename } from 'path';

// Plugin para convertir TUS SVGs existentes a base64/inline
const inlineSvgPlugin = {
  name: 'inline-svg',
  load(id) {
    if (id.endsWith('.svg')) {
      try {
        // Leer tu SVG existente
        const svgContent = readFileSync(id, 'utf8');
        const fileName = basename(id);
        
        // Opción 1: Como base64 (funciona siempre)
        const base64 = Buffer.from(svgContent).toString('base64');
        const dataUrl = `data:image/svg+xml;base64,${base64}`;
        
        return `export default "${dataUrl}";`;
        
        // Opción 2: Como componente React (descomenta para usar esta opción)
        /*
        // Limpiar el SVG para React
        let cleanSvg = svgContent
          .replace(/fill-rule/g, 'fillRule')
          .replace(/clip-rule/g, 'clipRule')
          .replace(/stroke-width/g, 'strokeWidth')
          .replace(/stroke-linecap/g, 'strokeLinecap')
          .replace(/stroke-linejoin/g, 'strokeLinejoin')
          .replace(/class=/g, 'className=');
        
        // Extraer contenido del SVG
        const svgMatch = cleanSvg.match(/<svg[^>]*>(.*)<\/svg>/s);
        const innerContent = svgMatch ? svgMatch[1] : '';
        const svgAttrs = cleanSvg.match(/<svg([^>]*)/);
        
        // Generar componente React
        return `
          import React from 'react';
          const SvgComponent = ({ width, height, className, style, ...props }) => (
            <svg 
              width={width || 24} 
              height={height || 24} 
              viewBox="0 0 24 24"
              className={className}
              style={style}
              {...props}
            >
              ${innerContent}
            </svg>
          );
          export default SvgComponent;
        `;
        */
        
      } catch (error) {
        console.warn(`Failed to process SVG ${id}:`, error.message);
        return `export default "";`;
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
    
    // Plugin que convierte TUS SVGs existentes a inline
    inlineSvgPlugin,
    
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