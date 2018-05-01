import { NgModule } from '@angular/core'
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store'
import { environment } from '../../environments/environment'

import { defaultRootState, RootState } from './root'
import { rootReducer } from './rootReducer'
import { ProductAction } from './product/product.action'

@NgModule({
  imports: [ NgReduxModule ],
  providers: [ ProductAction ]
})
export class StoreModule {
  constructor(
    private ngRedux: NgRedux<RootState>,
    private devTools: DevToolsExtension
  ) {

    let enhancers = []

    if (!environment.production) {
      enhancers = [ ...enhancers, devTools.enhancer() ]
    }

    ngRedux.configureStore(rootReducer, defaultRootState, [], enhancers)

  }
}
