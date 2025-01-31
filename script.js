
// make function different for next time 

function rockPaper(){
let computer = ["Rock","Paper","scissor"]
let comp = Math.floor(Math.random() * computer.length)

let computersChoice = computer[comp].toLowerCase();
console.log("COmputers choice",computersChoice)

let user = prompt("Enter the choice (Rock,Paper,Scissor)")
// this is for empty or null value 
if(user){ //this is combination of this two conditon user === null || user == "
// "
}
else{
    alert("!!Enter the Valid Input not keep Empty !!")
    rockPaper();
    return ; // not extecut again 
}
// toLowercase is use to make any type of user intput to 
let user1 = user.trim().toLowerCase()
console.log("users choice", user1)

// user won 
    // User won
    if ((user1 === "rock" && computersChoice === "scissor") ||
        (user1 === "paper" && computersChoice === "rock") || 
        (user1 === "scissor" && computersChoice === "paper")) {
        alert("Game will be WONNNN !!!!!! 😚😚😶‍🌫️🐓🐓");
    }
    // User lost
    else if ((user1 === "rock" && computersChoice === "paper") ||
        (user1 === "paper" && computersChoice === "scissor") || 
        (user1 === "scissor" && computersChoice === "rock")) {
        alert("Game will be FAILL !!!!!!💀💀☠️☠️");
    }
    // Draw
    else if ((user1 === "rock" && computersChoice === "rock") ||
        (user1 === "paper" && computersChoice === "paper") || 
        (user1 === "scissor" && computersChoice === "scissor")) {
        alert("Game will be DRAW !!!!!!🫡🫡🫡🫡");
    }
    else {
        alert("Enter Valid Choice 🔪🔪🔪🔪");
    }
}


// trim is user to remove the emopty spaces in string 
// user.trim()
// toLowercase/ toUppercase make any string to lowercase or uppercase