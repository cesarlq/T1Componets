// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';

// Plugin para copiar todos los assets a public y generar el mapping
const copyAssetsToPublicPlugin = {
  name: 'copy-assets-to-public',
  buildStart() {
    // Crear directorios
    const publicDir = 'dist/public/t1-assets';
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true });
    }

    // Función recursiva para encontrar todos los assets
    const findAssets = (dir, fileList = []) => {
      const files = readdirSync(dir);
      files.forEach(file => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        
        if (stat.isDirectory()) {
          findAssets(filePath, fileList);
        } else if (/\.(svg|png|jpg|jpeg|gif|webp)$/i.test(file)) {
          fileList.push(filePath);
        }
      });
      return fileList;
    };

    // Encontrar todos los assets en src/assets
    const assetsDir = 'src/assets';
    if (existsSync(assetsDir)) {
      const assetFiles = findAssets(assetsDir);
      
      // Copiar cada archivo y crear el mapping
      const assetMapping = {};
      
      assetFiles.forEach(filePath => {
        const fileName = basename(filePath);
        const outputPath = join(publicDir, fileName);
        
        try {
          copyFileSync(filePath, outputPath);
          console.log(`✅ Copied ${fileName} to public/t1-assets/`);
          
          // Crear el mapping para el import
          const importPath = filePath.replace(/\\/g, '/');
          assetMapping[importPath] = `/t1-assets/${fileName}`;
        } catch (error) {
          console.warn(`Failed to copy ${fileName}:`, error);
        }
      });

      // Generar archivo de mapping
      const mappingContent = `// Auto-generated asset mapping
export const assetMapping = ${JSON.stringify(assetMapping, null, 2)};
`;
      
      require('fs').writeFileSync('dist/asset-mapping.js', mappingContent);
      console.log('📝 Generated asset mapping file');
    }
  },
  
  load(id) {
    if (/\.(svg|png|jpg|jpeg|gif|webp)$/i.test(id)) {
      const fileName = basename(id);
      // Retornar el path público
      return `export default "/t1-assets/${fileName}";`;
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
    copyAssetsToPublicPlugin,
    
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