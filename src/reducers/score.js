export default function score(state = 0, action) {
  switch (action.type) {
    case "INCREASE_SCORE":
      return ++state;
    case "DECREASE_SCORE":
      return --state;
    default:
      return state;
  }
}
