import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import iconRock from "../images/icon-rock.svg";

const useStyles = makeStyles((theme) => ({
  rock: {
    backgroundImage:
      "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    borderBottom: "5px solid hsl(349, 71%, 37%)",
  },
}));

export default function ButtonRock({ className }) {
  const styles = useStyles();
  return (
    <button className={clsx(className, "option", styles.rock)}>
      <div>
        <img src={iconRock} alt="" />
      </div>
    </button>
  );
}
