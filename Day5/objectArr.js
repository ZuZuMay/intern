//object array
const students = [
    {
        name: "stude A",
        age: 12,
        grade: 7
    },
      {
        name: "stude B",
        age: 5,
        grade: 7
    },
      {
        name: "stude C",
        age: 5,
        grade: 7

    }
]

// //simple array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.map(fruit => console.log(fruit))
 const print1=students.filter((stu)=> stu.age>7)
 console.log(print1)
 const print2=students.filter((stu)=> stu.age==7)
 console.log(print2)
const print3=students.filter((stu)=> stu.age<7)
console.log(print3)

const print4 = students.map((stu, index)=>{
    console.log(stu.name)
    console.log(index)
    if (stu.age === 5 ) return {...stu, grade: "KG"}
    //for else 
    return  stu
    })
let newarr = []
//no return in foreach,can process
const print5=students.forEach((stu)=> {
    // console.log(stu.name)
    //  console.log(stu.age)
    //  console.log(stu.grade)
    newarr.push(stu)
    //return newarr
    })
    console.log(newarr)
  console.log(print4, "map")
  console.log(print5, "for each")












