var images = new Array();
var imageDir = "img/";

images[0] = imageDir+"img1.jpg";
images[1] = imageDir+"img2.jpg";
images[2] = imageDir+"img3.jpg";
images[3] = imageDir+"img4.jpg";
images[4] = imageDir+"img5.jpg";
images[5] = imageDir+"img6.jpg";

var currentImage = 0;
var displayImage = images[currentImage];
var slides = images.length;


function loadImages() {
	var display = document.getElementsByClassName("display")[0];
	var strip = document.getElementsByClassName("strip")[0];
	display.style.backgroundImage = "url('"+displayImage+"')";
	strip.createElement('ul');
}

// loop to create li elements based on array length

//test
window.addEventListener("load", loadImages);