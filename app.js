let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara =  document.querySelector("#user-score");
const compScorepara =  document.querySelector("#comp-score");



const genCompchoice = () =>{
    const options=["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame = () => {
   console.log("game was draw");
   
    msg.innerText="game was draw";
    msg.style.backgroundColor = "brown";
    
};

const showWinner=(userWin , userChoice, compChoice) => {
      if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
       
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
      }else{
        compScore++;
        compScorepara.innerText=compScore;
       
        msg.innerText = "you lose.";
        msg.style.backgroundColor = "red";
        msg.innerText = `you lose. ${compChoice} beats ${userChoice}`;
      } 
};


const playGame=(userChoice) =>{
    console.log("choice was clicked" , userChoice);
    const compChoice= genCompchoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawgame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true ;

        } else if( userChoice === "paper"){
            userWin=compChoice === "scissors"?false : true ;
        } else { 
            userWin = compChoice=== "rock" ? false : true ;
         }
         showWinner(userWin, userChoice, compChoice);

    }
    
    
};

choices.forEach((choice) => {
 
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
        

    })
})