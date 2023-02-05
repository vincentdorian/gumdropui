module.exports = {
    ".gum-shadow-none": {
        "box-shadow": "0 0 0 0 theme('colors.gum-shadow'), 0 0 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-xs": {
        "--size-gum-shadow": "1px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-sm": {
        "--size-gum-shadow": "2px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow": {
        "--size-gum-shadow": "3px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-md":{
        "--size-gum-shadow": "5px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-lg": {
        "--size-gum-shadow": "7px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')",
    },
    ".gum-shadow-xl": {
        "--size-gum-shadow": "9px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')",
    },
    ".gum-shadow-2xl": {
        "--size-gum-shadow": "12px",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 var(--width-gum-shadow-border) theme('colors.gum-shadow'), var(--size-gum-shadow) var(--size-gum-shadow) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-border-1": {
        "--width-gum-shadow-border": "-1px"
    },
    ".gum-shadow-border-2": {
    "--width-gum-shadow-border": "-2px",
    },
    ".gum-shadow-border-3": {
        "--width-gum-shadow-border": "-3px",
    },
    ".gum-float": {
        "transform": "translate(calc(var(--size-gum-shadow) * -1 ), calc(var(--size-gum-shadow) * -1 ))",
    },
    ".gum-float-none": {
        "transform": "translate(0, 0)",
    }
}