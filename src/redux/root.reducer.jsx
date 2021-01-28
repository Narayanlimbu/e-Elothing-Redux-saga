import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 import {cartReducer1} from './persistor/cart.reducer';
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart', 'cart1']  // array contains all the reducer that we want to persist. only cart reducer is added because 'reducer reducer is using firebase storage so we don't need persistor
}

export const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    cart1:cartReducer1
})


export default persistReducer(persistConfig, rootReducer);