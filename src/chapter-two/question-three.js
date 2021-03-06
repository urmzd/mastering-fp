// Task: Create function that gets called n times, then produces nothing afterwards.

const thisManyTimes = (fn, n) => {
  let currentCount = 0;
  
  return (...args) => {
    if (currentCount < n) {
      fn(...args)
    }    
    currentCount++;
  }
}

const whatToDo = thisManyTimes(() => console.log("make da bag"), 2);

whatToDo()
whatToDo()
whatToDo()
whatToDo()
