"use strict";

var loader = document.getElementById("preLoader");

function myFunction() {
  loader.style.display = 'none';
}

$(".hamburger").click(function(){
  $(".hamburger").toggleClass("active");
  $(".wrap-menu-mobile").slideToggle();
})

runClock();
setInterval("runClock()", 1000);
//Time-counting
function runClock() {
  var currentDay = new Date();
  var newYear = new Date("February 2, 2022");
  var nextYear = currentDay.getFullYear() + 1;
  newYear.setFullYear(nextYear);
  var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
  var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hours").textContent = Math.floor(hrsLeft);
  document.getElementById("minutes").textContent = Math.floor(minsLeft);
  document.getElementById("seconds").textContent = Math.floor(secsLeft);
}
