import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Step1 from "./Step1";

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
  bgTriangle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -44%)",
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
    "&:hover": {
      cursor: "pointer",
    },
    "& div": {
      width: 100,
      height: 100,
      background: "hsla(230, 10%, 95%, 1)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "5px solid hsla(230, 10%, 83%, 1)",
    },
    "& img": {
      width: 43,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
      borderBottomWidth: "8px !important",

      "& div": {
        width: 150,
        height: 150,
        borderTop: "8px solid hsla(230, 10%, 83%, 1)",
      },
      "& img": {
        width: 65,
      },
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
    [theme.breakpoints.up("md")]: {
      "& img": {
        width: 70,
      },
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

function Options({ className, step, option, nextStep, resetStep, pickOption }) {
  const styles = useStyles();
  console.log(step);
  return (
    <div className={clsx(styles.root, className)}>
      {step == 1 && <Step1 />}
      {step == 2 && <Step2 nextStep={nextStep} />}
      {step == 3 && <Step3 nextStep={nextStep} />}
      {step == 4 && <Step4 resetStep={resetStep} />}
    </div>
  );
}
function Step2({ nextStep }) {
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 1500);
  }, []);
  return <div>Step 2</div>;
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
