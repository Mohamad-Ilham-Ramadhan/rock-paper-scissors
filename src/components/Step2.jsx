import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonPaper from "./ButtonPaper";
import ButtonScissors from "./ButtonScissors";
import ButtonRock from "./ButtonRock";
import ButtonHollow from "./ButtonHollow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      width: 720,
      flexWrap: "nowrap",
    },
    "&.step4": {
      width: 965,
      flexWrap: "nowrap",
    },
  },
  user: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
    "& button": {
      marginBottom: 24,
    },
    "& p": {
      fontSize: ".9rem",
      fontWeight: 700,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      flex: 1, // step4
      "& button": {
        width: 290,
        height: 290,
        order: 2,
        "& div": {
          width: 220,
          height: 220,
        },
        "& img": {
          width: 90,
        },
      },
      "& p": {
        width: "100%",
        order: 1,
        fontSize: "1.5rem",
        marginBottom: 56,
        letterSpacing: "3px",
      },
    },
  },
  house: {
    marginLeft: "auto",
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
    "& button": {
      marginBottom: 24,
    },
    "& p": {
      fontSize: ".9rem",
      fontWeight: 700,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      flex: 1, // step4
      "& button": {
        width: 290,
        height: 290,
        order: 2,
        "& div": {
          width: 220,
          height: 220,
        },
        "& img": {
          width: 90,
        },
      },
      "& p": {
        width: "100%",
        order: 1,
        fontSize: "1.5rem",
        marginBottom: 56,
        letterSpacing: "3px",
      },
    },
  },
  final: {
    // step4
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      color: "white",
      textTransform: "uppercase",
      fontSize: "3.5rem",
      fontWeight: 700,
      marginBottom: 16,
    },
    "& .MuiPaper-root": {
      textTransform: "uppercase",
      fontSize: "1rem",
      color: "#dc3f5c",
      letterSpacing: 3,
      padding: [12, 56],
    },
  },
}));

function Step2({ step, nextStep }) {
  const styles = useStyles();
  return (
    <div className={clsx(styles.root, step == 4 && "step4")}>
      <div className={styles.user}>
        <ButtonScissors onClick={nextStep} />
        <Typography>You picked</Typography>
      </div>
      {step == 4 && (
        <div className={styles.final}>
          <Typography variant="h1">You lose</Typography>
          <ButtonBase>
            <Paper>play again</Paper>
          </ButtonBase>
        </div>
      )}
      <div className={styles.house}>
        {step == 2 && <ButtonHollow />}
        {[3, 4].includes(step) && <ButtonRock />}
        <Typography>The house picked</Typography>
      </div>
    </div>
  );
}
function mapState(state) {
  return {
    step: state.step,
  };
}
export default connect(mapState)(Step2);
