const lang = navigator.language;
var date = new Date();

var dayNumber = date.getDate();
var month = date.getMonth();
var dayName = date.toLocaleString(lang,{weekday: 'long'})
var monthName = date.toLocaleString(lang,{month: 'long'})
var year = date.getFullYear()

document.getElementById('month').innerHTML = monthName;
document.getElementById('day').innerHTML = dayName;
document.getElementById('date').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
