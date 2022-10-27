/**
 * Q1: Falsy or Truthy?
 * Given two values, return the first one if it's falsy, otherwise return the second one. 
 * 
 * eg. filterOutFalsy(0,500) => 0
 *     filterOutFalsy(false, 100) -> false
 *     filterOutFalsy(true, "DOG") -> "DOG"
 */

function filterOutFalsy(e1, e2){
    return !e1 ? e1 : e2;
}

console.log("Q1: " + filterOutFalsy(true, "DOG"));

/**
 * Q2: Return the length of any given array 
 * Given an array, return its length 
 * 
 * eg. arrLength([1,2,4]) => 3
 */

function arrLength(arr){
    return arr.length;
}

console.log("Q2: " + arrLength([1,2,4]));

/**
 * Q3: Get the last element in an array
 * Given an array, return the first element. 
 * 
 * eg. lastElem([3,2,9,6,2]) => 2
 *     lastElem(["dog", "cat", "sheep"]) => "sheep"
 */

function lastElem(arr){
    return(arr[arr.length - 1]);
}

console.log("Q3: " + lastElem([3,2,9,6,2]));

/**
 * Q4: Find the sum of an array
 * Given an array, return the sum of every element
 * 
 * eg. arrSum([2, 2, 2]) => 6
 *     arrSum([100, 200, 500]) => 800
 */

function arrSum(arr){
    let tot = 0;
    for(let i=0; i<arr.length; i++){
        tot += arr[i]
    }
    return tot;
}

console.log("Q4: " + arrSum([100, 200, 500]));

/**
 * Q5: Add up the numbers from a single number
 * Given a number, add up all the numbers from one to the number that is given. 
 * Eg. An input of 4 will give you 1 + 2 + 3 + 4 which equals 10
 * 
 * eg. progressiveSum(3) -> 6
 *     progressiveSum(4) -> 10
 *     progressiveSum(600) -> 180300
 */

function progressiveSum(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}

console.log("Q5: " + progressiveSum(4));

/**
 * Q6: Calculate the time
 * Given a number in seconds, return this number is mm:ss format
 * 
 * eg. calcTime(66) => '01:06'
 *     calcTime(50) => '00:50'
 */

 function calcTime(secs){
    let timeMins = Math.floor(secs / 60);
    let timeSecs =  secs % 60;

    if(timeMins.toString().length===1){
        timeMins = '0' + timeMins
    }

    return (timeMins + ':' + timeSecs);
}

console.log("Q6: " + calcTime(70));

/**
 * Q7 Find the largest number 
 * Given an array of numbers, return the largest number of that array
 * 
 * eg. getMax([5, 100, 0]) => 100
 *     getMax([12, 10, -20]) => 12
 *     getMax([-300, -100, -200]) => -100
 */

function getMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){ //can start i from 1 to cut out one loop as already checking arr[0]
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log("Q7: " +  getMax([-300, -100, -200]));

/**
 * Q8: Reverse a string
 * Given a string, return the reversed string
 * 
 * eg. reverseString('abc') => 'cba'
 *     reverseString("This is cool") => "looc si sihT"
 */

function reverseString(str){
    let reversed = "";
    for(let i= str.length-1; i >= 0; i--){
        reversed += str.charAt(i);
    }
    return reversed;
}

console.log("Q8: " + reverseString("This is cool"));