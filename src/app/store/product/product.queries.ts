import { RootState } from '../root'
import { Product } from './product'

export function getProducts(state: RootState): Product[] {
  return state.productReducer.productList
}

export function getTotalPrice(state: RootState): number {
  return state.productReducer.totalPrice
}

export function getSelectedProducts(state: RootState): Product[] {
  return state.productReducer.productList.filter((item: Product) => item.selected)
}
