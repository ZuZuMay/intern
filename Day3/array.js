const fruits = ["Banana", "Orange", "Apple", "Mango"];
const animals=["Dog","Cat","Tiger","Horse","Rabbit"];
const location=["Mandalay","Yangon","Monywa"]
const num1=[1,2,3,4,5,6,7];
console.log(fruits.length);
console.log("1indexOf:"+fruits.indexOf(1));
console.log("2toString:"+fruits.toString());
console.log("3at:"+fruits.at(2));
console.log("4join:"+fruits.join("/"));
console.log("5pop:"+fruits.pop());
console.log("6push:"+fruits.push("Kiwi"));
console.log("7shift:"+fruits.shift());
console.log("8unshift:"+fruits.unshift("lemon"));
console.log("delete:"+delete fruits[2]);
console.log("9concat:"+animals.concat(fruits))
console.log("10concat:"+animals.concat(fruits,location))
console.log("11copyWithin:"+animals.copyWithin(1,0))
console.log("12flat:"+fruits.flat());
console.log("13flatMap:"+num1.flatMap(n=>(n*10)))
console.log("14splice:"+fruits.splice(2,2))
console.log("15slice:"+fruits.slice(1))
console.log("16findIndex:"+num1.findIndex(great))
function great(n){
    return n>4;
}
console.log("17sort:"+animals.sort())
console.log("18reverse:"+fruits.reverse())
console.log("19filter:"+num1.filter(great))
console.log("20includes:"+fruits.includes("Apple"))
console.log("21some:"+num1.some(great))
const list=fruits.entries()
for(let a of list)
{
  console.log("entry:"+a)
}
console.log("22toLocaleString:"+num1.toLocaleString())
let text1 = "";
for (const a of fruits.values()) {
  text1 += a;
  console.log("23values:"+text1)
}
const keys=fruits.keys()
let text = "";
for (let x of keys) {
  text += x ;
  console.log("24keys:"+text)
}
console.log("isarray:"+Array.isArray(fruits))