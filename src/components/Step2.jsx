import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonPaper from "./ButtonPaper";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";
import ButtonHollow from "./ButtonHollow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      width: 720,
      flexWrap: "nowrap",
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
      "& button": {
        width: 290,
        height: 290,
        order: 2,
        "& div": {
          width: 220,
          height: 220,
        },
        "& img": {
          width: 90,
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
      "& button": {
        width: 290,
        height: 290,
        order: 2,
        "& div": {
          width: 220,
          height: 220,
        },
        "& img": {
          width: 90,
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
}));

export default function Step2() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <ButtonPaper />
        <Typography>You picked</Typography>
      </div>
      <div className={styles.house}>
        <ButtonHollow />
        <Typography>The house picked</Typography>
      </div>
    </div>
  );
}
