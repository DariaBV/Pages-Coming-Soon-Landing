const someDate = new Date('November 30 2022 00:00:00');
const currentDate = new Date();
let startTime = (someDate - currentDate) / 1000;

// const countDownEl = document.querySelector('.countdown')
const launchDays = document.querySelector('.launch-days')
const launchHors = document.querySelector('.launch-hours')
const launchMinutes = document.querySelector('.launch-minutes')
const launchSeconds = document.querySelector('.launch-seconds')

setInterval(updateCountDown, 1000);
function updateCountDown() {
    let days = Math.floor(startTime / 60 / 60 / 24);
    let hours = Math.floor(startTime / 60 / 60 - days * 24);
    let minutes = Math.floor(startTime / 60 - days * 24 * 60 - hours * 60);
    let seconds = Math.floor(startTime - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // countDownEl.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    launchDays.innerHTML = days;
    launchHors.innerHTML = hours;
    launchMinutes.innerHTML = minutes;
    launchSeconds.innerHTML = seconds;
    startTime--;
} 
updateCountDown();