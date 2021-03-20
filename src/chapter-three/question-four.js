// Q#3.4: Spot the bug!

window.store = new Store();
const oldSet = window.store.set;
window.store.set = (...data) => (console.log(...data), oldSet(...data));

// Problem: oldSet isn't binded.
// FIX BELOW:

const oldSet = window.store.set.bind(window.store);
