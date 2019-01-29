/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 */
 var myName;
//  as such we can also use let or const to declare variables
// let has a block scope
let letvariable;
// const has a similar scope to var but can not be altered(only added too)



 /*
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName = 'Patrick Ryan';

// instead of using var we can also use let
let letVariable2 = 'This is a let variable';
// we can also use const, which can not be reassigned; however, elements can be added to it.
const constVariable2 = 'This is a const variable';

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//Differences between LET/CONST/VAR
// Const and let are block scoped which means that they are contained within if statements and for/while loops as well as a function. 
// This differs from var whose scope is contained within function, but can be accessed outside of the if-else statements and both loops.
function test(){
console.log(pat); // would console log (undefined)
var pat = 'patrick';
} 
//calling this function would not result in an error as var declarations get hoisted



function test(){
console.log(pat); // ReferenceError: pat is not defined
let pat = 'patrick'
}

function test(){
console.log(pat); // ReferenceError: pat is not defined
const pat = 'patrick';
}