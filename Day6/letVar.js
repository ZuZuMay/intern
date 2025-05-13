//let is block scope
let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}
// var declaration of the loop iterator
//so j++ is not work
for (var j = callbacks.length; j <= 5; j++) {
  callbacks[j] = function () { return j * 2 }
}
console.log( callbacks[0]() )
console.log( callbacks[1]() )
console.log( callbacks[2]() )
console.log( callbacks[3]() )
console.log( callbacks[4]() )
console.log( callbacks[5]() )
