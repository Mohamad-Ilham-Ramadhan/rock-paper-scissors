import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonPaper from "./ButtonPaper";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";
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
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    if (winner === "computer") {
      setOpen(true);
    }
  }
  useEffect(() => {
    handleOpen();
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
        nextStep();
      }
    }, 1000);
  }, [step]);
  return (
    <div className={clsx(styles.root, step == 4 && "step4")}>
      <div className={styles.user}>
        {userOption == "paper" && <ButtonPaper isPulse={winner == "user"} />}
        {userOption == "scissors" && (
          <ButtonScissors isPulse={winner == "user"} />
        )}
        {userOption == "rock" && <ButtonRock isPulse={winner == "user"} />}
        <Typography>You picked</Typography>
      </div>

      <div
        className={styles.final}
        style={{ visibility: step == 4 ? "unset" : "hidden" }}
      >
        <Typography variant="h1">
          {winner == "draw" && "Draw"}
          {winner == "user" && "You Win"}
          {winner == "computer" && "You lose"}
        </Typography>
        <ButtonBase
          onClick={() => {
            resetStep();
            resetWinner();
          }}
        >
          <Paper>play again</Paper>
        </ButtonBase>
      </div>

      <div className={styles.house}>
        {step == 2 && <ButtonHollow />}
        {[3, 4].includes(step) && (
          <>
            {computerOption == "paper" && (
              <ButtonPaper
                isPulse={winner == "computer" ? true : false}
                onClick={nextStep}
              />
            )}
            {computerOption == "scissors" && (
              <ButtonScissors
                isPulse={winner == "computer" ? true : false}
                onClick={nextStep}
              />
            )}
            {computerOption == "rock" && (
              <ButtonRock
                isPulse={winner == "computer" ? true : false}
                onClick={nextStep}
              />
            )}
          </>
        )}
        <Typography>The house picked</Typography>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reyhan Guoblag!!!</DialogTitle>
      </Dialog>
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
