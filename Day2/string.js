const str="I am a student"
const sco="It is a scope"
console.log(str.length)
console.log("1charAt:"+str.charAt(3))
console.log("2at:"+str.at(2))
console.log("3charCodeAt:"+str.charCodeAt(5))
console.log("4substring:"+str.substring(2,5))
console.log("5slice:"+str.slice(2,5))
console.log("6toUpperCase:"+str.toUpperCase())
console.log("7toLowerCase:"+str.toLowerCase())
console.log("8concat:"+str.concat(sco))
console.log("9trim:"+str.trim())
console.log("10padStart:"+str.padStart(20,"#"))
console.log("11padEnd:"+str.padEnd(20,"%"))
console.log("12replace:"+str.replace("student","teacher"))
console.log("13replace:"+sco.replace(/i/g,"a"))
console.log("14startsWith:"+sco.startsWith("is",3))
console.log("15includes:"+str.includes("I"))
console.log("15includes:"+str.includes("I",2))
console.log("16repeat:"+str.repeat(3))
let string1 = String.fromCharCode(72, 69, 76, 76, 79);
// printing the equivalent characters
console.log("fromCharCode:"+string1);
let string2 = String.fromCharCode(0x2017);
//hexadecimal
console.log("Hexacode:"+string2);
console.log("isarray:"+Array.isArray(str))















