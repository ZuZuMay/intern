// import {sub,add} from './mathcal.js'
// console.log(sub(2,4))
// console.log(add(4,6))

// import {sub as reduce,add as sum} from './mathcal.js'
// console.log(reduce(2,4))
// console.log(sum(4,6))
// //user can't use instead of default
// //new must write since ss is constructor
// import {default as ss,sayHi} from './mathcal.js';
// console.log(new ss('John'));
// //reexport only name exports but ignore default one
// //next way
// import * as us from './mathcal.js';
// let User1 = us.default; // the default export
// console.log(new User1('sans'));

// import User from './mathcal.js'
import { User , sayHi } from './mathcal.js'
console.log(User, "user")
const user1 = new User("Kyaw Kyaw")
user1.sayHi()
sayHi("fdfjjklf")
