// scripts/copy-build-assets.js
const fs = require('fs');
const path = require('path');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyBuildAssets() {
  try {
    console.log('📦 Copying assets to dist...');
    
    // Copy assets to dist/lib/assets
    const assetsSource = path.join(__dirname, '..', 'src', 'assets');
    const assetsTarget = path.join(__dirname, '..', 'dist', 'lib', 'assets');
    
    if (fs.existsSync(assetsSource)) {
      copyDirectory(assetsSource, assetsTarget);
      console.log('✅ Assets copied successfully to dist/lib/assets');
    } else {
      console.log('⚠️  Assets source directory not found');
    }

    // Also copy to public folder structure for static access
    const publicTarget = path.join(__dirname, '..', 'dist', 'public', 't1-assets');
    
    // Copy icons
    const iconsSource = path.join(__dirname, '..', 'src', 'assets', 'iconsT1', 'icons');
    const iconsTarget = path.join(publicTarget, 'icons');
    
    if (fs.existsSync(iconsSource)) {
      copyDirectory(iconsSource, iconsTarget);
      console.log('✅ Icons copied to public structure');
    }

    // Copy logos
    const logosSource = path.join(__dirname, '..', 'src', 'assets', 'iconsT1', 'logos');
    const logosTarget = path.join(publicTarget, 'logos');
    
    if (fs.existsSync(logosSource)) {
      copyDirectory(logosSource, logosTarget);
      console.log('✅ Logos copied to public structure');
    }

    // Copy svg-icons
    const svgIconsSource = path.join(__dirname, '..', 'src', 'assets', 'svg-icons');
    const svgIconsTarget = path.join(publicTarget, 'svg-icons');
    
    if (fs.existsSync(svgIconsSource)) {
      copyDirectory(svgIconsSource, svgIconsTarget);
      console.log('✅ SVG icons copied to public structure');
    }

    console.log('🎉 All assets copied successfully!');
    
  } catch (error) {
    console.error('❌ Error copying assets:', error);
    process.exit(1);
  }
}

copyBuildAssets();
