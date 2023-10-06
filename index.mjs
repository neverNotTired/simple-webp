#!/usr/bin/env node

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs/promises';

const inputDir = process.argv[2] || 'images/';
const outputDir = process.argv[3] || 'images/webp/';
const webpQuality = process.argv[4] || 80;

(async () => {
    const files = await imagemin([path.join(inputDir, '*.{jpg,png}')], {
        destination: outputDir,
        plugins: [
            imageminWebp({quality: webpQuality})
        ]
    });

    // Rename files to keep original extension
    for (const file of files) {
        const oldPath = file.destinationPath;
        const newPath = path.join(outputDir, path.basename(file.sourcePath)).replace(/(\.jpg|\.png)$/, '$1.webp');
        
        // Ensure the directory exists before trying to rename
        await fs.mkdir(path.dirname(newPath), { recursive: true });
        await fs.rename(oldPath, newPath);
    }

    console.log(`Images converted at ${webpQuality}%!`);
    console.log('\x1b[36m%s\x1b[0m', `${outputDir}`, `<- Ctrl+Click to open folder`);
})();
