// IMPORT MODULES under test here:
import { add, mul } from '../calculations.js';
import { sub, div } from '../calculations.js';




const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 2;
    const num2 = 3;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 5;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add', (expect) => {
    const add1 = 2;
    const add2 = 3;
    const expected = 5;
    const actual = add(add1, add2);

    expect.equal(actual, expected);
});


test('sub', (expect) => {
    const sub1 = 5;
    const sub2 = 5;
    const expected = 0;
    const actual = sub(sub1, sub2);

    expect.equal(actual, expected);
});


test('mul', (expect) => {
    const mul1 = 5;
    const mul2 = 5;
    const expected = 25;
    const actual = mul(mul1, mul2);

    expect.equal(actual, expected);
});


test('div', (expect) => {
    const div1 = 10;
    const div2 = 5;
    const expected = 2;
    const actual = div(div1, div2);

    expect.equal(actual, expected);
});
