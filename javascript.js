//To enable new functions of javascript
"use strict";
//Do not delete

let container = document.querySelector(".container");
let text = document.querySelector(".card__style");

let input1 = document.querySelector("#one");
let input2 = document.querySelector("#two");


changeColor();


console.log(input1.value);
console.log(input2.value);

input1.addEventListener("input", changeColor);
input2.addEventListener("input", changeColor);

function changeColor() {
    console.log(input1.value + " " + input2.value);

    container.style.backgroundImage = `linear-gradient(to right,
        ${input1.value},
        ${input2.value})`;
    let containerGradient = container.style.backgroundImage;
    
    text.textContent = containerGradient;

}