import { readdirSync } from 'node:fs';
import sharp from 'sharp';

const colors = (await Bun.file('colors.json').json()) as { default: string; icons: Record<string, string> };

for (const icon of readdirSync('assets/svgs/multicolored')) {
    const fileContent = await Bun.file(`assets/svgs/multicolored/${icon}`).arrayBuffer(); // eslint-disable-line no-await-in-loop

    sharp(fileContent)
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/multicolored/${icon.replace('.svg', '.png')}`);
}

for (const icon of readdirSync('assets/svgs/single-colored')) {
    let fileContent = await Bun.file(`assets/svgs/single-colored/${icon}`).text(); // eslint-disable-line no-await-in-loop

    fileContent = fileContent.replace('<svg', `<svg style="color: hsl(${colors.icons[icon.replace('.svg', '')] ?? colors.default})"`);

    sharp(Buffer.from(fileContent))
        .resize({ width: 500, height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(`assets/pngs/single-colored/${icon.replace('.svg', '.png')}`);
}
