function fetchData(callback) {
  setTimeout(() => {
    let data = { user: 'John Doe' };
    callback(null,data); // success
  }, 1000);
}

function handleData(error,data) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Received data:', data);
  }
}

fetchData(handleData);
////no fun name
const sayHello = () => "Hello, World!";

// call the arrow function and print its return value
console.log(sayHello());  


//////arrow function as expression
let age = 5;
// use arrow functions as expressions in ternary operator 
// to dynamically assign functionality
let welcome = (age < 18) ?
    () => console.log("Child") :
    () => console.log("Adult");

welcome(); 

let person = {
    name: "Jack",
    age: 25,

    sayAge: (a) => {
        console.log(a);
    }
}

person.sayAge(5); // undefined