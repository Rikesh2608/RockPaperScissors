const rockEl=document.querySelector('.rock-container');
const paperEl=document.querySelector('.paper-container');
const scissorsEl=document.querySelector('.scissors-container');
const playermoveEl=document.querySelector('.rock-paper-scissors-container');
const gameresult=document.querySelector('.game-container');
const scorehtml=document.querySelector('.score');
const play_again=document.querySelector('.play-again');
const resultEl=document.querySelector('.result');
const result_container=document.querySelector('.result-container');
const playermovehtml=document.querySelector('.playermove');
const computermovehtml=document.querySelector('.computermove');
const rulesEl=document.querySelector('.rules-container');
const rulesbtn=document.querySelector('.rules-btn');
const close_rules=document.getElementById('close-rules');
const header=document.querySelector('header');
const main=document.querySelector('main');
const footer=document.querySelector('footer');

rulesbtn.addEventListener('click',()=>{
    rulesEl.style.display=`block`;
    header.style.filter=`contrast(.2)`;
    main.style.filter=`contrast(.2)`;
    footer.style.filter=`contrast(.2)`;
});

close_rules.addEventListener('click',()=>{
    rulesEl.style.display=`none`;
    header.style.filter=`contrast(1)`;
    main.style.filter=`contrast(1)`;
    footer.style.filter=`contrast(1)`;
});

let score=0;

rockEl.addEventListener('click',()=>{
    result_calculator('rock');
});

paperEl.addEventListener('click',()=>{
    result_calculator('paper');
});

scissorsEl.addEventListener('click',()=>{
    result_calculator('scissors');
});

play_again.addEventListener('click',()=>{
    back_to_front();
});

function back_to_front(){
    playermoveEl.style.display=`block`;
    gameresult.style.display=`none`;
    computermovehtml.innerHTML=``;
    resultEl.innerHTML=``;
}

function result_displayer(playerMove,computerMove,result){
    result_container.style.display=`none`;

    playermovehtml.innerHTML=`
        <img src="icon-${playerMove}.svg" alt="${playerMove}" class="${playerMove}-container">
        `;

    if(window.innerWidth<650){
        computermovehtml.innerHTML=`
        <img src="icon-${computerMove}.svg" alt="${computerMove}" class="${computerMove}-container">
        `;
            if(result=='TIED'){
                resultEl.innerHTML=`${result}`;
            }
            else{
            resultEl.innerHTML=`YOU ${result}`;
            }
            if(score<=0){
                score=0;
            }
            scorehtml.innerHTML=score;
            result_container.style=`display:flex;
            flex-direction:column;`;
    }
    else{
    setTimeout(()=>{
        computermovehtml.innerHTML=`
        <img src="icon-${computerMove}.svg" alt="${computerMove}" class="${computerMove}-container">
        `;
    },1000);

    setTimeout(()=>{
        if(result=='TIED'){
            resultEl.innerHTML=`${result}`;
        }
        else{
        resultEl.innerHTML=`YOU ${result}`;
        }
        if(score<=0){
            score=0;
        }
        scorehtml.innerHTML=score;
        result_container.style=`display:flex;
        flex-direction:column;`;
    },2000);
    }
}

function result_calculator(playerMove){
    playermoveEl.style.display=`none`;
    gameresult.style.display=`block`;
    var computerMove=Math.floor(Math.random()*1000);
    let result;
    if(computerMove%3==1){
        computerMove='rock';
    }
    if(computerMove%3==2){
        computerMove='paper';
    }
    if(computerMove%3==0){
        computerMove='scissors';
    }
    if(computerMove==playerMove){
        result=`TIED`;
    }
    if(computerMove=='rock' && playerMove=='paper' || computerMove=='paper' && playerMove=='scissors' || computerMove=='scissors' && playerMove=='rock')
    {   
        score++;
        result='WIN';
    }

    if(computerMove=='paper' && playerMove=='rock' || computerMove=='scissors' && playerMove=='paper' || computerMove=='rock' && playerMove=='scissors'){
        result='LOSE';
        score--;
    }
    result_displayer(playerMove,computerMove,result);
}

