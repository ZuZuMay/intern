const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const p=[2,4,6,8]
const primenum = num.filter((nu)=> 
  {if (nu%2===0)  return nu
   });
console.log(primenum)
const oddnum = num.filter(n=>
  {
    if (n%2!==0)  return n
   
  });
console.log(oddnum)
let prime1=num.some(f)
function f(n)
{
return n%2===0 
}
console.log(prime1)
let odd1=num.some(f1)
function f1(n)
{
return n%2!==0 
}
console.log(odd1)

let students = [
    {   id:1,
        name: "stude A",
        age: 12,
        grade: 7
    },
    {   id:2,
        name: "stude B",
        age: 5,
        grade: 7
    },
    {
        id:3,
        name: "stude C",
        age: 5,
        grade: 7

    }
]
//// delete method can use array index
console.log(delete(students[0]))
console.log(students)
//splice method can change original method removed
function del(stu)
{
  if (stu===1) 
  {
    students.splice(0,1)
    return students
  }
   if (stu===2) 
  {
    students.splice(1,1)
    console.log(students)
  }
  if (stu===3) 
  {
    students.splice(2,1)
    console.log(students)
  }
}
console.log(del(1))
console.log(del(2))
console.log(del(3))
//function delete1(i)
//array element delete
function f2(id)
{
  //callback fun in function
const newArr =students.filter((a) => a.id != id);
console.log(newArr)
}
console.log(f2(2));

//array element update
function f3(id,update)
{
  const new1=students.filter((a)=>a.id===id)
  console.log(new1,update)

}
console.log(f3(2,{grade:"S"}))




