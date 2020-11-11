const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
     if (userInput === 'rock' || userInput === "paper" || userInput === 'scissors') {
      return userInput;
    } else {
      console.log("Error, please enter rock, paper, or scissors")
    }
   }
    
   const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
   }
    
   const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    
    if (userChoice === "bomb"){
      return "You won!"
    }
    
    if (userChoice === "rock") {
      if(computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!"
      }
    }
    
    if (userChoice === "paper") {
      if(computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!"
      }
    }
    
    if (userChoice === "scissors") {
      if(computerChoice === "rock")  {
        return "The computer won!";
      } else {
        return "You won!"
      }
    }
   }
    
    
   const playGame = () => {
    var userChoice = getUserChoice("rock");
    var computerChoice = getComputerChoice();
    console.log("You choose " + userChoice);
    console.log("The computer choose " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
   }
    
   playGame();