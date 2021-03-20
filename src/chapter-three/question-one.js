// Q#3.1 - Uninitialized Object

const simpleActon = t => {
  type: t;
}

console.log(simpleActon('INITIALIZE'));

// Simple action returns undefined because the parser
// interprets the curly braces as a block statement, rather than an object.
