export default function userOption(state = null, action) {
  switch (action.type) {
    case "PICK_USER_OPTION":
      return action.option;
    default:
      return state;
  }
}
