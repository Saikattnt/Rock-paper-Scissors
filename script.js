let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");

const getCompChoice = () => {
    const option = ["rock","paper","scissors"];
   const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}

const gameDraw = () => {
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor =  "#081b31"; 
};

const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
        if(userChoice === compChoice) {
            gameDraw();
        }
        else {
            let userWin = true;
            if(userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            }
            else{
                userWin = compChoice === "rock" ? false : true;
                }
                showWinner(userWin,userChoice,compChoice);
            }
        };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});