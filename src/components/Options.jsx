import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Step1 from "./Step1";
import Step2 from "./Step2";

// actions:
import nextStep from "../actions/nextStep";
import resetStep from "../actions/resetStep";
import pickOption from "../actions/pickOption";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 311,
    height: 288,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      width: 480,
      height: 440,
    },
  },
}));

function Options({ className, step, option, nextStep, resetStep, pickOption }) {
  const styles = useStyles();
  console.log(step);
  return (
    <div className={clsx(styles.root, className)}>
      {step == 1 && <Step2 />}
      {step == 2 && <Step2 nextStep={nextStep} />}
      {step == 3 && <Step3 nextStep={nextStep} />}
      {step == 4 && <Step4 resetStep={resetStep} />}
    </div>
  );
}

function Step3({ nextStep }) {
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 1500);
  }, []);
  return <div>Step 3</div>;
}
function Step4({ resetStep }) {
  useEffect(() => {
    setTimeout(() => {
      resetStep();
    }, 1500);
  }, []);
  return <div>Step 4</div>;
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
