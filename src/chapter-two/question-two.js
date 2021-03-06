// Task: create alternating function

const alternator = (f, g) => {
  let evenCall = true

  return (...args) => {
    if (evenCall) {
      f(...args);
    } else {
      g(...args)
    }

    evenCall = !evenCall;
  }
}

const sayA = () => console.log("A");
const sayB = () => console.log("B");

let alt = alternator(sayA, sayB)

alt()
alt()
alt()
alt()
