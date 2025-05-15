function fetchData(callback) {
  setTimeout(() => {
    let data = { user: 'John Doe' };
    callback(null,data); // success
  }, 1000);
}

function handleData(error,data) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Received data:', data);
  }
}

fetchData(handleData);