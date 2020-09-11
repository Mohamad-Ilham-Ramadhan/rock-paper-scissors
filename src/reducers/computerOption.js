export default function computerOption(state = null, action) {
  switch (action.type) {
    case "PICK_COMPUTER_OPTION":
      return action.option;
    default:
      return state;
  }
}
