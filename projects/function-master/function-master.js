//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
var arr = [];
  for (var key in object){
    arr.push(object[key])
  }
return arr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var arr = [];
  for (var key in object){
    arr.push(key)
  }
return arr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    for (var key in object){
        if (typeof object[key] === 'string'){
            arr.push(object[key])
        }
        
    }
return arr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
     if (collection === null){
    return undefined;
 }else if (Array.isArray(collection)){
    return 'array';
 }
 else if(collection instanceof Date){
     return false
 }
 else if (typeof value === 'object'){
   return 'object';
 }else{
    return 'object';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
var arr = string.split('');
var arr2 = arr[0].toUpperCase(); 
arr.shift(); 
var arr3 = arr2 + arr.join('');
return arr3
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var arr = [];
  var strSpl = string.split(' ');
  for (var i = 0; i < strSpl.length; i++){
    arr.push(capitalizeWord(strSpl[i]));
  }
  return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = capitalizeAllWords(object.name);
    return 'Welcome ' + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = capitalizeWord(object.name);
var species = capitalizeWord(object.species);
return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    }else{
    return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var arr = string.split(' ');
  for (var i = 0; i < arr.length; i++){
    if(arr[i] === word){
    return true
    }
  }
  return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (Array.isArray(object.friends)){
    for(var i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name){
            return true;
        }
    }
}
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var arr = []; // first array which everything is getting pushed into
var arr2 = []; // second array that i push the non-undefined values into
  for (var i = 0; i < array.length; i++){
    arr.push(array[i].name); // pushes all the names within array into arr
  }
  for (var j = 0; j < array.length; j++){
    if (array[j].name === name){ // this is to allow me to make sure i utilize the right name within array
        for (var k = 0; k < array[j].friends.length; k++){
          for (var m = 0; m < array.length; m++){
            if (array[j].friends[k] === array[m].name){ // mother load of if statements. calling upon 3 for statements !!!! basically if the name is in the friends list it deletes it from the arr
                  delete arr[m];
            }
          }
        }
    }
  }
  for (var l = 0; l < array.length; l++){
    if (array[l].name === name){
      delete arr[l]; // this for/if part just deletes the parameters name from the arr
    }
  }
  for (var n = 0; n < arr.length; n++){
    if (arr[n] !== undefined){
      arr2.push(arr[n]); // this pushes all non-undefined values into new arr2
    }
  }
  return arr2
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++){
  if (object.hasOwnProperty(array[i])){
    delete object[array[i]];
  }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var arr = [];
for (var i = 0; i < array.length; i++){
  for (var j = 0; j < array.length; j++)
  if (array[i] === array[j] && i !== j)
    delete array[j];
}
for (var k = 0; k < array.length; k++){
  if (array[k] !== undefined){
    arr.push(array[k])
  }
}
return arr
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}