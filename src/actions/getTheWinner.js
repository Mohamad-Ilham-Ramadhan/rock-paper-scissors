export default function getTheWinner(userOption, computerOption) {
  return {
    type: "GET_THE_WINNER",
    winner: decide(userOption, computerOption),
  };
}

function decide(userOption, computerOption) {
  switch (userOption) {
    case "paper":
      switch (computerOption) {
        case "paper":
          return "draw";
        case "rock":
          return "user";
        case "scissors":
          return "computer";
      }
    case "rock":
      switch (computerOption) {
        case "paper":
          return "computer";
        case "rock":
          return "draw";
        case "scissors":
          return "user";
      }
    case "scissors":
      switch (computerOption) {
        case "paper":
          return "user";
        case "rock":
          return "computer";
        case "scissors":
          return "draw";
      }
  }
}
