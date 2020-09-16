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

// const useStyles = makeStyles((theme) => ({}));

function Options({ className, step, nextStep }) {
  // const styles = useStyles();
  return <>{step == 1 ? <Step1 /> : <Step234 nextStep={nextStep} />}</>;
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
