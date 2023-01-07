module.exports = {
    ".pop-shadow-none": {
        "box-shadow": "0 0 0 0 theme('colors.pop-shadow'), 0 0 0 0 theme('colors.pop-shadow-border')"
    },
    ".pop-shadow-sm": {
        "--size-pop-shadow": "3px",
        "box-shadow": "var(--size-pop-shadow) var(--size-pop-shadow) 0 var(--width-pop-shadow-border) theme('colors.pop-shadow'), var(--size-pop-shadow) var(--size-pop-shadow) 0 0 theme('colors.pop-shadow-border')"
    },
    ".pop-shadow":{
        "--size-pop-shadow": "5px",
        "box-shadow": "var(--size-pop-shadow) var(--size-pop-shadow) 0 var(--width-pop-shadow-border) theme('colors.pop-shadow'), var(--size-pop-shadow) var(--size-pop-shadow) 0 0 theme('colors.pop-shadow-border')"
    },
    ".pop-shadow-md": {
        "--size-pop-shadow": "7px",
        "box-shadow": "var(--size-pop-shadow) var(--size-pop-shadow) 0 var(--width-pop-shadow-border) theme('colors.pop-shadow'), var(--size-pop-shadow) var(--size-pop-shadow) 0 0 theme('colors.pop-shadow-border')",
    },
    ".pop-shadow-lg": {
        "--size-pop-shadow": "9px",
        "box-shadow": "var(--size-pop-shadow) var(--size-pop-shadow) 0 var(--width-pop-shadow-border) theme('colors.pop-shadow'), var(--size-pop-shadow) var(--size-pop-shadow) 0 0 theme('colors.pop-shadow-border')",
    },
    ".pop-shadow-xl": {
        "--size-pop-shadow": "12px",
        "box-shadow": "var(--size-pop-shadow) var(--size-pop-shadow) 0 var(--width-pop-shadow-border) theme('colors.pop-shadow'), var(--size-pop-shadow) var(--size-pop-shadow) 0 0 theme('colors.pop-shadow-border')"
    },
    ".pop-shadow-border-1": {
        "--width-pop-shadow-border": "-1px"
    },
    ".pop-shadow-border-2": {
    "--width-pop-shadow-border": "-2px",
    },
    ".pop-shadow-border-3": {
        "--width-pop-shadow-border": "-3px",
    }
}