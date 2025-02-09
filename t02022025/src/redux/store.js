import {createStore} from 'redux';
import reducer from './firstReducer';

const firstStore = createStore(reducer);

export default firstStore;