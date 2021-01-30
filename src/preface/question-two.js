// Question Two: Recursive factorial function with error checking.

function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
} 

console.log(-5,factorial(-5));
console.log(0, factorial(0));
console.log(5, factorial(5));

