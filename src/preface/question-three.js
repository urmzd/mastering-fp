// Question Three: Climbing factorial (loop upwards).

function climbingFactorial(n) {
  if (n <= 0) {
    return 1;
  }

  return climbingFactorial(n - 1) * n;
}

console.log(-5, climbingFactorial(-5));
console.log(0, climbingFactorial(0));
console.log(5, climbingFactorial(5));
