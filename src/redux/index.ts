import { combineReducers, createStore } from 'redux'

import { cartSlice } from './slices/cartSlice'

const configureStore = combineReducers({
    cart: cartSlice
})

const Store = createStore(configureStore)

export default Store