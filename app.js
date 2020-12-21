// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// guess listening
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validation
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`You have to enter a number between ${min} and ${max}`, 'red');
  }

  // win scenario
  if(guess === winningNum){
    gameOver(true,`${winningNum} is correct, YOU WIN!`);
  } else {
    // wrong number scenario
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // lose scenario
      gameOver(false, `No Remaining Guesses, YOU LOSE! The Correct number was ${winningNum}`);
    } else {
      // guesses left

      // border color
      guessInput.style.borderColor = 'orange';

      //clear
      guessInput.value = '';

      setMessage(`Your guess is wrong, you have ${guessesLeft} guesses left`, 'orange');
    }
  }
});

// game over
function gameOver(won, msg){
  let color;
  if(won === true){
    color = 'green';
  } else {
    if(guessesLeft !== 0){
      color = 'orange';
    } else {
      color = 'red';
    }
  }

  // disable input
  guessInput.disabled = true;
  // color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // message
  setMessage(msg);
}

// message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}