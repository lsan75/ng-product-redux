import { ProductState, defaultProductState } from './product/product'

export interface RootState {
  productReducer: ProductState
}

export const defaultRootState: RootState = {
  productReducer: defaultProductState
}
