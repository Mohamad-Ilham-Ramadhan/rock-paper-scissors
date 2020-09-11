import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonOption from "./ButtonOption";
import iconRock from "../images/icon-rock.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    borderBottom: "5px solid hsl(349, 71%, 37%)",
  },
}));

export default function ButtonRock({ className, ...props }) {
  const styles = useStyles();
  return (
    <ButtonOption
      img={iconRock}
      className={clsx(className, styles.root)}
      {...props}
    />
  );
}
