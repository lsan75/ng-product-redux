import { ProductAction } from './store/product/product.action'

export function appInitialize(productAction: ProductAction) {
  return () => {
    return productAction.getProducts()
  }
}
