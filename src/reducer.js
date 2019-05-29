//Step 1
const initialState = {
    'age' : 20
};

//Step 2
const reducer = (state=initialState,action) => {
    
    //Step 4
    const newState = {...state};

    //Step 6
    if(action.type==='ADD'){
        newState.age++;
    }
    else if(action.type==='SUB'){
        newState.age--;
    }

    //Step 5
    return newState;

}

//Step 3
export default reducer;
