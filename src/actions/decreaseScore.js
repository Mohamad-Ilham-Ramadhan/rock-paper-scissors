export default function decreaseScoreAndSaveToSessionStorage() {
  return function (dispatch, getState) {
    const { score } = getState();
    sessionStorage.setItem("score", score - 1);
    dispatch(decreaseScore());
  };
}

function decreaseScore() {
  return {
    type: "DECREASE_SCORE",
  };
}
