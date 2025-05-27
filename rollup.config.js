// rollup.config.js - Copiando assets como archivos
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';

// Plugin para copiar assets y generar imports relativos
const copyAssetsPlugin = {
  name: 'copy-assets',
  load(id) {
    if (id.endsWith('.svg') || id.endsWith('.png') || id.endsWith('.jpg') || id.endsWith('.gif')) {
      const filename = basename(id);
      const outputDir = 'dist/lib/assets';
      const outputPath = join(outputDir, filename);
      
      // Crear directorio si no existe
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }
      
      // Copiar archivo
      try {
        copyFileSync(id, outputPath);
        console.log(`Copied ${filename} to ${outputPath}`);
      } catch (error) {
        console.warn(`Failed to copy ${filename}:`, error);
      }
      
      // Retornar path relativo
      return `export default "./assets/${filename}";`;
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
    
    // Plugin para copiar assets
    copyAssetsPlugin,
    
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