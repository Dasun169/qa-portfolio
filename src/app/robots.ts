import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [], // Add paths like '/private/' if you have any
        },
        sitemap: 'https://www.dasunnavindu.dev/sitemap.xml',
        host: 'https://www.dasunnavindu.dev',
    }
}