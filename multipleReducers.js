const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//action creator

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

function buy_cake()
{
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buy_ice_cream()
{
    return {
        type : BUY_ICE_CREAM,
        info : 'Second redux action'
    }
}

//reducer

const initialCakes = {
    numOfCakes : 10
}

const initialIceCreams = {
    numOfIceCreams : 20
}

const cakeReducer = (state = initialCakes, action) => {
    switch(action.type){

        case BUY_CAKE: 
        return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default :
         return state
    }
}

const iceCreamReducer = (state = initialIceCreams, action) => {
    switch(action.type){

        case BUY_ICE_CREAM:
        return {
            ...state,
            numOfIceCreams : state.numOfIceCreams -1
        }

        default :
         return state
    }
}

const reducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => 
    console.log('Updated state', store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());

unsubscribe();