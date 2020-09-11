import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
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
      width: 132,
      height: 132,
      backgroundColor: "hsla(0, 0%, 90%, .1)",
    },
    to: {
      width: 280,
      height: 280,
      backgroundColor: "hsla(0, 0%, 90%, .0)",
    },
  },
  pulse: {
    zIndex: -10,
    borderRadius: "100%",
    position: "absolute",
  },
  pulse1: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite",
  },
  pulse2: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite .5s",
  },
  pulse3: {
    extend: "pulse",
    animation: "$pulse 1.5s infinite 1s",
  },
}));

export default function ButtonOption({ img, className, onClick, isPulse }) {
  const styles = useStyles();
  // const [pulse, setPulse] = useState(true);
  return (
    <button onClick={onClick} className={clsx(styles.root, className)}>
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
    </button>
  );
}
