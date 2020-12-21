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
    // disable input
    guessInput.disabled = true;
    // border color
    guessInput.style.borderColor = 'green';
    // message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
  } else {

  }
});

// message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}