import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListComponent } from './list/list.component'
import { ItemComponent } from './list/item.component'
import { PriceComponent } from './price/price.component'
import { PriceListComponent } from './price/price-list.component'

const components = [
  ListComponent,
  ItemComponent,
  PriceComponent,
  PriceListComponent
]

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class FeatureModule {}
