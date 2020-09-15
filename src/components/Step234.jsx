import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import ButtonPaper from "./ButtonPaper";
import ButtonRock from "./ButtonRock";
import ButtonScissors from "./ButtonScissors";
import ButtonHollow from "./ButtonHollow";

// actions:
import resetStep from "../actions/resetStep";
import pickComputerOption from "../actions/pickComputerOption";
import getTheWinner from "../actions/getTheWinner";
import resetWinner from "../actions/resetWinner";
import increaseScore from "../actions/increaseScore";
import decreaseScore from "../actions/decreaseScore";
// styles
import useStyles from "./step234Style";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function Step2({
  step,
  userOption,
  computerOption,
  winner,
  pickComputerOption,
  getTheWinner,
  nextStep,
  resetStep,
  resetWinner,
  increaseScore,
  decreaseScore,
}) {
  const styles = useStyles();
  useEffect(() => {
    const options = ["paper", "rock", "scissors"];
    if (step == 4) {
      switch (winner) {
        case "user":
          increaseScore();
          return;
        case "computer":
          decreaseScore();
          return;
      }
    }
    setTimeout(() => {
      if (step == 2) {
        pickComputerOption(options[getRandomInt(3)]);
        nextStep();
      }
      if (step == 3) {
        getTheWinner(userOption, computerOption);
        console.log(winner);
        nextStep();
      }
    }, 1000);
  }, [step]);
  return (
    <div className={clsx(styles.root, step == 4 && "step4")}>
      <div className={styles.user}>
        <CSSTransition
          appear={true}
          in={[2, 3, 4].includes(step)}
          timeout={300}
          classNames={styles.optionTrans}
          unmountOnExit
        >
          <>
            {userOption == "paper" && (
              <ButtonPaper isPulse={winner == "user"} tabIndex={-1} />
            )}
            {userOption == "scissors" && (
              <ButtonScissors isPulse={winner == "user"} tabIndex={-1} />
            )}
            {userOption == "rock" && (
              <ButtonRock isPulse={winner == "user"} tabIndex={-1} />
            )}
          </>
        </CSSTransition>
        <Typography>You picked</Typography>
      </div>

      <div className={clsx(styles.final, step == 4 ? null : "hidden")}>
        <Typography variant="h1">
          {winner == "draw" && "Draw"}
          {winner == "user" && "You Win"}
          {winner == "computer" && "You lose"}
          {winner == null && "No Game"}
        </Typography>
        <Button
          onClick={() => {
            resetStep();
            resetWinner();
          }}
        >
          <Paper>play again</Paper>
        </Button>
      </div>

      <div className={styles.house}>
        {step == 2 && <ButtonHollow />}
        <CSSTransition
          appear={true}
          in={[3, 4].includes(step)}
          timeout={300}
          classNames={styles.optionTrans}
          unmountOnExit
        >
          <>
            {computerOption == "paper" && (
              <ButtonPaper
                isPulse={winner == "computer" ? true : false}
                tabIndex={-1}
              />
            )}
            {computerOption == "scissors" && (
              <ButtonScissors
                isPulse={winner == "computer" ? true : false}
                tabIndex={-1}
              />
            )}
            {computerOption == "rock" && (
              <ButtonRock
                isPulse={winner == "computer" ? true : false}
                tabIndex={-1}
              />
            )}
          </>
        </CSSTransition>

        <Typography>The house picked</Typography>
      </div>
    </div>
  );
}
function mapState(state) {
  return {
    step: state.step,
    userOption: state.userOption,
    computerOption: state.computerOption,
    winner: state.winner,
  };
}
function mapDispatch(dispatch) {
  return {
    resetStep: () => dispatch(resetStep()),
    resetWinner: () => dispatch(resetWinner()),
    increaseScore: () => dispatch(increaseScore()),
    decreaseScore: () => dispatch(decreaseScore()),
    pickComputerOption: (option) => dispatch(pickComputerOption(option)),
    getTheWinner: (userOption, computerOption) =>
      dispatch(getTheWinner(userOption, computerOption)),
  };
}
export default connect(mapState, mapDispatch)(Step2);
