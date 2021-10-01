import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mul } from './calculations.js';


// import functions and grab DOM elements
const nom1 = document.getElementById('num1');
const nom2 = document.getElementById('num2');
const addButton = document.getElementById('equalButton');
const getAnswer = document.getElementById('answer');

const subNum1 = document.getElementById('subNum1');
const subNum2 = document.getElementById('subNum2');
const subButton = document.getElementById('subEqualButton');
const getSubAnswer = document.getElementById('subAnswer');


const multiNum1 = document.getElementById('mulNum1');
const multiNum2 = document.getElementById('mulNum2');
const mulButton = document.getElementById('mulEqualButton');
const mulAnswer = document. getElementById('mulAnswer');



// initialize global state


// set event listeners 
addButton.addEventListener('click', ()=>{
    const add1 = Number(nom1.value);
    const add2 = Number(nom2.value);
    const result = add(add1, add2);
    
    getAnswer.textContent = result;
});

subButton.addEventListener('click', ()=>{
    const sub1 = Number(subNum1.value);
    const sub2 = Number(subNum2.value);
    const subResult = sub(sub1, sub2);

    getSubAnswer.textContent = subResult;

});

mulButton.addEventListener('click', ()=>{
    const multiple1 = Number(multiNum1.value);
    const multiple2 = Number(multiNum2.value);
    const getMultiResult = mul(multiple1, multiple2);

    mulAnswer.textContent = getMultiResult;

});






  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
