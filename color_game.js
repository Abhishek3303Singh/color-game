var numOfSqrs=9;
var color = generateRandomColor(numOfSqrs);
var rgbDisplay= document.querySelector("#colorDisplay");
var pickedColor=pickColor();
var squres = document.querySelectorAll(".squre");
var messageDisplay = document.querySelector("#message");
var h1tag= document.querySelector("h1");
var resetButton= document.querySelector("button");
var easyModes= document.getElementById("easyMode");
var hardModes= document.getElementById("hardMode");


// Add Easy mode 
easyModes.addEventListener("click", function(){
	numOfSqrs = 6;
	color= generateRandomColor(numOfSqrs);

	easyModes.classList.add("selected");
	hardModes.classList.remove("selected");


	//pick color from 3 for easy mode
	pickedColor=pickColor();
	//Display rgb color from 3 color for veasy mode

	rgbDisplay.textContent= pickedColor;
	h1tag.style.background="orangered";


	for (var i = 0; i < squres.length; i++) {
		if (color[i]) {
			squres[i].style.background = color[i];
		}else{
			squres[i].style.display= "none";
		}
     
    }
    // for (var i = 3; i < squres.length; i++) {
    //  squres[i].style.background = "#232323";
    // }
});
 //END OF EASY MODE

//ADD HARD MODE

hardModes.addEventListener("click", function(){
	numOfSqrs = 9;
	color= generateRandomColor(numOfSqrs);

	hardModes.classList.add("selected");
	easyModes.classList.remove("selected");
	

	//pick color for HARDmode
	pickedColor=pickColor();
	//Display rgb color  for hard mode

	rgbDisplay.textContent= pickedColor;
  h1tag.style.background="orangered";
		for (var i = 0; i < squres.length; i++) {
	     squres[i].style.background = color[i];
	     squres[i].style.display= "block";

    }
});


//end of hard mode
//DISPLAY RGB CODE COLOR ON H1 TAG FOR PICKED COLOR FOR USER
rgbDisplay.textContent = pickedColor;
for (var i = 0; i < squres.length; i++) {
     squres[i].style.background = color[i];


    // click effect if write clicked === pickedColor then true else false;

	squres[i].addEventListener("click", function(){
	  //Generate rgb color code of clicked squre 
		var clickedColor = this.style.background;
	  //console.log(clickedColor , pickedColor);

	  // Check clicked and pick color
		if (clickedColor===pickedColor) {
			messageDisplay.textContent="Correct!";
		


			// Change the button of play again into play again after  win.
			resetButton.textContent= "PLAY AGAIN?";

		//Function call
			changeColor(pickedColor);
		} else{
			messageDisplay.textContent="Try Again!"

			// if clicked color is not correct then color changed in background color!!

			this.style.background="#232323";
			// this.classList.add("squre")
		}
	});



}
// make a function to change squre color and h1 background when correct clicked
function changeColor(color){
	for (var i = 0; i < squres.length; i++) {
		squres[i].style.background=color;
		h1tag.style.background=color;
	}
}



// GENERATE RENDOM COLOR AND PICKING RANDOM COLOR INSTEAD OF SAME COLOR ARRAY

// GENERATE A RENDOM NUMBAR BETWEEN 0-255; TO DO THIS WE USE [MATH.RANDOM() * NUMBER] FUNCTION

// TO REMOVE NUMBER AFTER DECIMAL POINT WE USE MATH.FLOOR(PASS THE NUMBER GENERATE FUNCTION)

function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}


//PEAK RENDOM COLORS
function generateRandomColor(num){

//Make an Array
	var arr = [];

	// Add num random colors to arry 
	for (var i = 0; i < num; i++) {
	arr.push(randomColor()) // function call

	//get rendom color and push into array
	}
	
	//Return an Arry

	return arr;
	
}


// Generate red green blue code fro 0-255;

function randomColor(){
	// generate red code from 0 to 255

	var r = Math.floor(Math.random() * 256);

	// generate green code from 0 to 255

	var g = Math.floor(Math.random() * 256);

	// generate blue code from 0 to 255

	var b = Math.floor(Math.random() * 256);



	// return a rgb(r,g,b) format

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
  // RESET BUTTON
// click new color button color will reset with new random color
resetButton.addEventListener("click", function(){
  // generate new color after click
	color=generateRandomColor(numOfSqrs);

  // pick new color for peaked color
	pickedColor = pickColor();

  // change color display to match clicked color color
	rgbDisplay.textContent= pickedColor;

  // change color of squre ane by one

	for (var i = 0; i < squres.length; i++) {
     squres[i].style.background = color[i];
   }
   //reset h1 background color

   	
   h1tag.style.background="orangered";
   messageDisplay.textContent="";
   resetButton.textContent= "NEW COLOR";
});



