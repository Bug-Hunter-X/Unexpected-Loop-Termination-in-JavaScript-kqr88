# Unexpected Loop Termination Bug in JavaScript

This repository demonstrates a common error in JavaScript loops: premature termination due to an incorrectly placed `break` statement. The provided code shows a `while` loop that is intended to iterate from 0 to 9, but due to an early `break` at `i === 5`, it terminates prematurely.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the unexpected termination of the loop.
3. Open `bugSolution.js` to see how to fix the bug.

## Bug Description

The `bug.js` file contains a `while` loop that's supposed to print numbers 0 through 9. However, a `break` statement inside the loop causes it to stop at 5.

## Solution

The `bugSolution.js` file presents a corrected version of the loop, ensuring that it iterates to 9.