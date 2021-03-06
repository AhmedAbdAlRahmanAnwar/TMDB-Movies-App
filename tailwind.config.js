/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "7rem",
        },
    },
    plugins: [require("daisyui")],
}
