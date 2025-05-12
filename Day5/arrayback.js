const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = remove(myNumbers, (x) => x >= 0);
console.log(posNumbers);
function remove(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}