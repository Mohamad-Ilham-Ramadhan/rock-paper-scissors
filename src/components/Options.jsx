import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Step1 from "./Step1";
import Step234 from "./Step234";

// actions:
import nextStep from "../actions/nextStep";
import resetStep from "../actions/resetStep";
import pickUserOption from "../actions/pickUserOption";

const useStyles = makeStyles((theme) => ({
  step1: {
    "&-enter": {
      opacity: 0,
      transform: "scale(0.9)",
    },
    "&-enter-active": {
      opacity: 1,
      transform: "translateX(0)",
      transition: "opacity 300ms, transform 300ms",
    },
    "&-exit": {
      opacity: 1,
    },
    "&-exit-active": {
      opacity: 0,
      transform: "scale(0.9)",
      transition: "opacity 300ms, transform 300ms",
    },
  },
}));

function Options({ className, step, option, nextStep, resetStep, pickOption }) {
  const styles = useStyles();
  console.log(step);
  return (
    <>
      {/* <SwitchTransition>
        <CSSTransition
          key={step}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          timeout={300}
          classNames={styles.step1}
          unmountOnExit
        > */}
      {step == 1 ? <Step1 /> : <Step234 nextStep={nextStep} />}
      {/* </CSSTransition>
      </SwitchTransition> */}
    </>
  );
}

function mapState(state) {
  return {
    option: state.option,
    step: state.step,
  };
}
function mapDispatch(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    resetStep: () => dispatch(resetStep()),
    pickOption: (option) => dispatch(pickOption(option)),
  };
}
export default connect(mapState, mapDispatch)(Options);
