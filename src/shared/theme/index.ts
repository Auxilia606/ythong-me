import { inputBaseClasses } from "@mui/material/InputBase";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

const theme = createTheme({
  cssVariables: { cssVarPrefix: "", colorSchemeSelector: "class" },
  typography: {
    fontFamily:
      'var(--font-pretendard), Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
  colorSchemes: {
    light: {},
    dark: {},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@supports (-moz-appearance: none)": {
          "*": {
            scrollbarWidth: "thin",
            scrollbarColor:
              "rgba(var(--palette-text-primaryChannel) / 0.26) transparent",
          },
        },
        "*::-webkit-scrollbar": {
          width: 8,
          height: 8,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "*::-webkit-scrollbar-button": {
          display: "none",
          width: 0,
          height: 0,
          backgroundColor: "transparent",
        },
        "*::-webkit-scrollbar-button:single-button": {
          display: "none",
          width: 0,
          height: 0,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundClip: "content-box",
          backgroundColor: "rgba(var(--palette-text-primaryChannel) / 0.24)",
          border: "2px solid transparent",
          borderRadius: 999,
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(var(--palette-text-primaryChannel) / 0.38)",
        },
        "*::-webkit-scrollbar-corner": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`.${inputBaseClasses.input}.${outlinedInputClasses.input}:-webkit-autofill`]:
            {
              WebkitBoxShadow: `0 0 0 100px var(--palette-background-paper) inset`,
              WebkitTextFillColor: "var(--palette-text-primary)",
              caretColor: "var(--palette-text-primary)",
            },
        },
      },
    },
  },
});

export default theme;
