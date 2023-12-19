/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            screens: {
                'short': {
                    // hard coded value
                    'raw': '(max-height: 700px)'
                }
            }
        },
    },
}
