const your_score=document.querySelector("#your_score");
const computer_score=document.querySelector("#computer_score");
let your_choice="";
let computer_choice="";
const button= document.querySelectorAll("button");
function computerChoice(){
    const choices=['Rock', 'Paper', 'Scissor'];
    const randomChoices= Math.floor(Math.random()*3);
    return choices[randomChoices];
}

//console.log("Computer choice:" + computerChoice());

button.forEach((button)=>{
    button.addEventListener('click',()=>{
        your_choice=button.innerText;
        console.log("your choice:"+ your_choice);
        computer_choice= computerChoice();
        console.log("computer choice:"+ computer_choice);
        const result= findWinner();
        if(result=="You win!"){
            your_score.innerText=parseInt(your_score.innerText)+1;
            alert("You win!");
        } else if (result=="You lose!"){
            computer_score.innerText=parseInt(computer_score.innerText)+1;
            alert("You lose!");
        } else if(result== "tie"){
            your_score.innerText=parseInt(your_score.innerText)+1;
            computer_score.innerText=parseInt(computer_score.innerText)+1;
            alert("it was a tie");
        }
    });
});

function findWinner(){
    let result="";
    if(your_choice==computer_choice){
        result="tie";
    } else if(your_choice=="Rock" && computer_choice=="Scissor"){
        result="You win!";
    } else if(your_choice=="Paper" && computer_choice=="Rock"){
        result="You win!";
    }else if(your_choice=="Scissor" && computer_choice=="Paper"){
        result="You win!";
    } else{
        result="You lose!"
    }
    return result;
};

