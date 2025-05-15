const dateStrings = ['2023-01-15', '2023-05-20', '2023-09-10'];

const formattedDates = dateStrings.map((dateString) => {

  const date = new Date(dateString);

  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

});

console.log(formattedDates);