/*
 * Testing ProductAction
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { ProductAction, PRODUCT_ACTION } from './product.action'
import { NgRedux } from '@angular-redux/store'
import { ProductService } from '../../core/request/product.service'
import { Observable } from 'rxjs/Observable'

describe('ProductAction', () => {
  let service

  const spyRedux = jasmine.createSpyObj('spyRedux', ['dispatch'])
  const spyProductService = jasmine.createSpyObj('spyProductService', ['getProducts'])
  spyProductService.getProducts.and.returnValue(Observable.of('pan'))

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductAction,
        {
          provide: NgRedux,
          useValue: spyRedux
        },
        {
          provide: ProductService,
          useValue: spyProductService
        }
      ]
    })
  })

  beforeEach(inject([ProductAction], (p: ProductAction) => {
    service = p
  }))

  it('should get products', () => {
    service.getProducts()
    expect(spyProductService.getProducts).toHaveBeenCalled()
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: PRODUCT_ACTION.GET_PRODUCTS,
      productList: 'pan'
    })
  })

  it('should select a product', () => {
    service.selectProduct('sel')
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: PRODUCT_ACTION.SELECT_PRODUCT,
      product: 'sel'
    })
  })
})
