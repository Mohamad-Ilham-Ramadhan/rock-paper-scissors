import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hollow: {
    backgroundColor: "transparent",
    borderBottom: "none",
    boxShadow: "none",
    "& div": {
      backgroundColor: "hsla(0, 0%, 0%, .15)",
      borderTop: "none",
    },
  },
}));

export default function ButtonHollow({ className, onClick }) {
  const styles = useStyles();
  return (
    <button
      onClick={onClick}
      className={clsx("option", className, styles.hollow)}
    >
      <div className="inner"></div>
    </button>
  );
}
