import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import * as queries from '../../store/product/product.queries'
import { Observable } from 'rxjs/Observable'
import { Product } from '../../store/product/product'

@Component({
  selector: 'app-price',
  templateUrl: './price.html'
})
export class PriceComponent {
  @select(queries.getSelectedProducts) selectedProducts: Observable<Product[]>
  @select(queries.getTotalPrice) totalPrice: Observable<number>
}
