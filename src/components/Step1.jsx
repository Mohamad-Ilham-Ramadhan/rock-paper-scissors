import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ButtonPaper from "./ButtonPaper";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";

import bgTriangle from "../images/bg-triangle.svg";

// actions:
import nextStep from "../actions/nextStep";
import pickUserOption from "../actions/pickUserOption";

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
    [theme.breakpoints.up("md")]: {
      bottom: 0,
    },
  },
  step1Trans: {
    // step2 and 3 animation
    "&-appear": {
      opacity: 0,
      transform: "scale(.1) rotate(60deg)",
    },
    "&-appear-active": {
      opacity: 1,
      transform: "scale(1) rotate(0deg)",
      transition: "opacity 500ms, transform 500ms",
    },
  },
}));

function Step1({ className, nextStep, step, pickUserOption }) {
  const styles = useStyles();

  return (
    <CSSTransition
      appear={true}
      in={step == 1}
      timeout={500}
      classNames={styles.step1Trans}
    >
      <div className={clsx(styles.root, className)}>
        <ButtonPaper
          onClick={() => {
            nextStep();
            pickUserOption("paper");
          }}
          className={styles.paper}
        />

        <ButtonScissors
          onClick={() => {
            nextStep();
            pickUserOption("scissors");
          }}
          className={styles.scissors}
        />

        <ButtonRock
          onClick={() => {
            nextStep();
            pickUserOption("rock");
          }}
          className={styles.rock}
        />
        <img src={bgTriangle} className={styles.bgTriangle} alt="" />
      </div>
    </CSSTransition>
  );
}
function mapState(state) {
  return {
    step: state.step,
  };
}
function mapDispatch(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    pickUserOption: (option) => dispatch(pickUserOption(option)),
  };
}
export default connect(mapState, mapDispatch)(Step1);
