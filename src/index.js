const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default
const base = require('../dist/base')
const utilities = require('../dist/utilities')

module.exports = plugin(function ({addUtilities, addBase, theme}) {
    const popShadowColors = Object.entries(flattenColorPalette(theme('colors'))).map(x => {
        let key1 = '.pop-shadow-'+x[0]
        let key2 = '.pop-shadow-border-'+x[0]
        return {
            [key1]: {
                '--color-pop-shadow': x[1]
            },
            [key2]: {
                '--color-pop-shadow-border': x[1]
            }
        }
    })

    addBase(base)

    addUtilities(utilities)
    addUtilities(popShadowColors)

}, {
    theme: {
        extend: {
            borderWidth: {
                '2.5': '2.5px',
                '3': '3px'
            },
            colors: {
                'pop-shadow': 'var(--color-pop-shadow)',
                'pop-shadow-border': 'var(--color-pop-shadow-border)',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out',
            }
        },
    },
})