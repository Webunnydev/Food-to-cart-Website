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
  var seconds = document.getElementById('seconds');

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

}

var interval = setInterval(clock, 1000);


 