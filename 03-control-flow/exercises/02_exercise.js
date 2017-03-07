/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/


// for(var i = 0; i 10; i = i++){
//   console.log(i)
// }
//
// var grades = [87,95.5,40,79,20]


// Create an array with the names 'curly', 'lary' and 'moe'
var names = ['curly', 'lary','moe']

/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/

// var names = ['curly', 'lary','moe']
// var i = 0;
// var text = " ";
//
// while (names[i]) {
//   console.log(names[i])
//   i++;
// }
/*
Create a simple while loop that iteratoes over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/

var names = ['curly', 'lary','moe']
var i = 0;
var text = " ";

while (names[i]){

    if (names[i] === 'curly') {
        console.log(names[i] + ' is the best');
    } else {
      console.log(names[i] + ' is one of the three stooges')
    }
  i++;
}

// Create a `do while` loop that does the same as the above
// var names = ['curly', 'lary','moe']
// var i = 0;
// var text = " ";
//
// do {
//   if (names[i] === 'curly') {
//   console.log('curly is the best');
//      } else {
//        console.log(names[i] + " is one of the three stooges ")
//      }
//    i++;
// }
//  while (names[i]);
