import type { Metadata } from 'next';

export const metadata: Metadata = {
            title: 'Join X Careers WhatsApp Community | Tech Jobs for Freshers',
    description:
        'Join 35,000+ tech freshers in our WhatsApp community. Get instant job alerts, career guidance, and connect with peers. Free to join!',
    keywords: 'WhatsApp community, tech jobs, freshers, job alerts, career guidance, networking',
    openGraph: {
        title: 'Join X Careers WhatsApp Community',
        description: 'Connect with 35,000+ tech freshers and get instant job alerts',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join X Careers WhatsApp Community',
        description: 'Connect with 35,000+ tech freshers and get instant job alerts',
    },
};

export default function WhatsAppLayout({ children }: { children: React.ReactNode }) {
    return children;
}
