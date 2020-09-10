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
  },
  label: {
    display: "flex",
    width: "100%",
    "& p:last-child": {
      marginLeft: "auto",
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
