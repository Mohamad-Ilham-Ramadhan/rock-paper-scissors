import { createMuiTheme } from "@material-ui/core/styles";
import { barlowSemiCondensed600, barlowSemiCondensed700 } from "./fonts";

// <== Colors ==>
// ### Primary
const scissorsGradient = "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)";
const paperGradient = "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)";
const rockGradient = "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)";
const lizardGradient = "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)";
const cyan = "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)";

// ### Neutral

const darkText = "hsl(229, 25%, 31%)";
const scoreText = "hsl(229, 64%, 46%)";
const headerOutline = "hsl(217, 16%, 45%)";

// ### Background

const radialGradient = "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)";

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Barlow Semi Condensed, Roboto, Helvetica, Arial, sans-serif",
  },
  palette: {
    primary: {
      scissorsGradient,
      paperGradient,
      rockGradient,
      lizardGradient,
      // cyan,
      main: cyan,
    },
    neutral: {
      darkText,
      scoreText,
      headerOutline,
    },
    background: {
      radialGradient,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [barlowSemiCondensed600, barlowSemiCondensed700],
        body: {
          fontFamily:
            "Barlow Semi Condensed, Roboto, Helvetica, Arial, sans-serif",
        },
        button: {
          fontFamily: "inherit",
        },
      },
    },
  },
});
// customizedTheme.typography.h1 = {
//   fontSize: "1.35rem",
//   fontWeight: "800",
//   [customizedTheme.breakpoints.up("md")]: {
//     fontSize: "1.35rem",
//   },
// };

export default customizedTheme;
