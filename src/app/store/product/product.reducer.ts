import { ProductState, defaultProductState, Product } from './product'
import { PRODUCT_ACTION } from './product.action'

export interface ProductActionType {
  type: string
  product?: Product
  productList?: Product[]
}

export function productReducer(
  state: ProductState = defaultProductState,
  action: ProductActionType
): ProductState {

  let productList: Product[]

  switch (action.type) {

    case PRODUCT_ACTION.GET_PRODUCTS:
      productList = action.productList
      return { ...state, productList }

    case PRODUCT_ACTION.SELECT_PRODUCT:
      productList = JSON.parse(JSON.stringify(state.productList))

      productList = productList.map((product: Product) => {
        if (product.name === action.product.name) {
          product.selected = !product.selected
        }
        return product
      })

      const totalPrice = productList.reduce((acc: number, product: Product) => {
        if (product.selected) {
          return acc += product.price
        }
        return acc
      }, 0)

      return { ...state, totalPrice, productList }

    default:
      return state
  }
}
