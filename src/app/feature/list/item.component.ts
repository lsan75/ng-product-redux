import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Product } from '../../store/product/product'

@Component({
  selector: 'app-item',
  templateUrl: './item.html',
  styleUrls: ['./item.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() productList: Product[]
  @Output() select = new EventEmitter()

  selectProduct = (product: Product) => {
    this.select.emit(product)
  }
}
