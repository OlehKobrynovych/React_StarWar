import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import peoples_reducer from './peoples_reducer';
import planets_reducer from './planets_reducer';

const rootReducer = combineReducers({
    peoples: peoples_reducer,
    planets: planets_reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));