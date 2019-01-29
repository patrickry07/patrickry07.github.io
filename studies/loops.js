// Loops
// Explain while, for, and for-in loops
        // while for and for in loops are a very very important part of javascript programming
    //While loop
        // While loops will continue to run until a certain condition is no longer met. The programmer needs to be careful to avoid running into a loop which never ends
    
    var count = 0
    while (count<11){
        console.log(count)
        count++ // adds 1 to count every loop
    }
        // this will console log 1 through 10 until count is equal to 11 and the loop will finish
    //for loops
        // for loops are useful for repeating sections of code or to even iterate through an array. below are examples of both
        for (var i = 0; i < 11; i++){
            console.log('I want to log this 10 times to the console but without typing 10 console logs')
        }// Here the code is repeated 10 times without me ahving to manually repeat the blocks of code
            // This is because the code is run iteratively until i is no longer less than 11, which takes 10 iterations
        
    var arr = ['Patrick', 'Coogan', 'Ryan']
    for (var j=0; j < arr.length; j++){
        console.log(arr[j]);
    }// This for loop will loop through the arr array and console log each value within it. 
// Loop over an Object
        //Looping through an object is different in that the most effective way to do so is with the for..in loop
        // this loop works through looking through a specific object using a specific value as its search parameters
    // Next I will loop through arr backWards
    for (var k = arr.length - 1; k > -1; k--){
        console.log(arr[k]);
    }
//  While loops are useful when you do not know the number of interations needed to solve your problem, whereas for loops are helpful when you do know the amount of iterations needed.
    //  One example is iterating through an array, because this is a example when you know the needed amount of iterations (typically the array.length -1)  
        
        
/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 var student = {
     name: 'Patrick',
     age:26,
     Hometown: 'New Orleans'
 }
  for (var key in student){ 
    console.log(student[key]);
  } // * Given the object student, this for.. in loop loops over the Object and print its values  --- which are Patrick, 26, and New Orleans
  
    for (var key in student){ 
    console.log(key);
    } // Given the object student, this for.. in loop loops over the Object and print its keys --- which are name, age, and Hometown