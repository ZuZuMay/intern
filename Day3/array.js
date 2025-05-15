const fruits = ["Banana", "Orange", "Apple", "Mango"];
const animals=["Dog","Cat","Tiger","Horse","Rabbit"];
const location=["Mandalay","Yangon","Monywa"]
const num1=[1,2,3,4,5,6,7];
//console.log(fruits.length());
console.log("1:"+fruits.indexOf(1));
console.log("2:"+fruits.toString());
console.log("3:"+fruits.at(2));
console.log("4:"+fruits.join("/"));
console.log("5:"+fruits.pop());
console.log("6:"+fruits.push("Kiwi"));
console.log("7:"+fruits.shift());
console.log("8:"+fruits.unshift("lemon"));
console.log(delete fruits[2]);
console.log("9:"+animals.concat(fruits))
console.log("10:"+animals.concat(fruits,location))
console.log("11:"+animals.copyWithin(1,0))
console.log("12:"+fruits.flat());
console.log("13:"+num1.flatMap(n=>(n*10)))
console.log("14:"+fruits.splice(2,2))
console.log("15:"+fruits.slice(1))
console.log("16:"+num1.findIndex(great))
function great(n){
    return n>4;
}
console.log("17:"+animals.sort())
console.log("18:"+fruits.reverse())
console.log("19:"+num1.filter(great))
console.log("20:"+fruits.includes("Apple"))
console.log("21:"+num1.some(great))
//const list=fruits.entries()
console.log("22:"+num1.toLocaleString())
let text1 = "";
for (const a of fruits.values()) {
  text1 += a;
  console.log("23:"+text1)
}
const keys=fruits.keys()
let text = "";
for (let x of keys) {
  text += x ;
  console.log("24:"+text)
}
