async function myDisplay() {
  try{
  let myPromise = new Promise(function(resolve, reject) {
    //let x = 0;
  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
  });
  const result= myPromise;
  console.log(result)
}
catch(error){
   console.error("An error occurred:", error.message);
   throw error
}
}
myDisplay();