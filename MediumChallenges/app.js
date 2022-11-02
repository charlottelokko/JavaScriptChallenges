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
    for(let i= str.length; i >=  0; i--){
        reversed += str.charAt(i); //can use str[i] instead of charAt
    }
    return reversed;
}

console.log("Q8: " + reverseString("This is cool"));

// Other ways to do reverseString

//incrementing for loop
function reverseString2(str){
    let reversed = "";
    for(let i=0; i < str.length; i++){
        //This is how you loop through elements in a string
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log("Q8i: " + reverseString2("This is cool"));

//array reverse method
function reverseString3(str){
    return str.split("").reverse().join("");
}

console.log("Q8ii: " + reverseString3("This is cool"));


/**
 * Q9: Turn every element in an array into 0
 * Given an array of elements, return the same length array filled with 0's
 * 
 * eg. convertToZeros([5, 100, 4]) => [0,0,0]
 */

function convertToZeros(arr){
    let newArr = []
    for(let i=0; i< arr.length; i++){
        newArr[i] = 0;
    }
    return newArr;
}

console.log("Q9: " + convertToZeros([1, 2, 3, 4, 5, 6]));

//Other methods
function convertToZeros2(arr){
    return new Array(arr.length).fill(0); //create new array and fill with 0's
}

console.log("Q9i: " + convertToZeros2([1, 2, 3, 4, 5, 6]));

function convertToZeros3(arr){
    return arr.map(e => 0)
}

console.log("Q9ii: " + convertToZeros3([1, 2, 3, 4, 5, 6]));

/**
 * Q10. Filter out all the apples
 * Given an array of fruits, if it is an apple removie it from the array.
 * 
 * eg. removeApples(["Banana", "Apple", "Orange", "Apple"]) => ["Banana", "Orange"]
 */

function removeApples(arr){
    let noApples = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== "Apple"){
            noApples.push(arr[i]);
        }
    }
    return noApples;
}

console.log("Q10: " + removeApples(["Banana", "Apple", "Orange", "Apple"])); 

//Using .filter method
function removeApples2(arr){
    return arr.filter(e => e !== "Apple");
}

console.log("Q10i: " + removeApples2(["Banana", "Apple", "Orange", "Apple"]));

/**
 * Q11: Filter out all the falsy values
 * Given an array of values, filter out all the falsy values and only return the truthy values
 * 
 * eg. filterOutFalsy(["", [], 0, null, undefined, "0"]) => [[], "0"]
 */

function filterOutFalsy(arr){
    let noFalsy = [];
    for(let i=0; i<arr.length; i++){
        if(!!arr[i]){
            noFalsy.push(arr[i]);
        }
    }
    return noFalsy;
}

console.log("Q11: " + filterOutFalsy(["", [], 0, null, undefined, "0"]));
 
function filterOutFalsy2(arr){
    return arr.filter(e => !!e === true);
}

console.log("Q11i: " + filterOutFalsy2(["", [], 0, null, undefined, "0"]));

/**
 * Q12: Truthy to true, Falsy to false
 * Given an array of truthy and falsy values, return the same array of elements into its boolean value
 * 
 * eg. convertToBoolean([500, 0, "David", "", []]) => [true, false, true, false, true]
 */

function convertToBoolean(arr){
    let arrBool = [];
    for(let i=0; i<arr.length; i++){
        if(!!arr[i]){
            arrBool.push(true);
        }
        else{
            arrBool.push(false);
        }
    }
    return arrBool;
}

console.log("Q12: " + convertToBoolean([500, 0, "David", "", []]));


//simplifing with turnary 
function convertToBoolean2(arr){
    let arrBool = [];
    for(let i=0; i<arr.length; i++){
        !!arr[i] ? arrBool.push(true) : arrBool.push(false);
    }
    return arrBool;
}

console.log("Q12ii: " + convertToBoolean2([500, 0, "David", "", []]));


//using map method 
function convertToBoolean3(arr){
    return arr.map(e => !!e)
}

console.log("Q12iii: " + convertToBoolean2([500, 0, "David", "", []]));
