/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/

// function average(num1, num2) {
//     return (num1+num2)/2
// }
//
// var myNum = average( 5, 10 )
// console.log( myNum )
//




/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/

function distance(point1, point2) {

var deltaX = point1[0]- point2[0]
var deltaY = point1[1]- point2[1]

var deltaXSquared = Math.pow(deltaX,2)
var deltaYSquared  = Math.pow(deltaY,2)

var answer = Math.sqrt(deltaXSquared + deltaYSquared)
return answer

}
  var answer = distance ([0,0],[3,7])
console.log(answer)
