// Operators
// Assignment operators
    // assignment operator assigns values to its left operand based on the value of its right operand.
    //      EXAMPLES OF ASSIGNMENT OPERATORS
/*           = Assignment operator

            *= Multiplication assignment
        
            /= Division assignment
        
            %= Remainder assignment
        
            += Addition assignment
        
            -= Subtraction assignment
        
            <<= Left shift assignment
        
            >>= Right shift assignment
        
            >>>= Unsigned right shift assignment
        
            &= Bitwise AND assignment
        
            ^= Bitwise XOR assignment
        
            |= Bitwise OR assignment
*/   
    var assOp = 10; // = is the assignment operator
    assOp += 10; // += in this example adds 10 to the already stored value of assOp
    console.log(assOp) // logs 20 to the console




// Arithmetic operators


    // Arithmetic operators take numerical values as their operands and return a single numerical value.
/*      EXAMPLES OF ARITHMETIC OPERATORS
            + Addition operator.
            - Subtraction operator.
            / Division operator.
            * Multiplication operator.
            % Remainder operator.
            ** Exponentiation operator. 
*/

        var arithOp = 2 + 2; // This adds the two numbers together using the addition operator


// Comparison operators
/*          < Less than operator.
            > Greater than operator.
            <= Less than or equal operator.
            >= Greater than or equal operator.
*/
        var compOp = 4>5;
        console.log(compOp); // This uses the greater than operator and logs the boolean value of false as 4 is not greater than 5

// Logical operators
/*          && Logical AND.
            || Logical OR.
*/
if (4>5 || 5>4){
    console.log('Logical Operators are Neat')
}; // because 5>4(even though the first comparison wasnt true) this logs the strings to the console. 



// Unary operators (!, typeOf, -)
/*          delete - The delete operator deletes a property from an object.
            void - The void operator discards an expression's return value.
            typeof - The typeof operator determines the type of a given object.
            + The unary plus operator converts its operand to Number type.
            - The unary negation operator converts its operand to Number type and then negates it.
            ~ Bitwise NOT operator.
            ! Logical NOT operator.
*/
if (4!=5){
    console.log('unary operators are neat');
};
// this logs the string because the bang NOT operator indicates the true boolean
// Ternary operator (a ? b : c)
            // The conditional operator returns one of two values based on the logical value of the condition.
            function ternOpp(a) {
            return (a ? 'the statement is true' : 'the statement is false');
            }
            console.log(ternOpp(true)); // logs 'the statement is true'
            console.log(ternOpp(false)); // 'the statement is false' 