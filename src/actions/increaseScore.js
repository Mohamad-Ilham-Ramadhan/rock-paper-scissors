export default function increaseScoreAndSaveToSessionStorage() {
  return function (dispatch, getState) {
    const { score } = getState();
    sessionStorage.setItem("score", score + 1);
    dispatch(increaseScore());
  };
}

function increaseScore() {
  return {
    type: "INCREASE_SCORE",
  };
}
