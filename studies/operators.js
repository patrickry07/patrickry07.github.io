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
 var usingAll = 200;
 usingAll += 10; // addition assignment
 usingAll -+ 10; //subtraction assignment
 usingAll /= 1 ; // division assignment
 usingAll *= 1 ; // multiplication assignment
 
 var bar1 = 5; //  (00000000000000000000000000000101) 
bar1 <<= 2; // 20 (00000000000000000000000000010100) Left shift assignment moves the specified amount of bits to the left and assigns the result to the variable

var bar2 = 5; //   (00000000000000000000000000000101)
bar2 >>= 2;   // 1 (00000000000000000000000000000001) Right shift assignment does the same thing but in the opposite direction. 

var bar3 = 5; //   (00000000000000000000000000000101)
bar3 >>>= 2;  // 1 (00000000000000000000000000000001) The unsigned right shift assignment operator moves the specified amount of bits to the right and assigns the result to the variable.

var bar4 = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
bar4 &= 2; // 0
// The bitwise AND assignment operator uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.

var bar5 = 5;
bar5 ^= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
// The bitwise XOR assignment operator uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable. 

var bar6 = 5;
bar6 |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
// The bitwise OR assignment operator uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable. 



    var assOp = 10; // = is the assignment operator
    assOp += 10; // += in this example adds 10 to the already stored value of assOp
    console.log(assOp); // logs 20 to the console




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
var usingAllT = 9 + 9; // using the basic assignment operators
usingAllT = 9 * 9;
usingAllT = 9 / 9;
 
 
// Comparison operators
/*          < Less than operator.
            > Greater than operator.
            <= Less than or equal operator.
            >= Greater than or equal operator.
*/
var compOp = 4>5;// This uses the greater than operator and logs the boolean value of false as 4 is not greater than 5
var compOp2 = 4<=4; // true
var compOp3 = 4>=4; // true
var compOp4 = 4>5; // true
        
        

// Logical operators
/*          && Logical AND.
            || Logical OR.
*/
if (4>5 || 5>4){
    console.log('Logical Operators are Neat');
} // because 5>4(even though the first comparison wasnt true) this logs the strings to the console. 
if (4>=4 && 5>=5){
    console.log('Logical Operators are still Neat');
} // logs 'Logical Operators are still Neat' because both conditions are met



// Unary operators (!, typeOf, -)
/*          delete - The delete operator deletes a property from an object.
            void - The void operator discards an expression's return value.
            typeof - The typeof operator determines the type of a given object.
            + The unary plus operator converts its operand to Number type.
            - The unary negation operator converts its operand to Number type and then negates it.
            ~ Bitwise NOT operator.
            ! Logical NOT operator.
*/

var obj = {name: 'patrick'};
delete obj.name // obj is now equal to {} because the name property got deleted

// void is useful in evaluating expressions that produce a value into places where an expression that evaluates to undefined is desired.
void function test() {
  console.log('yes');
  // expected output: yes"
}();

try {
  test();
}
catch(a) {
  console.log(a);
  // output: ReferenceError: test is not defined
}
//typeof returns a string which indicates the type of the unevaluated operand
var type = typeof 'abcd';

console.log(type) // this will log 'string'

if (4!=5){
    console.log('unary operators are neat');
};
// this logs the string because the bang NOT operator indicates the true boolean

// Bitwise Not Performs the NOT operator on each bit.

// 9 (base 10) = 00000000000000000000000000001001 (base 2)
//~9 (base 10) = 11111111111111111111111111110110//(base 2) = -10 (base 10)

// unary plus operator turns strings into numbers 
// unary negation operator turns strings into numbers, however, it is then negated
// +'3' returns  3
// -'3' returns  3

// Ternary operator (a ? b : c)
            // The conditional operator returns one of two values based on the logical value of the condition.
            // function ternOpp() {
            // return (true ? 'the statement is true' : 'the statement is false');
            // }
            // console.log(ternOpp(true)); // logs 'the statement is true'
            // console.log(ternOpp(false)); // 'the statement is false' 
