const number = 123456.789;
// convert number to string with a language-sensitive
// representation for the Indian English locale
const numberString = number.toLocaleString('en-IN');
console.log("toLocaleString:"+numberString);
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

// combine all the properties of
// obj1, obj2, obj3 into a single object 
const mergedObj = Object.assign(obj1, obj2, obj3);

console.log("assign:"+mergedObj); 
///seal()

let obj = {
  foo: "bar",
  func: function () {},
};

// before sealing, properties can be
// added, modified, or removed
obj.foo = "JavaScript";
obj.value = 5;
delete obj.func;
console.log(obj);
// Output: { foo: 'JavaScript', value: 5 } 

// seal the object
let o = Object.seal(obj);
// can still change property values
// as it is writable by default
obj.foo = "bar1";
console.log(obj);
// Output: { foo: 'bar1', value: 5 }

// no other change happens, fails silently
obj.foo1 = "bar";
delete obj.foo;
console.log(obj); 
// Output: { foo: 'bar1', value: 5 }

//////freeze
let obj = {
  prop: function () {},
  foo: "bar",
};
// freeze the object
Object.freeze(obj)
/// changes will not occur
obj.foo = "bar1";
console.log(obj.foo);
// Output: bar