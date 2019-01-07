////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start,end,step = 1){
  var arr = [];
  if (start !== end){
    if (step > 0 && start < end){
      for (var i = start; i <= end; i += step){
        arr.push(i);
      }
    }else if( step < 0){
    
      for (var j = start; j >= end; j += step){
        arr.push(j);
      }
    }
  }

return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function sum(array){
var num = 0;  
  for (var i = 0; i < array.length; i++){
    num += array[i];
  }
  
  return num
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
var arr = [];  
  for(var i = array.length - 1; i > -1; i--){
    arr.push(array[i]);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
var arr = []; 
  for(var i = array.length - 1; i > -1; i--){
    arr.push(array[i]); 
  }
  for (var j = 0; j < array.length; j++){
    array[j] = arr[j]; 
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var list = {};
  // when receiving an array of length 1, set value = array[0], and rest = null
  if (array.length === 1){
    list.value = array[0];
    list.rest = null;
  // when receiving an array of length 2+, set 
  }else {
    list.value = array[0]; // setting the first value within the array to the list value
    list.rest = arrayToList(array.slice(1)); // returning rest  while deleting the array portion which has already been recursed
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var arr = [];
  let node = list; // local save of list to manipulate
  while (node.rest !== null){ // pushing the values while there is still a value

// pushing the value of the current node
    arr.push(node.value);
    // removing the part of the list which we have already pushed to array
    node = node.rest;
  }
  arr.push(node.value);
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
 return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list,n) {
  if (n > -1){
      let node = list;  
      for (var i = 0; i <= n-1; i++){
        if (node.rest !== null){
        node = node.rest;
        }else{
          return undefined
        }
      }
      
      return node.value;
  }else{
    return undefined;
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1,obj2) {
  
  if (obj1 === obj2){
    return true;
  }if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object'){
    return false;
  }
  var keyA = Object.keys(obj1);
  var keyB = Object.keys(obj2);

  if (keyA.length !== keyB.length){
    return false
  }
  for (var key of keyA){
    if (!keyB.includes(key) || !deepEqual(obj1[key], obj2[key])){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
