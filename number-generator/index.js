const submitguess = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const lastguesses = document.querySelector(".guesses");
const displaymessage = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelectorAll(".resultParas p");
let randnum;
let guessCount = 1;
guessField.focus();

function randomnumber() {
  return Math.floor(Math.random() * 100) + 1;
}
randnum = randomnumber();
console.log(randnum);
submitguess.addEventListener("click", () => {
  console.log(guessField.value);
  const InputValue = guessField.value;

  if (guessCount === 1) {
    lastguesses.textContent = "Your Last Guesses: ";
  }
  lastguesses.textContent += " " + InputValue;

  console.log(randnum);
  if (randnum == InputValue) {
    displaymessage.textContent = "congratssss";
    displaymessage.style.backgroundColor = "yellow";
    gameOver()
  }

  else if (guessCount == 10) {
    // game over
    gameOver()


  } 
  
  else {
    if (randnum > InputValue) {
        displaymessage.textContent = 'Wrong'
        displaymessage.style.backgroundColor = 'red'
      lowOrHi.textContent = "too low";
    } 
    
    else {
        displaymessage.textContent = 'Wrong'
        displaymessage.style.backgroundColor = 'red'
      lowOrHi.textContent = "too high";
    }
  }

  guessField.value = '';
  guessField.focus();
  guessCount += 1;
});

function resetgame(){
    console.log(resultParas)
    guessField.disabled = false;
    submitguess.disabled = false;
    

    const resetBtn = document.querySelector('.reset-button')
    document.body.removeChild(resetBtn)
    
    for (para of resultParas){
        para.textContent = ''
        para.style.backgroundColor = 'white'
    }
    randnum = randomnumber();
    console.log(randnum)
    guessField.focus();
    guessCount = 1;
}

function gameOver(){
    guessField.disabled = true;
    submitguess.disabled = true;

    const resetButton = document.createElement('button')
    resetButton.textContent = 'Start New Game'
    resetButton.classList.add('reset-button')
    document.body.append(resetButton);
    randnum = randomnumber();

    resetButton.addEventListener('click',resetgame);
}
