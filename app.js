const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const amPmElement = document.getElementById("am-pm");
function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let amPm = "AM";
    if (hour > 12) {
        hour = hour - 12;
        amPm = "PM";
    }
    hour = hour < 10 ? (hour = "0" + hour) : hour;
    minute = minute < 10 ? (minute = "0" + minute) : minute; 
    second = second < 10 ? (second = "0" + second) : second;
    hourElement.textContent = hour;
    minuteElement.textContent = minute;
    secondElement.textContent = second;
    amPmElement.textContent = amPm;
}

setInterval(updateClock, 1000);
