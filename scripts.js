//get references to elements
const slider = document.getElementById("myRange");
const size = document.getElementById("gridSize");
const create = document.getElementById("create");
const clear = document.getElementById("clear");
const color = document.getElementById("color");

//value to hold grid count
let gridCount = (+size)**2;

//give clear button function to remove color from rid
clear.addEventListener("click", clearColors);
//give create button action to draw board
create.addEventListener("click", drawBoard);
//get reference to board tag
const board = document.getElementById("board");

//assign function to slider to change vaule when needed
slider.oninput = function(){
	updateSize();
}

//function to update displayed size
function updateSize(){
	//update displayed size value
	size.textContent = document.getElementById("myRange").value;
}

//function to draw board
function drawBoard(){
	clearBoard();
	gridCount = (+size.textContent)**2;
	console.log(gridCount);
	const pixelSize = 840/(+size.textContent);
	console.log(pixelSize);
	for(let i = 0; i < gridCount; i++){
		//create element and give css styling
		let elem = document.createElement("div");
		elem.style.width = pixelSize + "px";
		elem.style.height = pixelSize + "px";
		elem.className = "pixel";
		board.appendChild(elem);

		//add event listener to color pixel
		elem.addEventListener("mouseover", colorPixel);
	}
}
//function to clear board
function clearBoard(){
	while(board.firstChild){
		board.removeChild(board.firstChild);
	}
}
//function to clear colors
function clearColors(){
	let pixels = board.getElementsByClassName("pixel");
	for(let i = 0; i < gridCount; i++){
		pixels[i].style.background = "none";
	}
}
//function to color pixel on hover
function colorPixel(e){
	e.target.style.background = "white";
}