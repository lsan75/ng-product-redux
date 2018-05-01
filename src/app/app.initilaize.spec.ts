/*
 * Testing appInitialize
 */

import { appInitialize } from './app.initialize'

describe('appInitialize', () => {

  const spyProductAction = jasmine.createSpyObj('spyProductAction', ['getProducts'])
  spyProductAction.getProducts.and.returnValue('done')

  it('should call getProducts', () => {
    const result = appInitialize(spyProductAction)()
    expect(spyProductAction.getProducts).toHaveBeenCalled()
  })
})
