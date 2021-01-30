// Task: Analyze this code and explain it;

// Reasoning: Make a function which returns a class.
const makeSaluteClass = term => {
  class {
    constructor(x) {
      this.x = x;
    }

    salute(y) {
      console.log(`${this.x} says "${term} to ${y}`);
    }
  }
}

// Reasoning: Call function and rename class.  
const Spanish = makeSaluteClass("HOLA");
// Reasoning: Create an instance of the class and call its "salute" function.
new Spanish("ALFA").salute("BETA");
// Outputs: ALFA says "HOLA" to BETA 

// Reasoning: Call the function, then call the constructor, then call its method. 
new (makeSaluteClass("HELLO")) ("GAMMA").salute("DELTA");
// Outputs: GAMMA says "HELLO" to DELTA

// Reasoning: Create a wrapper function to call function in the class.
const fullSaluate = (c,x ,y) => new c(x).salute(y);
// Reasoning: Rename class.
const French = makeSaluteClass("BON JOUR");
// Reasoning: Call wrapper function with newly named class, and additional args.
fullSalute(French, "EPSILON", "ZETA");
// Outputs: EPILON says "BON JOUR" to ZETA

