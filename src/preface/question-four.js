// Question 4: Create a shorten counter function.

// Note: violates immutability rule.
function newCounter() {
  let count = 0;
  
  return () => ++count
}

const nc = newCounter();
console.log(nc()) // 1
console.log(nc()) // 2
console.log(nc()) // 3 
