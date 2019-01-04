
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(a){
  var number = '#'
  for (var i = 0; i <= a - 1; i++){
    if( i === 0){
      console.log('#')
    }else{
      console.log(number +='#')
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(a,b) {
var count = a
  while (count<b+1){
      if (count % 3 === 0 && count % 5 === 0){
          console.log('fizzbuzz');
      }else if (count % 5 === 0){
          console.log('buzz');
      }else if (count % 3 === 0){
          console.log('fizz');
      }else{
          console.log(count)
      }
    (count++);
  }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(a) {
  // creating a for loop to determine the line of console log
var arrT = [];
  for (var i = 0; i<=a-1; i++){
    
    var arrFinal = [];
    var arrj = [];
    var arrk=[];
      if (i % 2 === 0){
        for (var j = 0; j < a; j++){
          if(j % 2 === 0){
            arrj.push(' ');
          }else{
            arrj.push('#');
          }
        }arrT.push(arrj.join(''));
      }else{
          for (var k = 0; k < a; k++){
          if(k % 2 === 0){
            arrk.push('#');
          }else{
            arrk.push(' ');
          }
        }arrT.push(arrk.join(''));
      }
    
  } console.log(arrT.join('\n').concat('\n'));return arrT.concat("\n");
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
