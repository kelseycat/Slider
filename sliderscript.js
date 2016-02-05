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
	//display the first image in the array in the display box
	var display = document.getElementsByClassName("display")[0];
	display.style.backgroundImage = "url('"+displayImage+"')";

	//this creates a ul node in the strip
	var strip = document.getElementsByClassName("strip")[0];
	var ul = document.createElement('ul');
	strip.appendChild(ul);

	//this creates the li nodes that live in the above ul
	for (var i = 0; i <= 5; i++) {
		var li = document.createElement('li');
		li.style.backgroundImage = "url('"+images[i]+"')";
		ul.appendChild(li);
	};
}

// loop to create li elements based on array length

//test
window.addEventListener("load", loadImages);