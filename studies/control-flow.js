// Control flow
    //Control flow is an important concept in javascript as it effects the way if, if else, and switch statements are read. 
    // The idea is that as the program is run from top to bottom through an if else statement, the first condition that is met will end up expressing that code, even if
    // a portion of the if else statement further down is the intended choice for that condition.
// If, If Else, and Else 
    // It is important to be cognizant of the way the program will read, as it fires down the list of if else statements, the block of code for the first match will be run
    // and none of the others will. Below is an example
    
//  *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
//  *  b. BUT, for multiples of three print “Fizz” instead of the number.
//  *  c. AND for the multiples of five print “Buzz”.
//  *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.    
    
var count = 1
var arr = []
  while (count<21){
      if (count % 3 === 0 && count % 5 === 0){
          arr.push('FizzBuzz');
      }else if (count % 5 === 0){
          arr.push('Buzz');
      }else if (count % 3 === 0){
          arr.push('Fizz');
      }else{
          arr.push(count);
      }
     (count++);
  }
  console.log(arr) // The above program will console log [ 1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz' ]

// One mistake while writing this loop would be to put the if else statements in the order of the instructions, as such...
var count = 1
var arr = []
  while (count<21){
      if (count % 5 === 0){
          arr.push('Buzz');
      }else if (count % 3 === 0){
          arr.push('Fizz');
      }else if (count % 3 === 0 && count % 5 === 0){
          arr.push('FizzBuzz');
      }else{
          arr.push(count);
      }
     (count++);
  }
  console.log(arr) // The above program will console log [ 1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'Buzz',16,17,'Fizz',19,'Buzz' ]
//   The error when count = 15 is due to the fact that the Buzz part of the code for 15 is ran because it meets the criteria for it, therefore never getting to the Fizzbuzz part of the code

// else-if is important in these instances, because it tells the interpreter to still want to do something else if the initial 'if condition' is false.
//We can chain as many else-if statements as we want to hit additional cases within our program. If none of these cases are hit, the else statement gets run

// Also, the 'else' is useful in if/else if statements as a 'catch all.' 
// By that I mean that if none of the if or else-if statements are truthy, then the else statement will be run and the code for the catch all will be run.

// Switch
        //switch statements are useful when there is very discrete or limited options for variables. The most important way to control flow within a switch statement is to 
        // utilize the break statements to ensure you are using the correct cases for the correct inputs. Examples below
    var person = 'Patrick';
switch (person) {
  case 'Patrick':
    console.log('Male, 26');
    break;
  case 'Sarah':
  case 'Jessica':
    console.log('Female, 27');
    // expected output: "Female, 27"
    break;
  default:
    console.log('We do not have any data on this person!');
}

// without the first break, console logging 'Patrick' would result in both 'Male, 26' and 'Female, 27' as the break signifies the end of the body for that case.S

