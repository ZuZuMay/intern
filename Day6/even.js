const even = (n, uppercase = false) => {
  if (n % 2 === 0) {
   return uppercase ? 'EVEN' : 'even'
  }
  return n
}