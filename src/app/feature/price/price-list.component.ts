import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Product } from '../../store/product/product'

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.html',
  styleUrls: ['./price-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceListComponent {
  @Input() products: Product[]
  @Input() totalPrice: number
}
