let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Math.random(); generates a number between 0 and 1 for example: 0.33453452
  // We multiply that number by 3 so we can get a value of 0.345743, 1.34536 or 2.342576
  // if we round that value using Math.floor(); we get a 0, 1 or 2
  // The reason it works is because 0.9 * 3 is 2.7 rounded to 3 and 0.1 or * 3 is 0.3 rounded to 0
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    alert("Invalid choice!");
    return getHumanChoice();
  }
}


