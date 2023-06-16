// Timer
let timerInterval;
let timerDisplay = document.getElementById('timerDisplay');
let startTimerButton = document.getElementById('startTimer');
let stopTimerButton = document.getElementById('stopTimer');
let resetTimerButton = document.getElementById('resetTimer');
let remainingTime = 0;

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);

function startTimer() {
  let hoursInput = document.getElementById('hours').value;
  let minutesInput = document.getElementById('minutes').value;
  let secondsInput = document.getElementById('seconds').value;

  let totalSeconds = (hoursInput * 3600) + (minutesInput * 60) + parseInt(secondsInput);

  if (totalSeconds > 0) {
    startTimerButton.disabled = true;
    stopTimerButton.disabled = false;
    resetTimerButton.disabled = false;

    if (remainingTime === 0) {
      remainingTime = totalSeconds;
    }

    timerInterval = setInterval(function() {
      let hours = Math.floor(remainingTime / 3600);
      let minutes = Math.floor((remainingTime % 3600) / 60);
      let seconds = Math.floor(remainingTime % 60);

      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

      if (remainingTime === 0) {
        clearInterval(timerInterval);
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
        remainingTime = 0;
      }

      remainingTime--;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  startTimerButton.disabled = false;
  stopTimerButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.innerHTML = '00:00:00';
  startTimerButton.disabled = false;
  stopTimerButton.disabled = true;
  resetTimerButton.disabled = true;
  remainingTime = 0;
}

// Stopwatch
let stopwatchInterval;
let stopwatchDisplay = document.getElementById('stopwatchDisplay');
let startStopwatchButton = document.getElementById('startStopwatch');
let stopStopwatchButton = document.getElementById('stopStopwatch');
let resetStopwatchButton = document.getElementById('resetStopwatch');
let stopwatchTime = 0;

startStopwatchButton.addEventListener('click', startStopwatch);
stopStopwatchButton.addEventListener('click', stopStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  startStopwatchButton.disabled = true;
  stopStopwatchButton.disabled = false;
  resetStopwatchButton.disabled = false;

  if (stopwatchTime === 0) {
    stopwatchTime = 0;
  }

  stopwatchInterval = setInterval(function() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = Math.floor(stopwatchTime % 60);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    stopwatchDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

    stopwatchTime++;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  startStopwatchButton.disabled = false;
  stopStopwatchButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchDisplay.innerHTML = '00:00:00';
  startStopwatchButton.disabled = false;
  stopStopwatchButton.disabled = true;
  resetStopwatchButton.disabled = true;
  stopwatchTime = 0;
}
