// rollup.config.js - Actualiza tu configuración existente
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';

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
    svgr({
      // Configure SVGR options
      typescript: true,
      ref: true,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    removeUseClientDirectivePlugin,
    
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
