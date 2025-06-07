// scripts/debug-assets.js
const fs = require('fs');
const path = require('path');

function debugAssets() {
  
  const projectRoot = process.cwd();
  
  // Verificar estructura de directorios
  const publicDir = path.join(projectRoot, 'public');
  const assetsDir = path.join(publicDir, 't1-assets');
  
  
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    files.forEach(file => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
    });
    
    // Verificar archivos específicos problemáticos
    const criticalFiles = [
      'menu-inactive.svg',
      'banner-icon.svg',
      'search-icon-2.svg'
    ];
    
    criticalFiles.forEach(file => {
      const filePath = path.join(assetsDir, file);
      if (fs.existsSync(filePath)) {
        
        // Verificar contenido del SVG
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('<svg')) {
          } else {
          }
        } catch (error) {
        }
      } else {
      }
    });
  }
  
  // Verificar node_modules
  const nodeModulesPath = path.join(projectRoot, 'node_modules', '@t1-org', 't1components');
  const nodeModulesAssetsPath = path.join(nodeModulesPath, 'dist', 'public', 't1-assets');

  
  if (fs.existsSync(nodeModulesAssetsPath)) {
    const nodeFiles = fs.readdirSync(nodeModulesAssetsPath);
  }
  
  // Verificar next.config.js
  const nextConfigPath = path.join(projectRoot, 'next.config.js');
  
  if (fs.existsSync(nextConfigPath)) {
    try {
      const configContent = fs.readFileSync(nextConfigPath, 'utf8');
    } catch (error) {
    }
  }
  
  // Generar recomendaciones
  
  if (!fs.existsSync(assetsDir)) {
  }
  
  if (!fs.existsSync(nextConfigPath)) {
  }
  
}

debugAssets();

module.exports = debugAssets;