import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonPaper from "./ButtonPaper";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";

import bgTriangle from "../images/bg-triangle.svg";
import iconRock from "../images/icon-rock.svg";

const useStyles = makeStyles((theme) => ({
  bgTriangle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -44%)",
    width: "65%",
    zIndex: -2,
  },
  paper: {
    position: "absolute",
    left: 0,
  },
  scissors: {
    position: "absolute",
    right: 0,
  },
  rock: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export default function Step1() {
  const styles = useStyles();
  return (
    <>
      <ButtonPaper className={styles.paper} />

      <ButtonScissors className={styles.scissors} />

      <ButtonRock className={styles.rock} />
      <img src={bgTriangle} className={styles.bgTriangle} alt="" />
    </>
  );
}
