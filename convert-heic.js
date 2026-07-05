const heicConvert = require('heic-convert');
const path = require('path');
const fs = require('fs');

const roomDir = path.join(__dirname, 'public', 'images', 'Room');
const heicFiles = fs.readdirSync(roomDir).filter(f => f.toUpperCase().endsWith('.HEIC'));

console.log(`Found ${heicFiles.length} HEIC files, converting...`);

(async () => {
  for (const file of heicFiles) {
    const inputPath = path.join(roomDir, file);
    const outName = path.basename(file, path.extname(file)) + '.jpg';
    const outputPath = path.join(roomDir, outName);

    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.85,
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`✅ ${file} → ${outName}`);
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`);
    }
  }
  console.log('Done!');
})();
