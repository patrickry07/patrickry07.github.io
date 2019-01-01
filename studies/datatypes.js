// Datatypes
// Number
        // Numbers are a type of data type that dont utilize '' around them, and are also useed in the arithmetic calculations for javascript. 
        var numberVariable = 100;
// String
        // string variables are created with "" or '' with text inbetween the two 's. 
        var stringVariable = 'this is a string variable';
// Boolean
        // Boolean data types represent either true or false.
        var booleanVariable1 = 4>5;
        var booleanVariable2 = true;
// Array
        // Arrays in javascript are a way to store multiple values within one variable. This can be done with strings, numbers, booleans, objects, or any combination thereof
        // Array values are stored within [] brackets and are seperated with a comma, as shown in the below examples.
        var arrayVariable1 = [1,2,3,4,5,6,7,8,9,10];
        var arrayVariable2 = ['Patrick', 'Coogan', 'Ryan'];
        var arrayVariable3 = [12, 'Patrick', false];
// Object
        // Objects are a type of datatype which utilize key/value pairs. This is useful in organizing data that have a useful identifier for each value.
        // Object Values are stored using {} curly brackets and each key/value pair is seperated with a comma, as shown in the below examples
        // A colon seperates the key from the value within an object.
        // bracket or dot notation can be used to call upon certain values within an object
        var objectVariable = {
            name: 'Patrick',
            age: 26,
            hobbies: ['chess', 'improv', 'tennis']
        };
        console.log(objectVariable['name']); // Logs 'Patrick' to console
        console.log(objectVariable.age); // Logs 26 to console
// Function
        // Functions are sub programs which you can call and execute when they are called. Each functions is composed of statements within the function body.
        // Functions can have values passed to them using fucntion arguments.
        // Functions are defined by their return statement, which is the part of the function which returns a value to be used outside of the function.
function addFunction(a,b,c){
    return a + b + c;
}

addFunction(1,2,3);
        // in the above function, the a,b, and c parameters are used to pass the function arguments (1,2 and 3) into the function body to return the sum of the components. 
        // In this example the function would return the value of 6 as the 3 arguments would be fed into the function body through its parameters.

// undefined
        // a variable that has not been assigned a value is of type undefined. 
var undefinedVariable;
var undefinedVariable2 = undefined ;
console.log (undefinedVariable);
console.log (undefinedVariable2);
        // these would log undefined to the console

// null
        // null, although seemingly similar to undefined, differs in that null expresses a lack of identification and indicates that the variable does not point to a specific object
         var nullVariable = null

// NaN
        // NaN stands for 'not a number' Not a number can be returned when a math function fails or when parsing a number fails
        function functionWithNaN(a) { 
            return a !== a ;
        }
        functionWithNaN(NaN); // Returns false
        
// Infinity and -Infinity (Google them if you don't know!)
    // acts as expected as the mathematical concept. It is declared with 'Infinity'
console.log(Infinity / 10, Infinity * 10, Infinity +100); // console logs Infinity Infinity Infinity
// What is the difference between primitive/simple and complex data types?
    // Simple/Primitive Data types
        // These data types or immutable in that they do not aggregate other values. They also return simple values, and do not alter the original value of the data type
        //  These data types also copy by value 
        var numberVariable = 100; // simple data type
    // Complex Data types
        // EXAMPLES INFCLUDE: arrays, objects, and functions
        // These data types aggregate other data, and therefore can be infinite
        // copy by reference, and are therefore passed by reference
        var objectVariable = {
            name: 'Patrick',
            age: 26,
            hobbies: ['chess', 'improv', 'tennis']
            }; // complex data type
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
    // When you assign a variable, it is a reference to an object but not the object itself. When you copy an object b = a both variables will point to the same address.
    // ^^This is refered to as copy by value
    
    //For objects, the values are the memory addresses of those objects.
    // ^This is referred to as copy by reference