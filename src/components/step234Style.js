import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 400,
    transition: "max-width 300ms",
    [theme.breakpoints.up("md")]: {
      maxWidth: 720,
      flexWrap: "nowrap",
    },
    "&.step4": {
      width: "100%",
      flexWrap: "wrap",
      [theme.breakpoints.up("md")]: {
        maxWidth: 965,
        flexWrap: "nowrap",
      },
    },
  },
  user: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
    "& button": {
      marginBottom: 24,
    },
    "& p": {
      fontSize: ".9rem",
      fontWeight: 700,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      flex: 1, // step4
      order: 1, // step4
      "& button": {
        order: 2,
      },
      [theme.breakpoints.up("lg")]: {
        "& button": {
          width: 290,
          height: 290,
          "& .inner": {
            width: 220,
            height: 220,
          },
          "& img": {
            width: 90,
          },
        },
      },
      "& p": {
        width: "100%",
        order: 1,
        fontSize: "1.5rem",
        marginBottom: 56,
        letterSpacing: "3px",
      },
    },
  },
  house: {
    marginLeft: "auto",
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
    "& button": {
      marginBottom: 24,
    },
    "& p": {
      fontSize: ".9rem",
      fontWeight: 700,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      flex: 1, // step4
      order: 3, // step4
      "& button": {
        order: 2,
      },
      [theme.breakpoints.up("lg")]: {
        "& button": {
          width: 290,
          height: 290,
          "& .inner": {
            width: 220,
            height: 220,
          },
          "& img": {
            width: 90,
          },
        },
      },
      "& p": {
        width: "100%",
        order: 1,
        fontSize: "1.5rem",
        marginBottom: 56,
        letterSpacing: "3px",
      },
    },
  },
  final: {
    // step4
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    order: 3,
    marginTop: 68,
    opacity: 1,
    transition: "opacity 300ms, transform 300ms",
    "& h1": {
      color: "white",
      textTransform: "uppercase",
      fontSize: "3.5rem",
      fontWeight: 700,
      marginBottom: 16,
      minWidth: 300,
    },
    "& .MuiPaper-root": {
      textTransform: "uppercase",
      fontSize: "1rem",
      color: "#dc3f5c",
      letterSpacing: 3,
      padding: [12, 56],
    },
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
      order: 2,
      marginTop: 0,
      "& .MuiPaper-root": {
        padding: [14, 56],
      },
    },
    "&.hidden": {
      visibility: "hidden",
      opacity: 0,
      transform: "scale(0)",
    },
  },
  optionTrans: {
    // step2 and 3 animation
    "&-appear": {
      opacity: 0,
      transform: "scale(.5)",
    },
    "&-appear-active": {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 300ms, transform 300ms",
    },
    "&-enter": {
      opacity: 0,
      transform: "scale(.5)",
    },
    "&-enter-active": {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 300ms, transform 300ms",
    },
    "&-exit": {
      opacity: 1,
    },
    "&-exit-active": {
      opacity: 0,
      transition: "opacity 200ms",
    },
  },
}));

export default useStyles;
