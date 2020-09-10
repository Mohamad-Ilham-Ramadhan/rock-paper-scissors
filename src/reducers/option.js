export default function option(state = null, action) {
  switch (action.type) {
    case "PICK_OPTION":
      return action.option;
    default:
      return state;
  }
}
