import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'CareerX - Tech Jobs for Freshers | Entry Level Opportunities',
    description:
        'Find your dream tech job with CareerX. Discover entry-level opportunities, internships, and resources tailored for freshers. Join 35,000+ tech professionals.',
    keywords:
        'tech jobs, freshers, entry level, internships, career, software developer, programming jobs',
    authors: [{ name: 'CareerX Team' }],
    creator: 'CareerX',
    publisher: 'CareerX',
    robots: 'index, follow',
    openGraph: {
        title: 'CareerX - Tech Jobs for Freshers',
        description: 'Find your dream tech job with CareerX. Join 35,000+ tech professionals.',
        type: 'website',
        locale: 'en_US',
        siteName: 'CareerX',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CareerX - Tech Jobs for Freshers',
        description: 'Find your dream tech job with CareerX. Join 35,000+ tech professionals.',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1E3A8A',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="8td66sg">
            <head data-oid="kk37b:1">
                <link rel="icon" href="/favicon.ico" data-oid="hur6hjg" />
                <link rel="canonical" href="https://careerx.com" data-oid="vh6w40:" />
            </head>
            <body className="" data-oid="yd.:ooc">
                <Providers data-oid="o08oh0a">{children}</Providers>
            </body>
        </html>
    );
}
