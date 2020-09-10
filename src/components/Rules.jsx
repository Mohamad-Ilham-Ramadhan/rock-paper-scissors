import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import imgRules from "../images/image-rules.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingBottom: 56,
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      paddingRight: 32,
    },
  },
  button: {
    color: "white",
    border: `solid 2px ${lighten(theme.palette.neutral.headerOutline, 0.4)}`,
    fontSize: "1rem",
    letterSpacing: 3,
    borderRadius: 8,
    padding: [6, 36],
  },
  dialog: {
    "& .MuiDialog-paper": {
      borderRadius: 8,
    },
    "& .MuiDialogTitle-root": {
      paddingLeft: 32,
      paddingRight: 32,
    },
    "& .MuiDialogTitle-root h2": {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "1.25rem",
      color: theme.palette.neutral.darkText,
      display: "flex",
      alignItems: "center",

      "& button": {
        marginLeft: "auto",
        marginRight: -12,
        color: "hsl(234, 15%, 74%)",
        "& svg": {
          fontSize: "1.75rem",
        },
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
        "& button": {
          "& svg": {
            fontSize: "2rem !important",
          },
        },
      },
    },
    "& .MuiDialogContent-root": {
      paddingBottom: 24,
      [theme.breakpoints.up("md")]: {
        paddingLeft: 48,
        paddingRight: 48,
      },
    },

    "& img": {
      width: "100%",
    },
  },
}));

export default function Rules() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={handleClick}
      >
        Rules
      </Button>
      <Dialog className={styles.dialog} open={open} onClose={handleClose}>
        <DialogTitle>
          Rules
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={imgRules} alt="Rules" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
