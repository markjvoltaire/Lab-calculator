// IMPORT MODULES under test here:
import { add } from '../calculations.js';



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
