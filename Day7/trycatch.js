try {
  // Code that might throw an error
  let result = someFunctionThatMightFail();
  console.log("Result:", result);
} 
catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
  // Optionally, perform alternative actions or log the error
} finally {
  // Code that always executes, regardless of errors
  console.log("This will always run");
}