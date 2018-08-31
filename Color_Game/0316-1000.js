var red, green, blue, ClickedColor;
var i = 0, squaresNumbers = 6;
var colors = uniteRandomColors(squaresNumbers);
var winnerColor = randomColorPicker();
var pickedColor	= document.getElementById("pickedColorDisplay");
var infoText = document.getElementById("information");
var squares = document.querySelectorAll(".square");
var topStyle = document.getElementById("header");
var resetButton = document.getElementById("newGame");
var modeButtons = document.querySelectorAll(".mode");

pickedColor.textContent = winnerColor;

function modeSelector(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "Easy" ? squaresNumbers = 3 : squaresNumbers = 6;
	zeroGame();
}
function randomColorPicker() {
 	var randomNum = Math.floor(Math.random() * colors.length);
  	return colors[randomNum];
}
function uniteRandomColors(num){
	var arr = []
	for (i=0; i<num; i++){
		arr.push(colorMaker());
	}
	return arr;
}
function colorMaker(){
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
}
function zeroGame(){
	colors = uniteRandomColors(squaresNumbers);
	winnerColor = randomColorPicker();
	pickedColor.textContent = winnerColor;
	topStyle.style.backgroundColor = "#5F9EA0";
	modeDisplay();
}
function modeDisplay(){
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
		infoText.textContent = " ";
	}
}
function guestGuess(){
	var ClickedColor = this.style.backgroundColor;
	if (ClickedColor === winnerColor) {
		infoText.textContent = "Congratulations!";
	  	infoText.style.color = 'limegreen';
		afterWin(ClickedColor); 
		topStyle.style.backgroundColor = ClickedColor;
	}
	else{
		this.style.backgroundColor = "#232323";
		infoText.textContent = "Try Again";
		infoText.style.color = 'red';
	}
}
function afterWin(color){
	 for (i=0; i<squares.length; i++){
	 	squares[i].style.backgroundColor = color;
	 }
}
function mainGame(){
	resetButton.addEventListener("click",zeroGame);

	for (i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", modeSelector);
	}
	for (i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click",guestGuess);
	}
}

mainGame();