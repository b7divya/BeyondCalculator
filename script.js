// append input data to @inputString
var inputString = ""

//function to append data to display
function append(val) {
    inputString += val
    updateDisplay()
}

//function to evaluate inputString result
function calculation() {
    inputString = eval(inputString)
    updateDisplay()
}

//function to repeat inputString
function clearDisplay() {
    inputString = ""
    updateDisplay()
}

//function to show output on display

function updateDisplay() {
    document.querySelector(".display").innerHTML = inputString
}

//function to calculate square
function square() {
    inputString = inputString ** 2
    updateDisplay()
}

//function to calculate cube
function cube() {
    inputString = inputString ** 3
    updateDisplay()
}

//function to calculate square root
function squareRoot() {
    inputString = Math.sqrt(inputString)
    updateDisplay()
}

//function to calculate cube root
function cubeRoot() {
    inputString = Math.cbrt(inputString)
    updateDisplay()
}

// //function to calculate prime-non prime
// function prime(){

// }




