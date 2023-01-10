/* 
Instruction:
Using iteration, write a function which takes a number and returns an array 
containing that many numbers from the fibonacci sequence. Using an example 
input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

// Using zero as a first number of the sequence
function fibIter(n) {
    if (n <= 1) return [0];

    let arr = [0, 1];
    let first = 0;
    let second = 1;

    for (let i = 2; i < n; i++) {
        arr.push(first + second);
        first = second;
        second = arr[arr.length - 1];
    }
    return arr;
}

console.log(fibIter(1));     // [ 0 ]
console.log(fibIter(2));     // [ 0, 1 ]
console.log(fibIter(8));     // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibIter(13));    // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]