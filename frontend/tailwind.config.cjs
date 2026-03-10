/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme: {
        extend: {
            colors: {
                'theme-dark': '#1a3841',
                'theme-primary': '#f9d74f',
                'theme-black': '#000000',
                'theme-text': '#595b62',
                'theme-heading': '#051b05',
                'theme-gray': '#f1f1f2',
                'theme-gray-light': '#f8f5f2',
            },
            spacing: {
                '120': '120px',
            },
            keyframes: {
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                'slow-spin': 'rotate 10s infinite linear',
                'float': 'float 3s ease-in-out infinite',
            },
            fontFamily: {
                'title': ['Poppins', 'sans-serif'],
                'text': ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1344px',
                },
            },
        },
    },
    plugins: [],
}
