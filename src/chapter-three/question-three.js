// Q#3.3 is doAction3 correct or not.

const doAction3 = (state = initialState, action) =>
    (dispatchTable[action.type] && dispatchTable[action.type](state, action)) || 
    state

// Conclusion: yes. since dispatchTable is being immediatly invoked (IIFE);


