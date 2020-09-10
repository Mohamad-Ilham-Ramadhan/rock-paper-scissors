export default function step(state = 1, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return state + 1;
    case "RESET_STEP":
      return 1;
    default:
      return state;
  }
}
