let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");
const gencompchoice=()=>{
//rock,paper,scissors
const options=["stone","paper","scissors"];
const randidx= Math.floor(Math.random()*3);
return options[randidx];
}
const drawgame=()=>{
    msg.innerText="It's a Draw. Play Again!"
    msg.style.backgroundColor="#081b31";}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText= `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
   else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText= `You Lost! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
   }
};
    
const playgame=(userchoice)=>{
// Generate computer choice
const compchoice=gencompchoice();
console.log("comp choice=",compchoice);
if(userchoice===compchoice){
drawgame()}
else{
    let userwin=true;
    if(userchoice==='stone'){
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
    console.log(choice);
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
console.log("choice was clicked",userchoice);
playgame(userchoice);
})
})