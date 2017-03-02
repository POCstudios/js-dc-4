
var x1 = process.argv[2].split(',')
var y2 = process.argv[3].split(',')

var deltaX = x1[1]-x1[0];
var deltaY = y2[1]-y2[0];

var distance = Math.sqrt (Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

console.log ('Distance is... = ' + distance)
