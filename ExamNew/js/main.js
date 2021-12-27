"use strict";

var loader = document.getElementById("preLoader");

function myFunction() {
  loader.style.display = 'none';
}

$(".hamburger").click(function() {
  $(".hamburger").toggleClass("active");
  $(".wrap-menu-mobile").slideToggle();
})


// Header-cart Dropdown for mobile and PC
var x = window.matchMedia("(max-width: 992px)")
// Toggle show the header cart
function dropFunction() {
  if (!x.matches)
    document.getElementById("Dropdown").classList.toggle("show");
  else
    document.getElementById("Dropdown1").classList.toggle("show");
}

// If user click outside the header cart then close it
window.onclick = function(event) {
  if (!x.matches) {
    if (!event.target.closest('.spbag-box')) {
      var myDropdown = document.getElementById("Dropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  } else {
    if (!event.target.closest('.spbag-box1')) {
      var myDropdown = document.getElementById("Dropdown1");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
}

// Prevent close if clicking inside header-cart
if (!x.matches) {
  document.getElementById("Dropdown").addEventListener('click', function(event) {
    event.stopPropagation();
  });
} else
  document.getElementById("Dropdown1").addEventListener('click', function(event) {
    event.stopPropagation();
  });



//Prevent click card at the end of page
var prevent = document.getElementsByClassName("preventA");
for (var i = 0; i < prevent.length; i++) {
  prevent[i].addEventListener('click', function(event) {
    event.preventDefault();
  });
}

document.getElementById("but-submit").addEventListener('click', function(event) {

  var email = document.getElementById("emailFooter");
  if (email.validity.valueMissing) {console.log("his");
    email.setCustomValidity("Enter your email address");
  } else if (email.validity.patternMismatch) {console.log("hiv");
    email.setCustomValidity("Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
