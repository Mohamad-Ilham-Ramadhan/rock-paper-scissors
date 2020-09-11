import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonOption from "./ButtonOption";
import iconPaper from "../images/icon-paper.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    borderBottom: "5px solid hsl(230, 89%, 47%)",
    "&.pulse": {
      "&::after": {
        content: "''",
        display: "block",
        position: "absolute",
        background: "gray",
        width: 300,
        height: 300,
        borderRadius: "50%",
        zIndex: -1000,
      },
    },
  },
}));

export default function ButtonPaper({ className, ...props }) {
  const styles = useStyles();
  return (
    <ButtonOption
      img={iconPaper}
      className={clsx(className, styles.root)}
      {...props}
    />
  );
}
