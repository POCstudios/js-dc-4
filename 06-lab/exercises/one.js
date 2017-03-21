// module.exports.one = function one(){
//   console.log('one')
// }

// one()

// module.exports = one
// how we exports file from this files


// module.exports.two = function two(){
//   console.log ('two')
}
// module.exports.one = one

module.exports = function Person( name, height) {
  this.name = name
  this.height = height
}
