var ammount = 6;
var colors = generateRandomColors(ammount);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
const messageDisplay = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const h1 = document.querySelector("h1");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

//Easy Button
easyBtn.addEventListener("click", function(){
    //Btn style switch
    easyBtn.classList.add("selected"); //add
    hardBtn.classList.remove("selected"); //remove
    ammount = 3;
    reset();
    //refactor
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
});

//Hard Button
hardBtn.addEventListener("click", function(){
    //Btn style switch
    hardBtn.classList.add("selected"); //add
    easyBtn.classList.remove("selected"); //remove
    ammount = 6;
    reset();
    //refactor
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

//Reset button functionality
resetButton.addEventListener("click", function(){
    reset();
});

//Display Selected color on UI
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT!!!";
            messageDisplay.classList.add("heartbeat");
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Try again?";
        } else { 
            //Take away wrong box
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!"
        };
    });
};

//Add colors to the squares
function changeColors(color){
    //Loop though each square
    for(var i = 0; i < squares.length; i++){
        //change the color of each square
        squares[i].style.backgroundColor = color;
    };
};

//Select random color from array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Add random colors to a Array
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num colors to array
    for(var i = 0; i < num; i++){
         //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

//Generate a random color
function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    
    //synthisizing colors to rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    //generate new colors
    colors = generateRandomColors(ammount);
    //pick new random color form array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.classList.remove("heartbeat");
    messageDisplay.textContent = " ";
}