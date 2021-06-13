// Efficient Fibonacci function, why?
// Simple. The summation of two consecutive terms are used to prevent additional recursive calls.

const fib4 = (n, a = 0, b = 1) => (n === 0 ? a : fib4(n - 1, b, a + b));
