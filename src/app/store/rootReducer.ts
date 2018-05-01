import { combineReducers, Reducer } from 'redux'
import { RootState } from './root'

import { productReducer } from './product/product.reducer'

export const rootReducer: Reducer<RootState> = combineReducers({
  productReducer
})
