import { mkdirSync, readdirSync, rmdirSync } from 'node:fs';
import sharp from 'sharp';
import { colors, overrides } from './colors.js';

rmdirSync('assets/pngs', { recursive: true });

for (const directory of ['assets/pngs/from-discord', 'assets/pngs/other']) mkdirSync(directory, { recursive: true });

for (const icon of readdirSync('assets/svgs/other')) {
    const fileContent = await Bun.file(`assets/svgs/other/${icon}`).arrayBuffer(); // eslint-disable-line no-await-in-loop

    void sharp(fileContent)
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/other/${icon.replaceAll('-', '_').replace('.svg', '.png')}`);
}

for (const icon of readdirSync('assets/svgs/from-discord')) {
    let fileContent = await Bun.file(`assets/svgs/from-discord/${icon}`).text(); // eslint-disable-line no-await-in-loop

    const svgColor = overrides[icon.replace('.svg', '')] ?? colors['interactive-normal'];
    if (svgColor) fileContent = fileContent.replace('<svg', `<svg style="color: hsl(${svgColor})"`);

    void sharp(Buffer.from(fileContent))
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/from-discord/${icon.replaceAll('-', '_').replace('.svg', '.png')}`);
}
