import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      background: `linear-gradient( hsl(214, 47%, 23%), hsl(237, 49%, 15%))`,
    },
  },
  container: {
    paddingTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
  },
  header: {},
}));

export default function App() {
  const styles = useStyles();
  return (
    <>
      <Container className={styles.container}>
        <Header className={styles.header} />
      </Container>
    </>
  );
}
