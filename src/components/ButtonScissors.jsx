import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonOption from "./ButtonOption";
import iconScissors from "../images/icon-scissors.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    borderBottom: "5px solid hsl(39, 89%, 34%)",
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

export default function ButtonScissors({ className, ...props }) {
  const styles = useStyles();
  return (
    <ButtonOption
      img={iconScissors}
      className={clsx(className, styles.root)}
      {...props}
    />
  );
}
