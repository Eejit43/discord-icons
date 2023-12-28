import { readdirSync } from 'node:fs';
import sharp from 'sharp';

for (const file of readdirSync('assets/svgs')) {
    let fileContent = await Bun.file(`assets/svgs/${file}`).text();

    fileContent = fileContent.replace('<svg', '<svg style="color: #b5bac1"');

    sharp(Buffer.from(fileContent))
        .resize(500)
        .toFile(`assets/pngs/${file.replace('.svg', '.png')}`);
}
