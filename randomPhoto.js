window.onload = randPhoto;

//var photos = new Array("images/alex.jpg","images/alex2.jpg","images/alex3.jpg");
//var photos = new Array("images/alex2.jpg","images/alex3.jpg","images/alex4.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alex4.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alex4.jpg","images/alex5.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alex6.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alex7.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex2.jpg","images/alex8.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex8.jpg","images/alex9.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex8.jpg","images/alex9.jpg","images/alex11.jpg","images/alexLine.jpg","images/alexLED.jpg");
// var photos = new Array("images/alex12.jpg","images/alexLine.jpg");
//var photos = new Array("images/alex13.jpg","images/alexLine.jpg");
// var photos = new Array("images/alex14.jpg","images/alexLine.jpg");
var photos = new Array("images/alex15.jpg","images/alex16.jpg","images/alexLine.jpg");

function randPhoto() {
		var randNum = Math.floor((Math.random() * photos.length));
		document.getElementById("photoString").src=photos[randNum];
}
