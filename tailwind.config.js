/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-inter)',

            },
            fontSize: {
                '34': '34px',
            },
            boxShadow: {
                '3xl': ' 3px 4px 26px 0px rgba(0, 0, 0, 0.25)',
            },
            colors: {
                'white': '#FFFFFF',
                'black-700': '#1E1E1E',
                'gray-90': '#D9D9D9',
                'gray-400': '#363447',
                'gray-760': '#4A4556',
                'gray-960': '#292738',
                'blue-100': '#90F7EC',
                'green-100': '#81FBB8',
                'purple-100': '#CE9FFC',
                'purple-300': '#A66DE9',
                'orange-100': '#DF9780',
                'red-300': '#EA5455',
                'blue-200': '#7367F0'
            },
        },
        plugins: [],
    }

}