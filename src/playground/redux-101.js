import { createStore } from 'redux';

const incrementCount = ({incrementBy  = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. reducers are pure functions
// 2. never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }    
};

const store = createStore();

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount( { incrementBy: 5 } ));


//decrement
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 2
});

//reset
store.dispatch(resetCount());

//set
store.dispatch(setCount ( {count: 101 } ));