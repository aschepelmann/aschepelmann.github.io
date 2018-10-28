window.onload = randPhoto;

//var photos = new Array("images/alex.jpg","images/alex2.jpg","images/alex3.jpg");
var photos = new Array("images/alex2.jpg","images/alex3.jpg","images/alex4.jpg","images/alexLine.jpg");
	
function randPhoto() {
		var randNum = Math.floor((Math.random() * photos.length));
		document.getElementById("photoString").src=photos[randNum];
}
