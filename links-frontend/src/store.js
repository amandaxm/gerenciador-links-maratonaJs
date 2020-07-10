import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxPromise from 'redux-promise';

import SignInReducer from './screens/SignIn/SignInReducer'
const reducers = combineReducers({
    signIn: SignInReducer,
});
const store = createStore(reducers, applyMiddleware(ReduxPromise));
export default store;