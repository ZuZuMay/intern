const sub=(a,b)=>{ return (a-b) }
const add=(c,d)=>{ return (c+d) }
export {sub,add}
//catch input
export  class User {
    constructor(name) {
      this.name = name;
    }
    sayHi(user) {
        console.log(`Hello, ${this.name}!`);
      }
  }
  //browser alert  popup
  export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }


  
/////////////////common JS /////////////////
//export default
module.exports = class User {
    constructor(name) {
      this.name = name;
    }
  }



  function sayHiM(user) {
    console.log(`Hello, ${user}!`);
  }

  module.exports = sayHiM

  const User = require('./user'); // import 



  module.exports = {
     User,
    sayHi
  }
  const { User , sayHi } =  require('./user');
  
  // main.js

 
  const user = new User('Bob');
  console.log(user.name);