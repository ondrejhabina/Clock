//'More' button visual functionality

const moreContent = document.querySelector('.more-content-wrapper');
const moreButton = document.getElementById('more-btn');
const arrow = document.getElementById('arrow');

moreContent.style.display = 'none';

function displayMore() {
    if (moreContent.style.display !== 'block') {
        moreContent.style.display = 'block';
    } else {
        moreContent.style.display = 'none';
    }
}

function changeArrow() {
    if(arrow.innerHTML !== 'expand_more') {
        arrow.innerHTML = 'expand_more';
    } else {
        arrow.innerHTML = 'expand_less';
    }
}

moreButton.addEventListener('click', ()=> {
    displayMore();
    changeArrow();
});

//API Section follows


//time and date

const currentDate = document.getElementById('date');
const currentTime = document.getElementById('current-time');
const currentSeconds = document.getElementById('seconds');
const currentMinutes = document.getElementById('minutes');
const currentHours = document.getElementById('hours');
const daySymbol = document.getElementById('symbol');
const docBody = document.body;

function updateDateTime() {
    let today = new Date();
    let date = `${today.getDate()}` + '.' + `${today.getMonth()+ 1}` + '.' + `${today.getFullYear()}`;
    let seconds = `${today.getSeconds()}`;
    let minutes = `${today.getMinutes()}`;
    let hours = `${today.getHours()}`;

    //making sure to display extra zeroes
    if(parseInt(seconds) < 10) {
        seconds = '0' + seconds;
    }
    if(parseInt(minutes) < 10) {
        minutes = '0' + minutes;
    }
    if(parseInt(hours) < 10) {
        hours = '0' + hours;
    }

    currentDate.innerHTML = date;
    currentHours.innerHTML = hours + ':';
    currentMinutes.innerHTML = minutes;
    currentSeconds.innerHTML = seconds;
    
}


document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    greeting();
    
});

//Time based visual changes

function greeting() {
    let greeting = document.getElementById('day-part');
    

    if(parseInt(currentHours.innerHTML) < 7 || parseInt(currentHours.innerHTML) >= 19) {
        greeting.innerHTML = 'night';
        determineBackground('night');
        nightTime();
    } else if(parseInt(currentHours.innerHTML) < 19 && parseInt(currentHours.innerHTML) >= 12) {      
        greeting.innerHTML = 'afternoon';
        determineBackground('day');
        dayTime();
    } else if(parseInt(currentHours.innerHTML) >= 7 && parseInt(currentHours.innerHTML) < 12) {
        greeting.innerHTML = 'morning';
        determineBackground('day');
        dayTime();
        console.log(parseInt(currentHours.innerHTML));
    } else {
        greeting.innerHTML = 'hello';
        document.querySelector('.greeting').innerHTML = 'Well';
    }
}

function nightTime() {
    daySymbol.innerHTML = 'nightlight_round';
    docBody.style.backgroundImage = 'url("img/nighttheme.jpg")';
}

function dayTime() {
    daySymbol.innerHTML = 'wb_sunny';
    docBody.style.backgroundImage = 'url("img/daytheme.jpg")';
}

//Viewport dimensions used to determine which background image to use



function getViewport() {
    let width = 0;
    let height = 0;
    let valueArr = [];

    width = window.innerWidth;
    height = window.innerHeight;

    valueArr.push(width, height);

    return valueArr;
}

function determineBackground(timeOfDay) {
    let viewDimensions = getViewport();
    let width = viewDimensions[0];
    console.log(width);

    if(width < 1001) {
        if(timeOfDay === 'night') {           
            docBody.style.backgroundImage = 'url("img/nighttheme-respo.jpg")';
        } else if(timeOfDay === 'day') {
            docBody.style.backgroundImage = 'url("img/daytheme-respo.jpg")';
            
        }
    } else if (width > 1000) {
        if(timeOfDay === 'night') {
            docBody.style.backgroundImage = 'url("img/nighttheme.jpg")';
        } else if(timeOfDay === 'day') {
            docBody.style.backgroundImage = 'url("img/daytheme.jpg")';
            
        }
    }
}

window.addEventListener('resize', () => {
    greeting();
});