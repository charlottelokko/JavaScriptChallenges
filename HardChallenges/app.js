/**
 * Q1. Show rating
 * Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.
 *
 * eg. showRating(3) => "* * *"
 *     showRating(4.5) => "* * * * ."
 */

function showRating(rating) {
  let stars = "";
  for (let i = 1; i <= Math.floor(rating); i++) {
    //rounding down rating to not get the extra loop. Full cycles only
    stars += "*";
    if (i !== Math.floor(rating)) {
      stars += " ";
    }
  }
  if (rating % 1 !== 0) {
    stars += " .";
  }
  //can use an integer check method
//   if(!Number.isInteger(rating)){
//     stars += " .";
//   }
  return stars;
}

console.log(showRating(3.5));

/** 
 * Q2. Sort by lowest to highest price
 * Given an array of numbers, return the prices sorted by low to high. 
 * 
 * eg. sortLowToHigh([20, 40, 10, 30, 50, 10]) => [10, 10, 20, 30, 40, 50]
 */

function sortLowToHigh(arr){
   // return arr.sort(function (a,b){return a-b});
    return arr.sort((a,b) => (a-b));
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

/**
 * Q3. Sort by highest to lowest price
 * Given an array of objects, return the prices sorted by high to low
 * 
 * eg. sortHighToLow([{id: 1, price: 50},{id: 2, price: 30},{id: 3, price: 60},{id: 4, price: 100}])
 *          => [{id: 4, price: 100},{id: 3, price: 60},{id: 1, price: 50},{id: 2, price: 30}]
 */

function sortHighToLow(arr){
    return arr.sort((a,b) =>  b.price - a.price)
}

console.log(sortHighToLow([{id: 1, price: 50}, {id: 2, price: 0}, {id: 3, price: 500}]));

/**
 * Q4. Find all the posts by a single user
 * Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.
 */

async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await promise.json();
    const posts = response.filter(e => e.userId === userId);
    console.log(posts) ;
}

// (postsByUser(4));

/**
 * Q6. First 6 Incomplete Todos
 * Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete
 * todo's from the result. 
 */

async function firstSixImcomplete(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await promise.json();
    const incTodos = response.filter(e => e.completed === false);
    let firstSix = [];
    for(let i=0; i<6; i++){
        firstSix.push(incTodos[i]);
    }
    console.log(firstSix);
}

firstSixImcomplete();

//quicker method with .slice
async function firstSixImcomplete2(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await promise.json();
    const incTodos = response.filter(e => !e.completed).slice(0,6);
  
    console.log(incTodos);
}

firstSixImcomplete2();
