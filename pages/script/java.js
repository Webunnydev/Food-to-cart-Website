function showToast(){
  var x=document.getElementById("toast");
  x.classList.add("show");
  setTimeout(function(){
    x.classList.remove("show");
  },3000);
};

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

function clock(){

  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var secons = document.getElementById('seconds');

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

}

var interval = setInterval(clock, 1000);


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


window.addEventListener('scroll', function () {
  const parallex = document.querrySelector('.parallex');
  let scrollPosition = window.pageYOffset;

  parallex.style.transform = 'translateY(' + scrollPosition .5 + 'px)';
});
