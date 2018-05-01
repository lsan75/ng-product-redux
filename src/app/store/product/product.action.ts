import { Injectable } from '@angular/core'
import { NgRedux, ObservableStore } from '@angular-redux/store'
import { Subscription } from 'rxjs/Subscription'

import { RootState } from '../root'
import { ProductService } from '../../core/request/product.service'
import { Product } from './product'
import { ProductActionType } from './product.reducer'


export const PRODUCT_ACTION = {
  GET_PRODUCTS: 'PRODUCT_ACTION.GET_PRODUCTS',
  SELECT_PRODUCT: 'PRODUCT_ACTION.SELECT_PRODUCT'
}

@Injectable()
export class ProductAction {
  constructor(
    private ngRedux: NgRedux<RootState>,
    private productService: ProductService
  ) {}

  getProducts = (): Subscription => {
    return this.productService.getProducts().subscribe((productList: Product[]) => {
      this.ngRedux.dispatch<ProductActionType>({
        type: PRODUCT_ACTION.GET_PRODUCTS,
        productList
      })
    })
  }

  selectProduct = (product: Product) => {
    this.ngRedux.dispatch({
      type: PRODUCT_ACTION.SELECT_PRODUCT,
      product
    })
  }
}
