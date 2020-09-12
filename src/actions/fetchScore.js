export default function fetchScore() {
  return function (dispatch) {
    let score = JSON.parse(sessionStorage.getItem("score"));
    score = score === null ? 0 : score;
    dispatch({
      type: "FETCH_SCORE",
      score,
    });
  };
}
