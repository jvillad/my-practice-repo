

const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');


function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const secondDeg = ((seconds / 60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 ) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`


    const hours = now.getHours();
    const hoursDegrees = ((mins / 60) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourHand}deg)`

    
}

setInterval(setDate, 1000);

setDate();