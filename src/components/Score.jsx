import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: [8, 24],
  },
  label: {
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.75rem",
    color: theme.palette.neutral.scoreText,
  },
  score: {
    display: "block",
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.neutral.darkText,
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
