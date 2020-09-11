import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonPaper from "./ButtonPaper";
import ButtonOption from "./ButtonOption";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";

import bgTriangle from "../images/bg-triangle.svg";

// actions:
import nextStep from "../actions/nextStep";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 311,
    height: 369,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      width: 480,
      height: 440,
    },
  },
  bgTriangle: {
    position: "absolute",
    left: "50%",
    top: 66,
    transform: "translate(-50%, 0)",
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
    bottom: 86,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

function Step1({ className, nextStep }) {
  const styles = useStyles();
  return (
    <div className={clsx(styles.root, className)}>
      <ButtonPaper onClick={nextStep} className={styles.paper} />

      <ButtonScissors onClick={nextStep} className={styles.scissors} />

      <ButtonRock onClick={nextStep} className={styles.rock} />
      <img src={bgTriangle} className={styles.bgTriangle} alt="" />
    </div>
  );
}
function mapDispatch(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
  };
}
export default connect(null, mapDispatch)(Step1);
