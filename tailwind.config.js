/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
    darkMode: 'class',
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue', // Ini yang penting
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {
            // --- KUSTOMISASI PKL 65 ---
            colors: {
                'pkl-base': {
                    'orange': '#F58220',
                    'cream': '#FDF8E1',
                },
                'pkl-compliment': {
                    'yellow': '#FBE18B',
                    'blue': '#3A539B',
                    'green': '#668A4B',
                    'purple': '#6E498B',
                },
            },
            fontFamily: {
                // Kita daftarkan font-nya di sini
                // Pastikan nama dalam tanda kutip SAMA PERSIS dengan 
                // nama 'font-family' yang kita definisikan di app.css
                sans: ['"TT Bells"', 'sans-serif'], 
                headline: ['Rakkas', 'serif'],
                sub: ['Yodnam', 'sans-serif'],
            },
            // --- SELESAI KUSTOMISASI ---
        },
    },
    plugins: [forms],
};