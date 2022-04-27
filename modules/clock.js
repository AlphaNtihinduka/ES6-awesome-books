import { DateTime } from './luxon.js';
import { timeContainer } from './variables.js';
function displayClock() {
    const date =  DateTime.now();
    const month = date.monthLong;
    let days = date.day;
    const yrs = date.year;
    let hrs = date.hour;
    let mins = date.minute;
    let secs = date.second
    let period = 'AM';
    if (hrs === 0) {
      hrs = 12;
    } else if (hrs > 12) {
      hrs -= 12;
      period = 'PM';
    }
    if (days === 1) {
      days = `${days}st`;
    } else if (days === 2) {
      days = `${days}nd`;
    } else if (days === 3) {
      days = `${days}rd`;
    } else {
      days = `${days}th`;
    }
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
  
    const time = `${days}/ ${month} ${yrs} ${hrs}:${mins}:${secs}  ${period}`;
    setInterval(displayClock, 1000);
  
    timeContainer.innerHTML = time;
  }

  export default displayClock;