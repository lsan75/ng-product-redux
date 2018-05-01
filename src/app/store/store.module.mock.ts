import { NgModule } from '@angular/core'
import { NgRedux, NgReduxModule } from '@angular-redux/store'

import { defaultRootState, RootState } from './root'
import { rootReducer } from './rootReducer'
import { ProductAction } from './product/product.action'

@NgModule({
  imports: [ NgReduxModule ],
  providers: [ ProductAction ]
})
export class StoreModuleMock {
  constructor(
    private ngRedux: NgRedux<RootState>
  ) {

    ngRedux.configureStore(rootReducer, defaultRootState, [], [])

  }
}
