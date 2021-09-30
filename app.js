import {add} from './calculations.js';

// import functions and grab DOM elements
const nom1 = document.getElementById('num1');
const nom2 = document.getElementById('num2');
const addButton = document.getElementById('equalButton');
const getAnswer = document.getElementById('answer');

// initialize global state


// set event listeners 
addButton.addEventListener('click', ()=>{
    const add1 = Number(nom1.value);
    const add2 = Number(nom2.value);
    const result = add(add1, add2);
    
    getAnswer.textContent = result;
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
