export default function winner(state = null, action) {
  switch (action.type) {
    case "GET_THE_WINNER":
      return action.winner;
    case "RESET_WINNER":
      return action.winner;
    default:
      return state;
  }
}
