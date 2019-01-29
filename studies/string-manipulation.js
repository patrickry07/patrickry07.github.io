// String manipulation
        // a huge part of string manipulation involves string methoss (which will be covered in in more detail later in this study)
        // you can access certain characters in strings by using [] bracket notation. first letter starts at 0 and not 1
        var stringMani1 = 'This is a string'; 
        console.log(stringMani1[0]); // console logs 'T'
        // you can also add strings together


// With operators
        // you can also add strings together with operators such as + 
        var stringOp = 'My name is ';
        var stringOp2 = 'Patrick Ryan';
        console.log(stringOp + stringOp2) // logs 'My name is Patrick Ryan' to the console
        // you can also compare the ASCII values of two strings by comparing them with comparison operators
        if (stringOp>stringOp2){
            console.log('M comes before P!')
        }; // logs 'M comes before P!' to console
        
// With string methods
    //string methods are very important in manipulating strings. 
        // .length method
            var stringOp3 = 'Chicago';
            console.log(stringOp3.length); // logs the length of the string characters -- in this case it would be 7
        //  .toLowerCase() brings all the characters to lowercase in a string
            var stringLower = stringOp3.toLowerCase();
            console.log(stringLower); // logs 'chicago' to console
        //same for toUpperCase()
            var stringUpper = stringOp3.toUpperCase();
            console.log(stringUpper); // logs 'CHICAGO' to console
        // .split(); splits up the string based off a criteria you give it, and then puts it into an array
            var stringSplit = "this string will be split by the spaces";
            var stringArrSplit = stringSplit.split(' ');
            console.log(stringArrSplit);
        // .replace() will replace certain string characters with other characters
            var stringReplace = stringSplit.replace('string', 'variable')
            console.log(stringReplace) // logs "this variable will be split by the spaces"

// More Examples.

var exam1 = 'Patrick '
exam1 += ' Ryan' // adds Ryan to exam1
var exam2 = `My name is ${exam1}` // this is another way to add strings together with variables. 


// index of is for locating the first occurance in string a word or character occurs
var str = "where or where does this word occur";
var pos = str.indexOf("word"); 

console.log(pos) // logs 25 
// slice and substring are useful for manipulating strings into the segments you want
var sli = str.slice(7) // sli is equal to 'r where does this word occur'
var sli2  = str.substring(4) // sli 2 is 'e or where does this word occur'



//Concat joins together strings
var text1 = "Patrick";
var text2 = "Ryann";
var text3 = text1.concat(" ", text2); // text3 returns "Patrick Ryan"


// Trim gets rid of whitespace around a string. 

var whiteSpa = '     hello whitespace'
var seeYa = whiteSpa.trim()
console.log(seeYa)// logs  'hello whitespace'


// string manipulation can be useful knowing and manipulating the ASCII value
//charCodeAt gets the ASCII value for a character and fromCharCode returns to a character from ASCII value
function changeLetters(string){
  var newString = [];
  for(let i = 0; i < string.length; i++){
    var tempStr = string.charCodeAt(i);
    if (tempStr >=97 && tempStr <=122){
      tempStr ++;
      newString.push(String.fromCharCode(tempStr));
    }else if (tempStr >=65 && tempStr <=90){
      tempStr ++;
      newString.push(String.fromCharCode(tempStr));
    }else{
      newString.push(string.charCodeAt(i));
    }
  }
return newString.join("");
}
// This function takes the input arguments individual characters and changes it to its ASCII value + 1