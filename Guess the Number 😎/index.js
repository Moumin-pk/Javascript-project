let randomNum = parseInt(Math.random()*10+1);

const userinput = document.querySelector('#guessField');
const submit = document.querySelector('.guessSubmit')
const guesslot = document.querySelector('.prev-guess')
const remaning = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const ressulpar = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess=[];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(elem) => {
        elem.preventDefault();
        const guess = parseInt(userinput.value)
        console.log(guess);
        ValidatesGuess(guess)
    })
}

// validation
function ValidatesGuess(elem){
    if(isNaN(elem)){
        alert(`Please enter a valid number`)
    }else if(elem < 1){
        alert(`please enter a number more than 1`)
    }else if(elem > 100){
        alert(`please enter a number less than 100`)
    }else{
        prevGuess.push(elem)
        console.log(`push => ${prevGuess}`);
        if(numGuess === 10){
            displayguess(elem)
            displayMesage(`Game Over , Ramdom number was ${randomNum}`)
            GameEnd()
        }else{
            displayguess(elem)
            checkGuess(elem)
        }
    }
}

// Check Guess
function checkGuess(elem){

    if(elem === randomNum){
        displayMesage(`you guessed is rigth`)
        GameEnd();
    }else if(elem < randomNum){
        displayMesage(`Number is Too Low`)
    }else if(elem > randomNum){
        displayMesage('Number is too High')
    }

}

//display Guess
function displayguess(elem){
    userinput.value = ''
    guesslot.innerHTML += `<div>${elem}<div>`
    numGuess ++ ;
    remaning.innerHTML = `${10 - numGuess}`
}

//display Message
function displayMesage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

// Game End
function GameEnd(){
userinput.value = ''
userinput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id ='newgame'>Start New Game</h2>`
ressulpar.appendChild(p)
playGame = false
newGame()
}

// Game Stat
function GameStart(){
const newGameButton = document.querySelector('#newgame')
newGameButton.addEventListener('click', (elem) => {
rendomNumber = parseInt(Math.random()*10+1);
prevGuess = []
numGuess = 1;
guesslot.innerHTML='';
remaning.innerHTML = `${10 - numGuess}`
userinput.removeAttribute('disable');
ressulpar.removeChild(p)

    playGame = true;
})

}


