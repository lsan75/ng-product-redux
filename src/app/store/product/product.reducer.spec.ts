import { productReducer } from './product.reducer'
import { defaultProductState } from './product'
import { PRODUCT_ACTION } from './product.action'

describe('productReducer', () => {

  let productList

  beforeEach(() => {
    productList = [
      {
        name: 'a',
        price: 10,
        selected: false
      },
      {
        name: 'b',
        price: 20,
        selected: false
      }
    ]
  })

  it('should get products', () => {
    const result = productReducer(defaultProductState, {
      type: PRODUCT_ACTION.GET_PRODUCTS,
      productList
    })

    expect(result).toEqual({
      totalPrice: 0,
      productList
    })
  })

  it('should select a product', () => {
    const state = { ...defaultProductState, productList }
    const result = productReducer(state, {
      type: PRODUCT_ACTION.SELECT_PRODUCT,
      product: productList[0]
    })

    expect(result.productList[0].selected).toBe(true)
    expect(result.productList[1].selected).toBe(false)
    expect(result.totalPrice).toBe(10)
  })

  it('should do nothing', () => {
    const result = productReducer(undefined , {
      type: 'hop'
    })

    expect(result).toEqual(defaultProductState)
  })
})
