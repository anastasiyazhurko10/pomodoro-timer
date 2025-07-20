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
}