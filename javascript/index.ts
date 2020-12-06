console.log("Hello World ");
var rtClock = new Date();
var hours = rtClock.getHours();
var minute = rtClock.getMinutes();
var seconds = rtClock.getSeconds();
var amPm = hours < 12 ? "AM" : "PM";
hours = hours > 12 ? hours - 12 : hours;
