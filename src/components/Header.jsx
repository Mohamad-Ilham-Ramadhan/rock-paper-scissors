import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typograhpy from "@material-ui/core/Typography";

import Score from "./Score";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    border: `3px solid ${theme.palette.neutral.headerOutline}`,
    borderRadius: 8,
    maxWidth: 702,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      padding: [16, 20],
      borderRadius: 16,
    },
  },
  h1: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: 700,
    fontSize: "1.35rem",
    lineHeight: "16px",
    marginLeft: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      lineHeight: "32px",
    },
  },
  score: {
    marginLeft: "auto",
  },
}));

export default function Header({ className }) {
  const styles = useStyles();
  return (
    <div className={clsx(className, styles.root)}>
      <Typograhpy className={styles.h1}>
        rock <br /> paper <br /> scissors
      </Typograhpy>
      <Score className={styles.score} />
    </div>
  );
}
