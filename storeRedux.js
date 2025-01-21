const redux = require('redux');
const createStore = redux.createStore;

//action creator

const BUY_CAKE = 'BUY_CAKE';

function buy_cake()
{
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

//reducer

const initialState = {
    numOfCakes: 10
} 

const reducer = (state = initialState, action) => {
    switch(action.type){

        case BUY_CAKE: 
        return {
            numOfCakes : state.numOfCakes - 1
        }

        default :
         return state
    }
}

const store = createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => 
    console.log('Updated state', store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());

unsubscribe();