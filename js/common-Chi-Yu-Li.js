//load header & footer
$(function () {
    $("#header").load("common-Chi-Yu-Li.html #header");
    //$("#footer").load("common-Chi-Yu-Li.html #footer");
});

//Open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
	var navbarContainer = document.getElementById("myNavbarContainer");
	var smallScrollHeader = document.getElementById("smallScrollHeader");
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
		navbarContainer.className = " w3-blue" + " w3-card-2" + " w3-hide-medium" + " w3-hide-small" + " w3-top";
        navbar.className = " w3-navbar" + " w3-animate-top" + " w3-blue" + " w3-hide-medium" + " w3-hide-small" + " w3-content";
		smallScrollHeader.className = " w3-container" + " w3-black" + " w3-hide-large" + " w3-top";
    } else {
		navbarContainer.className = navbarContainer.className.replace(" w3-blue w3-card-2 w3-hide-medium w3-hide-small w3-top", " w3-blue w3-card-2 w3-hide-medium w3-hide-small");
        navbar.className = navbar.className.replace(" w3-navbar w3-animate-top w3-blue w3-hide-medium w3-hide-small w3-content", " w3-navbar w3-blue w3-hide-medium w3-hide-small w3-content");
		smallScrollHeader.className = smallScrollHeader.className.replace(" w3-container w3-black w3-hide-large w3-top", " w3-container w3-black w3-hide-large w3-hide");
    }
}

// SlideShow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}

// Modal Image Gallery
function openModal(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
