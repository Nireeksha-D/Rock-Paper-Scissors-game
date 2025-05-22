
let userScore=0;
let compScore=0;
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const genComputerChoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText="Game is Draw, Play again";
    msg.style.backgroundColor="yellowgreen";
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice=genComputerChoice();

    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper"?false:true
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="scissors"?false:true
        }else{
            userWin=compChoice==="rock"?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText=`You Lost! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

