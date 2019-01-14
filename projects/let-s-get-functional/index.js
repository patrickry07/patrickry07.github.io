// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-patrickry07');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
var maleCount = function(array){
    return _.filter(array, function(customers){
        return customers.gender === 'male';
    }).length;
    
};

var femaleCount = function(array){
 return _.reduce(array, function(result, element) {
                if (element.gender === 'female'){
                 result++;
                }
                return result;
  }, 0);
}

var oldestCustomer = function(array){
 var name;
 _.reduce(array, function(result, element) {
                if (element.age > result){
                 result = element.age;
                 name = element.name
                }
                return result; 
  }, 38);
  return name;
}

var youngestCustomer = function(array){
 var name;
 _.reduce(array, function(result, element) {
                if (element.age < result){
                 result = element.age;
                 name = element.name
                }
                return result; 
  }, 500);
  return name;
}

var averageBalance= function (array){
 // push all balance values into an array
  var arrB = [];
  _.each(array, function(e,i,a){
    arrB.push(e.balance);
  });
  // manipulate values so they are read as numbers
for (var i = 0; i < arrB.length; i++){
  arrB[i] = arrB[i].substring(1);
  arrB[i] = arrB[i].replace(/,/g,"");
  arrB[i] = parseFloat(arrB[i],10);
}
// add them together and divide by number of items (average)
var bal = _.reduce(arrB, function (result,element){
 return result + element;
});
return bal / arrB.length;
}

var firstLetterCount = function(array, char){
 var charU = char.toUpperCase();
 return _.reduce(array, function(result, element) {
                if (element.name[0] === charU){
                 result++;
                }
                return result;
  }, 0);
};

var friendFirstLetterCount = function(array, cust, char){
  var num = 0;
_.each(customers, function (e,i,a){
if (e.name === cust){
  _.each(e.friends, function(ee,ii,aa){
    var charU = char.toUpperCase();
    if (ee.name[0] === charU){
      num++;
    }
  });
}
});
return num;
}

var friendsCount = function(array, name){
 var arr = [];
 _.each(array, function(e,i,a){
  for (var i = 0; i < e.friends.length; i++){
   if (e.friends[i].name === name){
 arr.push(e.name);
   }
  }
 });
 return arr;
};

var topThreeTags= function(array){
// push all tags into a single array
  var tag = [];
  _.each(array, function(e,i,a){
    tag.push(e.tags); 
  });
  // flatten the arrays in order to compare 
function flatten(array) {
  var array1 = [];
  for (var i = 0; i <  array.length; i++){
    for (var j = 0; j < array[i].length; j++)
    array1.push(array[i][j]);
  }
  return array1;
} 
 var tag2 = flatten(tag);
var tagNum = {}
var tagArr = [];
// use reduce on flattened array to get an object with the amount each tag shows up in the array
  var obj = _.reduce(tag2, function(result, ele){
    if (result[ele]){
      result[ele]++
    }else{
      result[ele] = 1
    }
    return result
  }, {})
// go through the object and push all the keys (tags) into a new array, starting with the tags that appear the most
 for (var i = tag2.length; i >= 0; i--){
for (var key in obj){
   if (obj[key] === i){
     tagNum[key] = obj[key]
     tagArr.push(key)
   }
 }
}
// remove everything but the first 3 (which due to for loop will be most common tags)
      tagArr = tagArr.slice(0,3)
return tagArr
}

var genderCount = function (array){
 var gender = { male: 0, female: 0, transgender: 0}
 _.each(array, function(e,i,a){
  if (e.gender === 'male'){
      gender.male += 1;
  }else if (e.gender === 'female'){
   gender.female += 1;
  }else{
   gender.transgender += 1;
  }
 })
 return gender
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
