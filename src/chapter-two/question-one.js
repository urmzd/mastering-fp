// TASK: Remove unneccessary variables.

const onceAndAfter = (f, g) => {
  let done = false;

  return (...args) => {
    if (!done) {
      done = true
      f(...args);
    } else {
      g(...args)
    }
  }
}

// Note, this violates the immutability principe and thus should be treated only as a exercise.

const _onceAndAfter = (f, g) => {
  return (...args) => {
    if (f) {
      f(...args);
      f = null
    } else {
      g(...args)
    }
  }
}

let sayHi = () => console.log("hi");
let sayHowAreYa = () => console.log("how are ya");
let startConvo = onceAndAfter(sayHi, sayHowAreYa);
let _startConvo = _onceAndAfter(sayHi, sayHowAreYa)

startConvo()
startConvo()

_startConvo()
_startConvo()

