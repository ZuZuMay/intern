const getData = (params = {name: 'john', email: 'ex@gmail.com'}) => {
  return axios.post(url, params);
}
// anywhere you want to get the return data

// using await

const setData1 = async () => {

  const data = await getData();
  console.log("b")
  
  }
  
  // to handle error with await
  const setData2 = async () => {
    try {
      const data = await getData();
      }
     catch(err) {
        console.log(err.message);
     }
  }
  
   // using .then .catch
  const setData3 = () => {
 
      var data; 
      getData().then((res) => { 
        data = res.data; console.log(data)
      }).catch((err) => {
        console.log("error",err.message);
      });

  }
  console.log(setData3(4))