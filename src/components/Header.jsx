import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typograhpy from "@material-ui/core/Typography";

import Score from "./Score";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 10,
    border: `3px solid ${theme.palette.neutral.headerOutline}`,
    borderRadius: 8,
  },
  h1: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: 700,
    fontSize: "1.35rem",
    lineHeight: "16px",
    margin: 16,
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
