import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dasun Navindu | QA Engineer Portfolio',
        short_name: 'Dasun Navindu',
        description: 'Software Quality Assurance Engineer portfolio showcasing skills, projects, and experience in test automation and web development.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}