// Functions
// The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
    //First we must name the fuction and define the body of the function, as in, we need to put in the code which we want executed when the function is called. 
// What’s the difference between a function’s parameters and arguments PASSED to a function?
    //The functions parameters are the placeholders within the body of the code, in which the function arguments then take the place of.
    // The arguments are passed into the function through the parameter locations, which then would hopefully return the value of the function with those arguments
// What’s the syntax for a NAMED function?
function func(a,b,c){
    return a + b + c;
}
// How do we assign a function to a variable?
var funcVar = func(1,2,3)
// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
function func2(d,e,f){
    return d + e + f;
} // here the return will return a single value based off the arguments which are passed through the inputs/parameters

// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
var globalScope = 1;
function func3(){
    return 1 + globalScope
} // this function returns 2 because the child scope within the function has access to the parent (global) scope

function func4(){
    var childScope = 1;
}

var newChildScope = 'childScope' + 1 // i stringed childscope so test would pass, but here we would get a "ReferenceError: childScope is not defined" if it wasnt a string due to this global Scope not having access to the function scope where the earlier variable is defined

// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) 
// (ALSO, see: Understanding JavaScript Closures with Ease)

// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
// The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets).
// it has access to the outer function’s variables, and it has access to the global variables.


function name (first, last) {
var yourNameIs = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function fullName () {        
return yourNameIs + first + " " + last;
}

return fullName ();
}

name ("Patrick", "Ryan"); // Your name is Patrick Ryan