//1. This Function handles the Computer Random Choices for Rock, Paper and Scissor.
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}
//2. This function plays the game using Player Move and Computer's Choice
function playGame(playerMove) {
  const ComputerMove = pickComputerMove();
  let result = "";

  // Logic of Rock

  if (playerMove === "Rock") {
    if (ComputerMove === "Rock") {
      result = "Tie";
    } else if (ComputerMove === "Paper") {
      result = "Loser";
    } else if (ComputerMove === "Scissor") {
      result = "Dang You Win";
    }
  }
  // Logic for Paper
  else if (playerMove === "Paper") {
    if (ComputerMove === "Rock") {
      result = "Dang You Win";
    } else if (ComputerMove === "Paper") {
      result = "Tie";
    } else if (ComputerMove === "Scissor") {
      result = "HaHa Loser";
    }
  }

  // Logic for Scissor
  else if (playerMove === "Scissor") {
    if (ComputerMove === "Rock") {
      result = "Loser";
    } else if (ComputerMove === "Paper") {
      result = "Dang you Win";
    } else if (ComputerMove === "Scissor") {
      result = "it's Tie Bitch";
    }
  }
  alert(`You Pick ${playerMove}. Computer Choose ${ComputerMove}. ${result}`);
}

