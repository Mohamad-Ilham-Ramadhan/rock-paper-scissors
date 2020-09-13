import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    border: 0,
    width: 132,
    height: 132,
    borderRadius: "50%",
    background: "hsl(225, 4%, 62%)",
    borderBottom: "5px solid hsl(225, 4%, 52%)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0px 1px 2px -1px rgba(0,0,0,0.4), 0px 2px 4px 0px rgba(0,0,0,0.58)",
    "&:hover": {
      cursor: "pointer",
    },
    "& .inner": {
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

      "& .inner": {
        width: 150,
        height: 150,
        borderTop: "8px solid hsla(230, 10%, 83%, 1)",
      },
      "& img": {
        width: 65,
      },
    },
  },
  "@keyframes pulse": {
    from: {
      backgroundColor: "hsla(0, 0%, 90%, .1)",
    },
    to: {
      transform: "scale(2.1)",
      backgroundColor: "hsla(0, 0%, 90%, .0)",
    },
  },
  "@keyframes pulse-md": {
    from: {
      backgroundColor: "hsla(0, 0%, 90%, .1)",
    },
    to: {
      transform: "scale(2.5)",
      backgroundColor: "hsla(0, 0%, 90%, .0)",
    },
  },
  pulse: {
    zIndex: -10,
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    position: "absolute",
    // backgroundColor: "hsla(0, 0%, 90%, .1)", // temp
  },
  pulse1: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite",
    [theme.breakpoints.up("md")]: {
      animation: "$pulse-md 1.5s infinite",
    },
  },
  pulse2: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite .5s",
    [theme.breakpoints.up("md")]: {
      animation: "$pulse-md 1.5s infinite .5s",
    },
  },
  pulse3: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite 1s",
    [theme.breakpoints.up("md")]: {
      animation: "$pulse-md 1.5s infinite 1s",
    },
  },
}));

export default function ButtonOption({
  img,
  className,
  onClick,
  isPulse,
  ...props
}) {
  const styles = useStyles();
  // const [pulse, setPulse] = useState(true);
  return (
    <Button
      onClick={onClick}
      className={clsx(styles.root, className)}
      {...props}
    >
      <div className="inner">
        <img src={img} alt="" />
      </div>
      {isPulse && (
        <>
          <div className={styles.pulse1}></div>
          <div className={styles.pulse2}></div>
          <div className={styles.pulse3}></div>
        </>
      )}
    </Button>
  );
}
