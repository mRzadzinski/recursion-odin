/* 
Instruction:
Using recursion, write a function which takes a number and returns an array 
containing that many numbers from the fibonacci sequence. Using an example 
input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

// Using zero as a first number of the sequence
function fibRec(n) {
    if (n <= 1) return [0];
    if (n === 2) return [0, 1];

    let last = fibRec(n - 1);
    let prev = fibRec(n - 2);
    let sum = last[last.length - 1] + prev[prev.length - 1];
    last.push(sum);

    return last;
}

console.log(fibRec(1));     // [ 0 ]
console.log(fibRec(2));     // [ 0, 1 ]
console.log(fibRec(8));     // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibRec(13));    // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]