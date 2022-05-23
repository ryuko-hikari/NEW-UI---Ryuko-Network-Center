// dark mode toggle
function myFunction(){
	var element = document.body;
	element.classList.toggle("color-mode");
}

// Get Button
var mybutton = document.getElementById("myBtn");

// When User Scroll down from top of document, show Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When user clicks on Button, scroll to the top of document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome ,IE
}

// loader animation page
// set delay loader 1s
var delay = 1000;

function loader(){
	setTimeout(function(){
		$("#loading").hide();
		$(".loading").hide();
	},delay);
};

// Script For AOS animation	
  AOS.init();

// version website
var versionWebsite = "V.2.8";
console.log("Web Version " + versionWebsite);