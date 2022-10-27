/**
 * Q1: Return the Sum of Two Numbers
 * Create  a function that takes two arguments as functinos and returns their sum
 * eg. addition(2,3) -> 5
 */

function addition(num1, num2){
    return num1 + num2;
}

console.log("Q1:  " + addition(-4, 3));

/**
 * Q2: Convert hours into seconds
 * Create a functino that converts hours into seconds
 * eg. hoursIntoSeconds(2) -> 7200
 */

function hoursIntoSeconds(hour){
    return hour * 3600;
}

console.log("Q2:  " + hoursIntoSeconds(2));

/**
 * Q3: Calculate the Perimeter of a Rectangle
 * Create a function that takes length and width of a rectangle and return it's perimeter
 * eg. calcPerimeter(6,7) -> 26
 */

function calcPerimeter(s1, s2){
    return (s1 * 2) + (s2 * 2)
}

console.log("Q3:  " + calcPerimeter(6,7));

/**
 * Q4: Calculate the area of a triangle
 * Write a function that takes the base and height of a triangle and return it's area
 * eg. calcTriangleArea(3,2) -> 3
 * 
 * take in base and height
 * formula = 0.5 * base * height
 * return answer and console.log it
 */

function calcTriangleArea(base, height){
    return 0.5 * base * height;
}

console.log("Q4:  " + calcTriangleArea(3, 2));

/**
 * Q5: Extend a String
 * Write a function that accepts a string and adds 'Frontend' onto the end of it
 * eg. appendFrontend('Apple') => "AppleFrontend" 
 */

function appendFrontend(string){
    return string + "Frontend";
}

console.log("Q5:  " + appendFrontend('Apple'));

/**
 * Q6: Greater than 100?
 * Given two numbers, return true if the sum of both numbers is greater than 100
 * Otherwise, return false
 * eg. sumGreaterThan100(20,10) -> false
 *     sumGreaterThan100(50,60) -> true
 */

function sumGreaterThan100(num1, num2){
    // if(num1 + num2 > 100){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    //because we're using return we don't need to use the else as it exits or continues based on the if and return statements

    // we can simplify this futher as greater than / less than return a boolean itself
    return num1 + num2 > 100
}

console.log("Q6:  " + sumGreaterThan100(50,60));

/**
 * Q7: Less than or equal to zero?
 * Write a function that accepts a number and returns true if it's less than or equal to zero
 * ortherwise returns false
 * 
 * eg. lessThanOrEqualToZero(3) -> false
 *     lessThanOrEqualToZero(-2) -> true
 */

 function lessThanOrEqualToZero(num){
    return num <= 0;
}

console.log("Q7:  " + lessThanOrEqualToZero(-4));

/**
 * Q8: Opposite boolean
 * Given a boolean (true or false), return the opposite boolean
 * eg. oppositeBoolean(true) -> false
 */

function oppositeBoolean(bool){
    return !bool;
}

console.log("Q8:  " + oppositeBoolean(true));

/**
 * Q9: Is not the number 0
 * Given ANY element, return true if it is NOT the number 0
 * 
 * eg. isNotZero(5) -> true 
 *     isNotZero(null) -> true
 *     isNotZero(0) -> false
 */

function isNotZero(el){
    return el !== 0;
}

console.log("Q9:  " + isNotZero(5));


/**
 * Q10: Calculate the remainder
 * Given two numbers, return their remainder when divided by each other
 * 
 * eg. calcRemainder(4,2) -> 0
 *     calcRemainder(7,8) -> 7 
 *     calcRemainder(9,8) -> 1
 */

function calcRemainder(num1, num2){
    return num1 % num2;
}

console.log("Q10:  " + calcRemainder(9,8));

/**
 * Q11: Is the number odd?
 * Given two numbers, return true if the number is odd
 * 
 * eg. isOdd(1) -> true
 *     isOdd(2) -> false
 */

function isOdd(num){
    // if(num%2 === 0){
    //     return false;
    // }
    // return true;
    return num % 2 !== 0;
}

console.log("Q11:  " + isOdd(5));

/**
 * Q12: If a number is even, return 1 otherwise return -1
 * Create a funciton that takes a number argument and returns 1 if the number is even
 * If the number is odd return -1.
 * 
 * eg. booleanInteger(1) -> -1
 *     booleanInteger(2) -> 1
 */

function booleanInteger(num){
    // if(num % 2 === 0){
    //     return 1;
    // } 
    // return -1;
    //can simplify above with turnary operator
    return num % 2 === 0 ? 1 : -1;
}

console.log("Q12:  " + booleanInteger(5));

/**
 * Q13: Check if a user is logged in AND subscribed
 * Create a function that takes in two strings. 
 * If the first string is equal to "LOGGED_IN" AND the second string is equal to "SUBSCRIBED" return true, 
 * otherwise return false.
 * 
 * eg. isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED") -> True
 */

function isLoggedInAndSubscribed(login, sub){
    return login == "LOGGED_IN" && sub == "SUBSCRIBED";
}

console.log("Q13:  " + isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

/**
 * Q14: Check if a user is logged in OR subscribed
 * Create a function that takes in two strings. 
 * If the first string is equal to "LOGGED_IN" OR the second string is equal to "SUBSCRIBED" return true, 
 * otherwise return false.
 * 
 * eg. isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED") -> True
 *     isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED") -> True
 */

 function isLoggedInAndSubscribed(login, sub){
    return login == "LOGGED_IN" || sub == "SUBSCRIBED";
}

console.log("Q13:  " + isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
