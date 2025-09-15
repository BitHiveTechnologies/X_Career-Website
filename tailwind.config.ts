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
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    						sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			},
			// Luxury Emerald & Gold Premium Color Palette
			premium: {
				emerald: '#065F46',        // Deep Emerald - Primary background
				forest: '#064E3B',         // Forest Green - Secondary background
				gold: '#D97706',           // Gold - Primary accent
				amber: '#F59E0B',          // Amber - Secondary accent
				cream: '#FEF3C7',          // Cream - Light accent
				'emerald-light': '#047857', // Lighter emerald for hover states
				'forest-light': '#065F46',  // Lighter forest for hover states
				'gold-light': '#F59E0B',   // Lighter gold for hover states
				// New Premium Color Palette
				navy: '#1a365d',          // Deep navy blue
				burgundy: '#7c2d12',      // Rich burgundy
				champagne: '#f7fafc',     // Soft champagne
				copper: '#c05621',        // Warm copper
				slate: '#2d3748',         // Sophisticated slate
			},
			// Elegant Dark Theme Colors
			dark: {
				charcoal: '#1f2937',   // Deep charcoal
				gold: '#f59e0b',       // Rich gold
				silver: '#e5e7eb',     // Light silver
				emerald: '#059669',     // Emerald accent
				slate: '#374151',       // Dark slate
			},
			// New Color Palette from Design
			notify: {
				'golden-yellow': '#FFC94D',  // Primary - Golden Yellow
				'orange-gold': '#FFA726',     // Primary - Orange-Gold
				'deep-black': '#0E0E0E',     // Primary - Deep Black
				'royal-purple': '#8B5CF6',   // Secondary - Royal Purple
				'pure-white': '#FFFFFF',     // Secondary - Pure White
				'bright-red': '#FF3B30',     // Accent - Bright Red
				'soft-gray': '#C7C7CC',      // Accent - Soft Gray
			}
		},
    		animation: {
    			blob: 'blob 7s infinite',
    			float: 'float 6s ease-in-out infinite',
    			'pulse-shadow': 'pulse-shadow 2s infinite',
    			shine: 'shine 3s infinite',
    			'urgent-pulse': 'urgent-pulse 2s infinite'
    		},
    		keyframes: {
    			blob: {
    				'0%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				},
    				'33%': {
    					transform: 'translate(30px, -50px) scale(1.1)'
    				},
    				'66%': {
    					transform: 'translate(-20px, 20px) scale(0.9)'
    				},
    				'100%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				}
    			},
    			float: {
    				'0%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				},
    				'100%': {
    					transform: 'translateY(0px)'
    				}
    			},
    			'pulse-shadow': {
    				'0%': {
    					boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.5)'
    				},
    				'70%': {
    					boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)'
    				},
    				'100%': {
    					boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)'
    				}
    			},
    			shine: {
    				from: {
    					backgroundPosition: '200% 0'
    				},
    				to: {
    					backgroundPosition: '-200% 0'
    				}
    			},
    			'urgent-pulse': {
    				'0%, 100%': {
    					transform: 'scale(1)',
    					boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)'
    				},
    				'50%': {
    					transform: 'scale(1.05)',
    					boxShadow: '0 0 0 10px rgba(239, 68, 68, 0)'
    				}
    			}
    		}
    	}
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
