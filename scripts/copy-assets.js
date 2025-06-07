// scripts/copy-assets.js
const fs = require('fs');
const path = require('path');

function copyAssets() {
  try {
    // Detectar si estamos en el proyecto de la librería o en un proyecto consumidor
    const projectRoot = process.cwd();
    const packageJsonPath = path.join(projectRoot, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Si es el proyecto de la librería, no hacer nada
    if (packageJson.name === '@t1-org/t1components') {
      return;
    }

    // Paths
    const nodeModulesPath = path.join(projectRoot, 'node_modules', '@t1-org', 't1components');
    const assetsSource = path.join(nodeModulesPath, 'dist', 'public', 't1-assets');
    const publicDir = path.join(projectRoot, 'public');
    const assetsTarget = path.join(publicDir, 't1-assets');

    // Verificar si existe el directorio de assets en node_modules
    if (!fs.existsSync(assetsSource)) {
      return;
    }

    // Crear directorio public si no existe
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Crear directorio de assets si no existe
    if (!fs.existsSync(assetsTarget)) {
      fs.mkdirSync(assetsTarget, { recursive: true });
    }

    // Copiar todos los archivos
    const files = fs.readdirSync(assetsSource);
    let copiedCount = 0;

    files.forEach(file => {
      const sourcePath = path.join(assetsSource, file);
      const targetPath = path.join(assetsTarget, file);
      
      // Solo copiar si el archivo no existe o es diferente
      let shouldCopy = true;
      if (fs.existsSync(targetPath)) {
        const sourceStats = fs.statSync(sourcePath);
        const targetStats = fs.statSync(targetPath);
        shouldCopy = sourceStats.mtime > targetStats.mtime;
      }

      if (shouldCopy) {
        fs.copyFileSync(sourcePath, targetPath);
        copiedCount++;
      } else {
      }
    });

    if (copiedCount > 0) {
    } else {
    }

    // Crear archivo de instrucciones
    const readmePath = path.join(assetsTarget, 'README.md');
    const readmeContent = `# T1Components Assets

These assets were automatically copied from @t1-org/t1components.

## ⚠️ Important
- Do not edit these files manually
- They will be overwritten on package updates
- If you need custom assets, place them elsewhere in your public folder

## Assets included
${files.map(file => `- ${file}`).join('\n')}

Last updated: ${new Date().toISOString()}
`;

    fs.writeFileSync(readmePath, readmeContent);
    
  } catch (error) {
  }
}

// Solo ejecutar si no estamos en desarrollo
if (process.env.NODE_ENV !== 'development') {
  copyAssets();
}

module.exports = copyAssets;