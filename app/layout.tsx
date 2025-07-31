import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'X Careers - Tech Jobs for Freshers | Entry Level Opportunities',
    description:
        'Find your dream tech job with X Careers. Discover entry-level opportunities, internships, and resources tailored for freshers. Join 35,000+ tech professionals.',
    keywords:
        'tech jobs, freshers, entry level, internships, career, software developer, programming jobs',
            authors: [{ name: 'X Careers Team' }],
            creator: 'X Careers',
            publisher: 'X Careers',
    robots: 'index, follow',
    openGraph: {
        title: 'X Careers - Tech Jobs for Freshers',
        description: 'Find your dream tech job with X Careers. Join 35,000+ tech professionals.',
        type: 'website',
        locale: 'en_US',
        siteName: 'X Careers',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'X Careers - Tech Jobs for Freshers',
        description: 'Find your dream tech job with X Careers. Join 35,000+ tech professionals.',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1E3A8A',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="m0hu0qs">
            <head data-oid="t:5qk.9">
                <link rel="icon" href="/favicon.ico" data-oid="ia5ham1" />
                <link rel="canonical" href="https://careerx.com" data-oid="etgmhph" />
            </head>
            <body className="" data-oid="5ntnda_">
                <Providers data-oid="tr..l98">{children}</Providers>
            </body>
        </html>
    );
}
