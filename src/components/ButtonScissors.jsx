import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import iconScissors from "../images/icon-scissors.svg";

const useStyles = makeStyles((theme) => ({
  scissors: {
    backgroundImage:
      "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    borderBottom: "5px solid hsl(39, 89%, 34%)",
    position: "absolute",
    right: 0,
    "& img": {
      width: 48,
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        width: 70,
      },
    },
  },
}));

export default function ButtonScissors({ className }) {
  const styles = useStyles();
  return (
    <button className={clsx(className, "option", styles.scissors)}>
      <div>
        <img src={iconScissors} alt="" />
      </div>
    </button>
  );
}
