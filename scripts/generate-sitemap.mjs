import { writeFileSync } from 'fs';

const baseUrl = 'https://davidsilvabello.dev';
const staticRoutes = ['/', '/proyectos'];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticRoutes
    .map(r => `  <url><loc>${baseUrl}${r}</loc></url>`)
    .join('\n')}\n</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generado: public/sitemap.xml');
