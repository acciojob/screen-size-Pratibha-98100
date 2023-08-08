//your JS code here. If required.
const size = document.getElementById("sizeInfo");

window.addEventListener("resize" , function(){
	size.innerText = ""
	let width = window.innerWidth;
	let height = window.innerHeight;
	let heading = document.createElement("h1");
	heading.innerText = "Width: "+width + " Height: "+height;
	size.append(heading);
	
})