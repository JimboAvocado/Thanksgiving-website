function changeimage(){
		document.getElementById("gifchange").src = "images/centralpark.gif.";
}
function changeimage2(){
		document.getElementById("gifchange").src = "images/timesquare.gif.";
}
function changeimage3(){
		document.getElementById("gifchange").src = "images/tenor.gif.";
}
function changeimage4(){
		document.getElementById("gifchange").src = "images/newyorkmove.gif.";
}
function resett(){
		document.getElementById("gifchange").src = "images/map.jpg.";
		document.getElementById("pic1").classList.add("grey-filter");
		document.getElementById("pic2").classList.add("grey-filter");
		document.getElementById("pic3").classList.add("grey-filter");
		document.getElementById("pic4").classList.add("grey-filter");
		
}

function delete1(){
		document.getElementById("pic1").classList.remove("grey-filter");
		document.getElementById("gifchange").src = "images/centralpark.gif.";

}
function delete2(){
		document.getElementById("pic2").classList.remove("grey-filter");
		document.getElementById("gifchange").src = "images/timesquare.gif.";
}
function delete3(){
		document.getElementById("pic3").classList.remove("grey-filter");
		document.getElementById("gifchange").src = "images/tenor.gif.";
}
function delete4(){
		document.getElementById("pic4").classList.remove("grey-filter");
		document.getElementById("gifchange").src = "images/newyorkmove.gif.";
}