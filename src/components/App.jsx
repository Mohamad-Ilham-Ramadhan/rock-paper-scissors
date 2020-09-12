import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import Header from "./Header";
import Options from "./Options";
import Rules from "./Rules";

// actions
import fetchScore from "../actions/fetchScore";
import { useForkRef } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      background: `linear-gradient( hsl(214, 47%, 23%), hsl(237, 49%, 15%))`,
      backgroundRepeat: "no-repeat",
    },
    "#root": {
      overflow: "hidden",
    },
  },
  container: {
    paddingTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 48,

    [theme.breakpoints.up("md")]: {
      paddingTop: 48,
      marginBottom: 0,
    },
  },
  header: {
    marginBottom: 100,
    [theme.breakpoints.up("md")]: {
      marginBottom: 60,
    },
  },
  options: {},
}));

function App({ fetchScore }) {
  const styles = useStyles();
  useEffect(() => {
    fetchScore();
  });
  return (
    <>
      <Container className={styles.container}>
        <Header className={styles.header} />
        <Options className={styles.options} />
      </Container>
      <Rules />
    </>
  );
}
function mapDispatch(dispatch) {
  return {
    fetchScore: () => dispatch(fetchScore()),
  };
}
export default connect(null, mapDispatch)(App);
