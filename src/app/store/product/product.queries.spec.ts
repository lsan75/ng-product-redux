import * as productQueries from './product.queries'

describe('productQueries', () => {

  let state, productList

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
        selected: true
      }
    ]
    state = {
      productReducer: {
        productList,
        totalPrice: 30
      }
    }
  })

  it('should get products', () => {
    const result = productQueries.getProducts(state)
    expect(result).toEqual(productList)
  })

  it('should getTotalPrice', () => {
    const result = productQueries.getTotalPrice(state)
    expect(result).toEqual(30)
  })

  it('should get selected products', () => {
    const result = productQueries.getSelectedProducts(state)
    expect(result).toEqual([ productList[1] ])
  })

})
