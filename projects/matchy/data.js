/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 var animal = {};
animal.species = 'Dog';
animal['name'] = 'Dodger';
animal.noises = [];
console.log(animal);

 


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



var noises = [];
noises.push('howl');
noises.unshift('rawr');
noises[noises.length - 1] = 'grrrr';
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


animal['noises'] = noises;
animal.noises.push('growl');
animal.noises.push('meow');
animal.noises.push('purr');
console.log(animal);





/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

 
// You can access properties on objects using . or bracket notation
// You can acccess properties on arrays using bracket notation. 
 
 
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck);
console.log(animals)
var fish = {
    species: 'fish',
    name: 'Nemo',
    noises: ['splish', 'splash', 'sploosh']
};
animals.push(fish);
var mouse = {
    species: 'mouse',
    name: 'Ratatouille',
    noises: ['eek', 'aak', 'psst']
};
animals.push(mouse);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  1. [ ] Choose a data structure for this **list** of friends.
//  2. [ ] Write a comment in your code that explains why you chose this data structure.
//  3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
//  4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  5. [ ] Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
//  6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//  7. [ ] `console.log` `friends`.
//  8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
//  9. [ ] `console.log` your work.

var list = [];
// I chose this data structure because arrays are useful for lists
var friends = list
function getRandom(animals){
return Math.floor(Math.random() * Math.floor(4));
}
// friends.push(getRandom(animals.name));
friends.push(animals[getRandom()].toString());

animals[1].friends = ['Fish']; 
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
