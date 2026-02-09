/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                brand: {
                    DEFAULT: '#FF5500',
                    hover: '#FF6B00',
                    accent: '#FFD700', // Yellowish accent for gradients
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#888888',
                    muted: '#444444',
                },
                border: {
                    DEFAULT: '#222222',
                    light: '#333333',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            boxShadow: {
                'spotlight': '0 0 100px 50px rgba(255, 255, 255, 0.03)',
                'glass-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
