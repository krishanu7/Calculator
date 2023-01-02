// Preloader
const loader = document.querySelector(".loader-gif")
window.addEventListener("load", faded);

function faded(){
    loader.classList.add("disappear");
}

const lightMode = "styles/light.css";
const darkMode = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const inputVal = document.getElementById("let-calculate");
const res = document.getElementById("result");
const heading = document.getElementById("heading");


function clearer(){
    inputVal.value = "";
    res.value = "";
}

//Function to calculate value inputed through calculator keyboard
function calculate(value) {
    var evaluatedValue = eval(value || null);
    if (isNaN(evaluatedValue)) {
      res.value = "0 can not be devided by 0";
      setTimeout(() => {
        inputVal.value = "";
        res.value = "";
      }, 1300);
    } else {
        res.value = evaluatedValue;
        inputVal.value = evaluatedValue;
    }
}
//Display entered Value on Screen
function liveScreen(enteredValue){
    inputVal.value += enteredValue;
}

// Change the stylesheet
function changeMode(){
    const mode = document.getElementById("mode");
    setTimeout(()=>{
        heading.innerHTML = "Calculator";
    },1500);
    if(mode.getAttribute("href") === lightMode){
        mode.setAttribute("href", darkMode);
        themeIcon.setAttribute("src", sunIcon);
        heading.innerHTML = "Dard Mode 🌙";
    }else{
        mode.setAttribute("href", lightMode);
        themeIcon.setAttribute("src", moonIcon);
        heading.innerHTML = "Light Mode 🔆";
    }
}

//Function to handle keyboard inputs
document.addEventListener("keydown", keyboardInput);

function keyboardInput(e){
    //To fix the default behavior of browser
    e.preventDefault();
    // Set the LiveScreen

    //Entered value is number
    if(e.key === '0'){
        inputVal.value += '0';
    }else if(e.key === '1'){
        inputVal.value += '1';
    }else if(e.key === '2'){
        inputVal.value += '2';
    }else if(e.key === '3'){
        inputVal.value += '3';
    }else if(e.key === '4'){
        inputVal.value += '4';
    }else if(e.key === '5'){
        inputVal.value += '5';
    }else if(e.key === '6'){
        inputVal.value += '6';
    }else if(e.key === '7'){
        inputVal.value += '7';
    }else if(e.key === '8'){
        inputVal.value += '8';
    }else if(e.key === '9'){
        inputVal.value += '9';
    }
    //Entered Value is Operator
    if(e.key === '+'){
        inputVal.value += "+";
    }else if(e.key === '-'){
        inputVal.value += '-';
    }else if (e.key === '*') {
        inputVal.value += '*';
    } else if (e.key === '/') {
        inputVal.value += '/';
    }

    if(e.key === '.'){
        inputVal.value += '.';
    }
    //Handle enter key
    if(e.key === 'Enter'){
        calculate(inputVal.value);
    }
    //Handle Backspace key
    if (e.key === 'Backspace') {
        //remove the last element in the string
        inputVal.value = inputVal.value.substring(0, inputVal.value.length - 1);
    }
}