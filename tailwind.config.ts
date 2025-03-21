
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				apt: {
					purple: '#832A8D',      // Primary purple from affinity logo
					lightpurple: '#A94FB6', // Lighter purple shade
					darkpurple: '#6a2273',  // Darker purple
					blue: '#204080',        // Added blue from affinityoutsourcing.net
					lightblue: '#4F85D6',   // Lighter blue shade
					gray: '#F5F5F5',
					darkgray: '#333333',
					text: '#555555',
				}
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'affinity': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'affinity-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wave-slow': {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-2%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'text-gradient': {
					'0%, 100%': { 'background-position': '0% center' },
					'50%': { 'background-position': '100% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
				'wave-slow': 'wave-slow 10s ease-in-out infinite',
				'text-gradient': 'text-gradient 4s ease-in-out infinite'
			},
			backgroundSize: {
				'300%': '300%',
			},
			backgroundImage: {
				'affinity-gradient': 'linear-gradient(135deg, #832A8D 0%, #A94FB6 100%)',
				'affinity-blue-gradient': 'linear-gradient(135deg, #204080 0%, #4F85D6 100%)',
				'grid-pattern': "linear-gradient(to right, rgba(131,42,141,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(131,42,141,0.05) 1px, transparent 1px)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
