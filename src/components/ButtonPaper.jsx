import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import iconPaper from "../images/icon-paper.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundImage:
      "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    borderBottom: "5px solid hsl(230, 89%, 47%)",
  },
}));

export default function ButtonPaper({ className, onClick }) {
  const styles = useStyles();
  return (
    <button
      onClick={onClick}
      className={clsx("option", className, styles.paper)}
    >
      <div>
        <img src={iconPaper} alt="" />
      </div>
    </button>
  );
}
