import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
    padding: [8, 24],
    [theme.breakpoints.up("md")]: {
      padding: [16, 48],
      borderRadius: 8,
    },
  },
  label: {
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.75rem",
    color: theme.palette.neutral.scoreText,
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      letterSpacing: "3px",
      lineHeight: 1,
    },
  },
  score: {
    display: "block",
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.neutral.darkText,
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
      lineHeight: 1,
    },
  },
}));

export default function Score({ className }) {
  const styles = useStyles();
  return (
    <Paper className={clsx(className, styles.root)}>
      <span className={styles.label}>score</span>
      <span className={styles.score}>12</span>
    </Paper>
  );
}
