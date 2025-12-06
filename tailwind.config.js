/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // "Elegant Dark" for structural text and heavy elements
                primary: '#1a1a1a',
                // "Burnt Orange" for appetizing calls-to-action and highlights
                accent: '#c2410c',
                // "Warm White" for a clean background
                background: '#fafafa',
                // "Subtle Gray" for borders and secondary text
                surface: '#f3f4f6',
            }
        },
    },
    plugins: [],
}
