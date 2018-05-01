import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

import * as queries from '../../store/product/product.queries'
import { Product } from '../../store/product/product'
import { ProductAction } from '../../store/product/product.action'

@Component({
  selector: 'app-list',
  templateUrl: './list.html'
})
export class ListComponent {
  @select(queries.getProducts) productList: Observable<Product[]>

  constructor(
    private productAction: ProductAction
  ) {}

  selectProduct = (product: Product) => {
    this.productAction.selectProduct(product)
  }
}
