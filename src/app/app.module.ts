import { NgModule, APP_INITIALIZER } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { CoreModule } from './core/core.module'
import { FeatureModule } from './feature/feature.module'
import { StoreModule } from './store/store.module'

import { appInitialize } from './app.initialize'
import { ProductAction } from './store/product/product.action'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FeatureModule,
    StoreModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInitialize,
    multi: true,
    deps: [ ProductAction ]
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
