/*
 * Testing PriceComponent
 */

import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { PriceComponent } from './price.component'
import { StoreModuleMock } from '../../store/store.module.mock'

describe('PriceComponent', () => {
  let fixture: ComponentFixture<PriceComponent>
  let comp: PriceComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModuleMock ],
      declarations: [
        PriceComponent
      ],
      providers: [],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(PriceComponent)
      comp = fixture.componentInstance
    })
  }))

  it('should receive selectedProducts', done => {
    fixture.detectChanges()
    comp.selectedProducts.subscribe(res => {
      expect(res).toEqual([])
      done()
    })
  })

  it('should receive totalPrice', done => {
    fixture.detectChanges()
    comp.totalPrice.subscribe(res => {
      expect(res).toEqual(0)
      done()
    })
  })
})
