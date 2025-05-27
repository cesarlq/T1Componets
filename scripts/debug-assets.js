// scripts/debug-assets.js
const fs = require('fs');
const path = require('path');

function debugAssets() {
  console.log('🔍 Debugging T1Components Assets...\n');
  
  const projectRoot = process.cwd();
  console.log('📁 Project Root:', projectRoot);
  
  // Verificar estructura de directorios
  const publicDir = path.join(projectRoot, 'public');
  const assetsDir = path.join(publicDir, 't1-assets');
  
  console.log('\n📂 Directory Structure:');
  console.log('public exists:', fs.existsSync(publicDir));
  console.log('t1-assets exists:', fs.existsSync(assetsDir));
  
  if (fs.existsSync(assetsDir)) {
    console.log('\n📋 Assets found:');
    const files = fs.readdirSync(assetsDir);
    files.forEach(file => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      console.log(`  ✅ ${file} (${Math.round(stats.size / 1024)}KB)`);
    });
    
    // Verificar archivos específicos problemáticos
    const criticalFiles = [
      'menu-inactive.svg',
      'banner-icon.svg',
      'search-icon-2.svg'
    ];
    
    console.log('\n🎯 Critical Files Check:');
    criticalFiles.forEach(file => {
      const filePath = path.join(assetsDir, file);
      if (fs.existsSync(filePath)) {
        console.log(`  ✅ ${file} - OK`);
        
        // Verificar contenido del SVG
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('<svg')) {
            console.log(`    📄 Valid SVG content`);
          } else {
            console.log(`    ❌ Invalid SVG content`);
            console.log(`    First 100 chars: ${content.substring(0, 100)}`);
          }
        } catch (error) {
          console.log(`    ❌ Error reading file: ${error.message}`);
        }
      } else {
        console.log(`  ❌ ${file} - MISSING`);
      }
    });
  }
  
  // Verificar node_modules
  const nodeModulesPath = path.join(projectRoot, 'node_modules', '@t1-org', 't1components');
  const nodeModulesAssetsPath = path.join(nodeModulesPath, 'dist', 'public', 't1-assets');
  
  console.log('\n📦 Node Modules Check:');
  console.log('t1components package exists:', fs.existsSync(nodeModulesPath));
  console.log('assets in node_modules exist:', fs.existsSync(nodeModulesAssetsPath));
  
  if (fs.existsSync(nodeModulesAssetsPath)) {
    const nodeFiles = fs.readdirSync(nodeModulesAssetsPath);
    console.log(`Found ${nodeFiles.length} assets in node_modules`);
  }
  
  // Verificar next.config.js
  const nextConfigPath = path.join(projectRoot, 'next.config.js');
  console.log('\n⚙️  Next.js Config:');
  console.log('next.config.js exists:', fs.existsSync(nextConfigPath));
  
  if (fs.existsSync(nextConfigPath)) {
    try {
      const configContent = fs.readFileSync(nextConfigPath, 'utf8');
      console.log('Contains images config:', configContent.includes('images:'));
      console.log('Contains dangerouslyAllowSVG:', configContent.includes('dangerouslyAllowSVG'));
    } catch (error) {
      console.log('Error reading next.config.js:', error.message);
    }
  }
  
  // Generar recomendaciones
  console.log('\n💡 Recommendations:');
  
  if (!fs.existsSync(assetsDir)) {
    console.log('  1. Run: npm run postinstall (or node scripts/copy-assets.js)');
  }
  
  if (!fs.existsSync(nextConfigPath)) {
    console.log('  2. Create next.config.js with proper images configuration');
  }
  
  console.log('  3. Try using <img> tag instead of Next.js <Image>');
  console.log('  4. Check browser dev tools for 404 errors');
  console.log('  5. Verify SVG files are valid and not corrupted');
  
  console.log('\n🌐 Test URLs (check these in browser):');
  console.log('  - http://localhost:3000/t1-assets/menu-inactive.svg');
  console.log('  - http://localhost:3000/t1-assets/banner-icon.svg');
}

debugAssets();

module.exports = debugAssets;