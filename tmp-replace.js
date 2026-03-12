const fs = require('fs');
const path = require('path');

const dir = './src';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(dir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. All text colors -> #dac5a7 or remove them
    content = content.replace(/text-white|text-gray-\d+|text-gray-\d+\/\d+|text-gold\/[0-9]+|text-gold|text-\[\#dac5a7\]/g, 'text-[#dac5a7]');
    
    // 2. All backgrounds -> #0e0e0e or transparent
    content = content.replace(/bg-\[\#000000\]|bg-\[\#050505\]|bg-\[\#0a0a0a\]|bg-\[\#1a1a1a\]\/80|bg-black|bg-zinc-\d+|bg-neutral-\d+|bg-slate-\d+|bg-stone-\d+/g, 'bg-[#0e0e0e]');
    
    // 3. Header specific backdrop
    content = content.replace(/bg-\[\#0e0e0e\] backdrop-blur-md border border-\[\#333333\]/, 'bg-[#0e0e0e]/80 backdrop-blur-md border border-[#333333]');

    // 4. Remove all font-serif and font-sans explicitly from classes so globals.css controls it.
    content = content.replace(/\bfont-serif\b|\bfont-sans\b/g, '');

    // 5. Clean up multiple spaces that might result from removal
    content = content.replace(/ +/g, ' ');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('All TSX files processed!');
