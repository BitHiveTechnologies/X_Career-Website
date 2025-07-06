import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            animation: {
                blob: 'blob 7s infinite',
                float: 'float 6s ease-in-out infinite',
                'pulse-shadow': 'pulse-shadow 2s infinite',
                shine: 'shine 3s infinite',
                'urgent-pulse': 'urgent-pulse 2s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
                float: {
                    '0%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                    },
                },
                'pulse-shadow': {
                    '0%': {
                        boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.5)',
                    },
                    '70%': {
                        boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)',
                    },
                    '100%': {
                        boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)',
                    },
                },
                shine: {
                    from: {
                        backgroundPosition: '200% 0',
                    },
                    to: {
                        backgroundPosition: '-200% 0',
                    },
                },
                'urgent-pulse': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)',
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 0 10px rgba(239, 68, 68, 0)',
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
