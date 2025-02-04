const userChoiceContainer = document.getElementById("user-choice");
const computersChoiceContainer = document.getElementById("computer-choice");
const resultContainer = document.getElementById("result");
const Body = document.querySelector("body");
const PopUp = document.getElementById("popUp")

function selectRock() {
    const userChoice = "rock";
    userChoiceContainer.innerText = "Your choice: Rock (🪨🪨)";
    const ComputersChoice = computersChoice();
    computersChoiceContainer.innerHTML = "Computers Choice: " + ComputersChoice;
    CheckWhoWon(userChoice, ComputersChoice);
}

function selectPaper() {
    const userChoice = "paper";
    userChoiceContainer.innerText = "Your choice: Paper (📜📜)";
    const ComputersChoice = computersChoice();
    computersChoiceContainer.innerHTML = "Computers Choice: " + ComputersChoice;
    CheckWhoWon(userChoice, ComputersChoice);
}

function selectScissors() {
    const userChoice = "scissor";
    userChoiceContainer.innerText = "Your choice: Scissors (✂️✂️)";
    const ComputersChoice = computersChoice();
    computersChoiceContainer.innerHTML = "Computers Choice: " + ComputersChoice;
    CheckWhoWon(userChoice, ComputersChoice);
}

function computersChoice() {
    let computer = ["rock", "paper", "scissor"];
    let comp = Math.floor(Math.random() * computer.length);
    return computer[comp];
}

function CheckWhoWon(user1, computersChoice) {
    // Remove previous popup class
    resultContainer.classList.remove("popup");

    // User won
    if ((user1 === "rock" && computersChoice === "scissor") ||
        (user1 === "paper" && computersChoice === "rock") ||
        (user1 === "scissor" && computersChoice === "paper")) {
        resultContainer.innerHTML = "You WONNNN !!!!!! 😚😚😶‍🌫️🐓🐓";
        // Body.style.backgroundColor = "green";
        PopUp.innerText = "Wow! You Won The Game 🎉🎉🐓🐓"
        PopUp.style.display = "flex"
    }
    // User lost
    else if ((user1 === "rock" && computersChoice === "paper") ||
        (user1 === "paper" && computersChoice === "scissor") ||
        (user1 === "scissor" && computersChoice === "rock")) {
        resultContainer.innerHTML = "You FAILL !!!!!!💀💀☠️☠️";
        // Body.style.backgroundColor = "red";
        PopUp.innerHTML = "It's a Draw! Try Again 🤝";
        PopUp.style.display = "flex";  // Show pop-up
    }
    // Draw
    else if ((user1 === "rock" && computersChoice === "rock") ||
        (user1 === "paper" && computersChoice === "paper") ||
        (user1 === "scissor" && computersChoice === "scissor")) {
        resultContainer.innerHTML = "Game will be DRAW !!!!!!🫡🫡🫡🫡";
        // Body.style.backgroundColor = "yellow";
    }

    // Add popup class to trigger animation
    resultContainer.classList.add("popup");

    setTimeout(() => {
        popUp.style.display = "none";
    }, 1000);
}
