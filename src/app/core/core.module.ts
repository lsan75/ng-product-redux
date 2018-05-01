import { NgModule } from '@angular/core'
import { ProductService } from './request/product.service'
import { BASE_URL } from './tokens'

@NgModule({
  providers: [
    ProductService,
    {
      provide: BASE_URL,
      useValue: 'http://localhost:9000'
    }
  ]
})
export class CoreModule {}
