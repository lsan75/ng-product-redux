export interface Product {
  name: string
  price: number
  selected?: boolean
}

export interface ProductState {
  productList: Product[]
  totalPrice: number
}

export const defaultProductState: ProductState = {
  productList: [],
  totalPrice: 0
}
