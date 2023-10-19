/*-----------------------------------------------------------------
Challenge: 00-sayHello (example)
Difficulty: Basic
Prompt:
Write a function called sayHello that returns the string "Hello!".
Examples:
sayHello() //=> Hello!
-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
    return 'Hello!'
} 
console.log(sayHello());

/*-----------------------------------------------------------------
Challenge: 01-addOne
Difficulty: Basic
Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num) {
 return  num + 1;
} 
console.log(addOne(-5));

/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(num1, num2) {
    if(typeof(num1 + num2) === 'number'){
    return num1 + num2;
    }
    else {
        return NaN;
    }
}
console.log(addTwoNumbers(6,10));

/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

function sumNumbers(array) {
    let sum = 0;
    array.forEach(function(a) {
        sum+= a;
    })
    return sum;
}
console.log(sumNumbers([]));
/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList() {
    let sum = 0
    for(let i=0;i<arguments.length;i++) {
        sum+=arguments[i]
    }
    return sum;
}

console.log(addList(1,50,1.23));