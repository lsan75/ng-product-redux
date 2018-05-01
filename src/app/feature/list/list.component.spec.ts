/*
 * Testing ListComponent
 */

import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { ListComponent } from './list.component'
import { ProductAction } from '../../store/product/product.action'
import { StoreModuleMock } from '../../store/store.module.mock'

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>
  let comp: ListComponent

  const spyProductAction = jasmine.createSpyObj('spyProductAction', ['selectProduct'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
      providers: [{
        provide: ProductAction,
        useValue: spyProductAction
      }],
      imports: [ StoreModuleMock ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(ListComponent)
      comp = fixture.componentInstance
    })
  }))

  it('should be initialized', done => {
    fixture.detectChanges()

    comp.productList.subscribe(res => {
      expect(res).toEqual([])
      done()
    })
  })

  it('should select product', () => {
    fixture.detectChanges()
    const product = {
      name: 'a',
      price: 1
    }
    comp.selectProduct(product)
    expect(spyProductAction.selectProduct).toHaveBeenCalledWith(product)
  })
})
