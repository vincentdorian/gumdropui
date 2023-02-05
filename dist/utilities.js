module.exports = {
    ".gum-shadow-none": {
        "box-shadow": "0 0 0 0 theme('colors.gum-shadow'), 0 0 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-xs": {
        "--size-gum-shadow": "0.06125rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-sm": {
        "--size-gum-shadow": "0.125rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow": {
        "--size-gum-shadow": "0.25rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-md":{
        "--size-gum-shadow": "0.375rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-lg": {
        "--size-gum-shadow": "0.5rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-xl": {
        "--size-gum-shadow": "0.75rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-2xl": {
        "--size-gum-shadow": "1rem",
        "box-shadow": "var(--size-gum-shadow) var(--size-gum-shadow) 0 calc(var(--width-gum-shadow-border)*(-1)) theme('colors.gum-shadow'), var(--size-gum-shadow-border) var(--size-gum-shadow-border) 0 0 theme('colors.gum-shadow-border')"
    },
    ".gum-shadow-border-0": {
        "--width-gum-shadow-border": "0px",
        "--size-gum-shadow-border": "var(--size-gum-shadow)"
    },
    ".gum-shadow-border": {
        "--width-gum-shadow-border": "1px",
        "--size-gum-shadow-border": "var(--size-gum-shadow)"
    },
    ".gum-shadow-border-2": {
        "--width-gum-shadow-border": "2px",
        "--size-gum-shadow-border": "var(--size-gum-shadow)"
    },
    ".gum-shadow-border-3": {
        "--width-gum-shadow-border": "3px",
        "--size-gum-shadow-border": "var(--size-gum-shadow)"
    },
    
    ".gum-shadow-border-4": {
        "--width-gum-shadow-border": "4px",
        "--size-gum-shadow-border": "var(--size-gum-shadow)"
    },
    ".gum-float": {
        "transform": "translate(calc(var(--size-gum-shadow) * -1 ), calc(var(--size-gum-shadow) * -1 ))",
    },
    ".gum-float-none": {
        "transform": "translate(0, 0)",
    }
}