function myCallback(out)
{
    return out;
}
function mycal(num1, num2, mycallback) {
  var sum = num1 + num2;
  return mycallback(sum);
}

console.log(mycal(5, 5, myCallback));