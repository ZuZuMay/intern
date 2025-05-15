function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  class Calculator {
    multiply(a, b) {
      return a * b;
    }
  }
  
  // Export multiple things as properties of an object
  module.exports = {
    add,
    subtract,
    Calculator
  };