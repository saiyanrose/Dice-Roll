'use strict';
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const btn_roll=document.querySelector('.btn--roll');
const currentScore0=document.querySelector('#current--0');
const currentScore1=document.querySelector('#current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const btnHold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new');

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');

let scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;//state variable

btn_roll.addEventListener('click',function(){
    if(playing){
        const secretDiceNumber=Math.trunc(Math.random()*6)+1;
        dice.classList.remove('hidden');    
        dice.src=`images/dice-${secretDiceNumber}.png`;
    
        if(secretDiceNumber!=1){
            currentScore+=secretDiceNumber;        
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
            document.getElementById(`current--${activePlayer}`).textContent=0;
            //document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');        
            currentScore=0;
            activePlayer=activePlayer===0 ? 1 : 0;        
            //document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
            //other way
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        }
    }    
});

btnHold.addEventListener('click',function(){  
    if(playing){
        scores[activePlayer]+=currentScore; 
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    
        if(scores[activePlayer]>=10){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');           
            playing=false;
        }else{            
            document.getElementById(`current--${activePlayer}`).textContent=0;        
            currentScore=0;
            activePlayer=activePlayer===0 ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');    
        }
    }   
});

btnNew.addEventListener('click',function(){
    playing=true;
    currentScore=0;
    activePlayer=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    score0.textContent=0;
    score1.textContent=0;
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    scores=[0,0];                                             
});
