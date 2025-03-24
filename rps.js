let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userpoint = document.querySelector("#user");
const computerpoint = document.querySelector("#computer");

const  draw = () => 
    {
    console.log("game was draw");
    message.innerText ="Game Was Draw";
    message.style.backgroundColor ="#120842";
    }

const  showresult = (userwin) =>{
    if(userwin){
        userscore++;
        userpoint.innerText= userscore;
        console.log("you win");
        message.innerText ="you win";
        message.style.backgroundColor ="green";
    }
    else {
        computerscore++;
        computerpoint.innerText= computerscore;
        console.log("you lose");
        message.innerText ="you lose";
        message.style.backgroundColor ="red";
    }
};
const compchoice =() => {
    const Option = ["Rock","Paper","Scissor"];
    const rand_idx = Math.floor(Math.random()*3);
    return Option[rand_idx];
}
    
    const playgame = (userchoice) => {
    console.log("userchoice = ",userchoice);
    // generate computer choice 
    const computerchoice = compchoice();
    console.log("computer choice = ",computerchoice);

    //conditions 
    if (userchoice === computerchoice){
       draw();
    }
    else {
        let userwin = true;
       if (userchoice=== "Rock"){
        // paper , scissor
        userwin = computerchoice === "Paper"? false : true;
       }
       else if (userchoice === "Paper"){
        //rock , scissor
        userwin = computerchoice === "Scissor"? false : true;
       }
       else if (userchoice === "Scissor")
       {
        //rock , paper
        userwin = computerchoice === "Rock"? false : true;
       }
       showresult(userwin);
    }
};
choices.forEach((choice)=> {
    choice.addEventListener("click",()=> {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});