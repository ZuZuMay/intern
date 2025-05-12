async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
  });
  const result=await myPromise;
  console.log(result)
}

myDisplay();