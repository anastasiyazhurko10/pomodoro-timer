let time = 1500;
let timerId;
let isRunning = false;
let currentMode = 'pomodoro';
const display = document.getElementById('pomodoro-time');

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const pomodoroBtn = document.getElementById('pomodoro');
const breakBtn = document.getElementById('break');

function makeTimeLower() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let formattedSeconds;

    if (seconds < 10) {
        formattedSeconds = '0' + seconds;
    } else {
        formattedSeconds = seconds
    };

    display.textContent = minutes + ':' + formattedSeconds;
};

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerId);
        startBtn.textContent = 'start';
        isRunning = false;
    } else {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
        timerId = setInterval(() => {
            if (time <= 0) {
                clearInterval(timerId);
                resetTimer();
                return;
            }
            time--;
            makeTimeLower();
        }, 100);
        startBtn.textContent = 'stop';
        isRunning = true;
    }
};

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    startBtn.textContent = 'start';
    if (currentMode === 'pomodoro') {
        time = 1500;
    } else {
        time = 300;
    }
    makeTimeLower();
};

function switchMode(mode) {
    currentMode = mode;

    if (mode === 'pomodoro') {
        pomodoroBtn.classList.add('active');
        breakBtn.classList.remove('active');
    }

    if (mode === 'break') {
        breakBtn.classList.add('active');
        pomodoroBtn.classList.remove('active');
    }

    resetTimer();
};

startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);
pomodoroBtn.addEventListener('click', function() {
    switchMode('pomodoro');
});
breakBtn.addEventListener('click', function(){
    switchMode('break');
});