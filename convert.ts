import { readdirSync } from 'node:fs';
import sharp from 'sharp';
import colors from './colors.js';

for (const icon of readdirSync('assets/svgs/other')) {
    const fileContent = await Bun.file(`assets/svgs/other/${icon}`).arrayBuffer(); // eslint-disable-line no-await-in-loop

    sharp(fileContent)
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/other/${icon.replace('.svg', '.png')}`);
}

for (const icon of readdirSync('assets/svgs/from-discord')) {
    let fileContent = await Bun.file(`assets/svgs/from-discord/${icon}`).text(); // eslint-disable-line no-await-in-loop

    const svgColor = colors[icon.replace('.svg', '')];
    if (svgColor) fileContent = fileContent.replace('<svg', `<svg style="color: hsl(${svgColor})"`);

    sharp(Buffer.from(fileContent))
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/from-discord/${icon.replace('.svg', '.png')}`);
}
