/* 
Instruction:
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. 
*/

function mergeSort(array) {
    if (array.length < 2) return array;

    if (array.length === 2) {
        if (array[0] > array[1]) return array.reverse();
        return array;
    }

    let leftSorted = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    let rightSorted = mergeSort(array.slice(Math.floor(array.length / 2)));
    let sorted = [];

    while (leftSorted[0] || rightSorted[0]) {
        if (!leftSorted[0] && rightSorted[0]) {
            sorted.push(rightSorted.shift());
        } else if (leftSorted[0] && !rightSorted[0]) {
            sorted.push(leftSorted.shift());
        }

        if (leftSorted[0] > rightSorted[0]) {
            sorted.push(rightSorted.shift());
        } else if (leftSorted[0] < rightSorted[0]) {
            sorted.push(leftSorted.shift());
        }
    }
    return sorted;
}

let unsorted1 = [27, 22, 3, 1, 8, 20, 13, 4, 12];
let unsorted2 = [772, 999, 820, 553, 130, 807, 306, 442, 551, 484, 413, 942, 320, 30, 185, 250, 592, 226, 585, 8, 33];

console.log(mergeSort(unsorted1)); 
// [ 1,  3,  4,  8, 12, 13, 20, 22, 27 ]

console.log(mergeSort(unsorted2)); 
/* 
[ 8,  30,  33, 130, 185, 226, 250, 306, 320, 413, 442, 484, 551, 
    553, 585, 592, 772, 807, 820, 942, 999 ]
*/
