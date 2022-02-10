/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice

==================================================================
DESCRIPTION

Remove Items Using splice()
Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].

We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

==================================================================
TESTCASE

You should not change the original line of const arr = [2, 4, 5, 1, 7, 5, 2, 1];.

arr should only contain elements that sum to 10.

Your code should utilize the splice() method on arr.

The splice should only remove elements from arr and not add any additional elements to arr.

==================================================================
SETUP

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);

==================================================================

*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Many solutions
// arr.shift()
// arr.splice(3,arr.length-1)
// Sol2
let subArrRemove = arr.splice(1, 4);
console.log(subArrRemove)
// Only change code above this line
console.log(arr);
