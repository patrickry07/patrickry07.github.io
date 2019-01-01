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