// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log("1:"+name); // Sara
console.log(age); // 25
console.log(gender); // female

////1
const person1 = {
    name1: 'Sara',
    age1: 25,
    gender1: 'female'    
}
let { age1, gender1, name1 } = person;
console.log("2:"+name1); // Sara

//let {name2, age1, gender1} = person;
//console.log(name1); // undefined

////2
const person2 = {
    name2: 'Sara',
    age2: 25,
    gender2: 'female'    
}

// destructuring assignment
// using different variable names
let { name2: name3, age2: age3, gender2:gender3 } = person;

console.log("3:"+name3); // Sara
console.log(age3); // 25
console.log(gender3); // female

///3
let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log("4:"+x); // 10
console.log(y); // 7

////4
const person4 = {
    name: 'Jack',
}

// assign default value 26 to age if undefined
const { name4, age4 = 26} = person;

console.log("5:"+name4); // Jack
console.log(age4); // 26

////5
// program to swap variables
let a = 4;
let b = 7;

// swapping variables
[a, b] = [b, a];

console.log("6:"+a); // 7
console.log(b); // 4

////6
const arrValue1 = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x1, ...y1] = arrValue1;
console.log("7:"+x1); // one
console.log(y1); // ["two", "three", "four"]
//error form
//const [ ...x, y] = arrValue;
//console.log(x); // eror

/////7
// nested array elements
const arrValue2 = ['one', ['two', 'three']];
// nested destructuring assignment in arrays
const [x2, [y2, z2]] = arrValue2;
console.log("8:"+x2); // one
console.log(y2); // two
console.log(z2); // three

/////8
