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
});
customizedTheme.overrides.MuiCssBaseline = {
  "@global": {
    "@font-face": [barlowSemiCondensed600, barlowSemiCondensed700],
    body: {
      fontFamily: "Barlow Semi Condensed, Roboto, Helvetica, Arial, sans-serif",
    },
    button: {
      fontFamily: "inherit",
    },
    ".option": {
      border: 0,
      width: 132,
      height: 132,
      borderRadius: "50%",
      background: "#3a84e3",
      borderBottom: "5px solid #1351a0",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        "0px 1px 2px -1px rgba(0,0,0,0.4), 0px 2px 4px 0px rgba(0,0,0,0.58)",
      "&:hover": {
        cursor: "pointer",
      },
      "& div": {
        width: 100,
        height: 100,
        background: "hsla(230, 10%, 95%, 1)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "5px solid hsla(230, 10%, 83%, 1)",
      },
      "& img": {
        width: 43,
      },
      [customizedTheme.breakpoints.up("md")]: {
        width: 200,
        height: 200,
        borderBottomWidth: "8px !important",

        "& div": {
          width: 150,
          height: 150,
          borderTop: "8px solid hsla(230, 10%, 83%, 1)",
        },
        "& img": {
          width: 65,
        },
      },
    },
  },
};
customizedTheme.overrides.MuiContainer = {
  maxWidthLg: {
    [customizedTheme.breakpoints.up("md")]: {
      maxWidth: 1200,
    },
  },
};

export default customizedTheme;
