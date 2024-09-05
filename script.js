let timer;
let isRunning = false;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function updateTime() {
  elapsedTime++;
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  timeDisplay.textContent = '00:00:00';
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}
