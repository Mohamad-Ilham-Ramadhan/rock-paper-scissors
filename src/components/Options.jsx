import React from "react";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";

import bgTriangle from "../images/bg-triangle.svg";
import iconPaper from "../images/icon-paper.svg";
import iconRock from "../images/icon-rock.svg";
import iconScissors from "../images/icon-scissors.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 311,
    height: 288,
    position: "relative",
  },
  bgTriangle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    zIndex: -2,
  },
  option: {
    border: 0,
    width: 132,
    height: 132,
    borderRadius: "50%",
    background: "#3a84e3",
    borderBottom: "5px solid #1351a0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    "& div": {
      width: 100,
      height: 100,
      background: "hsl(0, 0%, 95%)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "5px solid hsl(0, 0%, 80%)",
    },
    "& img": {
      width: 43,
    },
  },
  paper: {
    backgroundImage:
      "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    borderBottom: "5px solid hsl(230, 89%, 47%)",
    position: "absolute",
    left: 0,
  },
  scissors: {
    backgroundImage:
      "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    borderBottom: "5px solid hsl(39, 89%, 34%)",
    position: "absolute",
    right: 0,
    "& img": {
      width: 48,
    },
  },
  rock: {
    backgroundImage:
      "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    borderBottom: "5px solid hsl(349, 71%, 37%)",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export default function Options({ className }) {
  const styles = useStyles();
  return (
    <div className={clsx(styles.root, className)}>
      <button className={clsx(styles.option, styles.paper)}>
        <div>
          <img src={iconPaper} alt="" />
        </div>
      </button>

      <button className={clsx(styles.option, styles.scissors)}>
        <div>
          <img src={iconScissors} alt="" />
        </div>
      </button>

      <button className={clsx(styles.option, styles.rock)}>
        <div>
          <img src={iconRock} alt="" />
        </div>
      </button>
      <img src={bgTriangle} className={styles.bgTriangle} alt="" />
    </div>
  );
}
