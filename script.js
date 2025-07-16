
let currentDateTime = new Date();

let currentHours = currentDateTime.getHours();
let currentMinutes = currentDateTime.getMinutes();
let currentSeconds = currentDateTime.getSeconds();

// Changing currentHours to 12 hours format
currentHours = currentHours % 12;

const degreeHours = 1 / 600;
const degreeMinutes = 0.1;
const degreeSeconds = 6;

const styledRotationDegree = 90;

let hourHandPos = styledRotationDegree + (currentHours * 30) + (currentMinutes/60 * 30) + (currentSeconds/360 * 30);
let minuteHandPos = styledRotationDegree + (currentMinutes * 6) + (currentSeconds/60 * 6);
let secondHandPos = styledRotationDegree + (currentSeconds * 6);

let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

setInterval(() => {
    hourHandPos = (hourHandPos + degreeHours) % 360;
    minuteHandPos = (minuteHandPos + degreeMinutes) % 360;
    secondHandPos = (secondHandPos + degreeSeconds) % 360;

    hourHand.style.transform = `rotate(${hourHandPos}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandPos}deg)`;
    secondHand.style.transform = `rotate(${secondHandPos}deg)`;
}, 1000);