/**
 * Question: Does the following code work, and if so, how?
 * Answer: Yes, its implicitly returning the value evaluated from the recursive call made.
 */
const fib2 = (n) => (n < 2 ? n : fib2(n - 2) + fib2(n - 1));
