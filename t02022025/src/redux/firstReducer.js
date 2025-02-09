import BUY_CAKE from "./constants";

const initialState = {
    numOfCakes : 20
}

function reducer(state = initialState, action){
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }

        default:
            return state
    }
}

export default reducer;