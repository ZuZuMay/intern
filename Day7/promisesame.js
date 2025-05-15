
let p = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve('PromiseSuccess');
  } else {
    reject('Error');
  }
});
p
.then(message => console.log(`Promise resolved: ${message}`))
.catch(message => console.log(`Promise rejected: ${message}`));
const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');
//.any return resolve
//all reject ,return reject
Promise.any([p1, p2, p3]).then(response => {
  console.log(response);
});
//race() return reject ,p1 is reject in all
//this return false,one false has in all
Promise.race([p1,p2,p3])
.then(response => console.log(response))
  .catch(reason => console.log(reason));