const temperaturesInCelsius = [25, 30, 15, 20];

const temperaturesInFahrenheit = temperaturesInCelsius.map((celsius) => {
  return (celsius * 9/5) + 32;

});

console.log(temperaturesInFahrenheit);