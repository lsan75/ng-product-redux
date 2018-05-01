/*
 * Testing PriceListComponent
 */

import { NO_ERRORS_SCHEMA, Component } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { By, BrowserModule } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { PriceListComponent } from './price-list.component'
import { Product } from '../../store/product/product'

@Component({
  selector: 'app-parent',
  template: `
    <app-price-list
      [products]="products"
      [totalPrice]="totalPrice"
    ></app-price-list>
  `
})
class ParentComponent {
  products: Product[] = [
    {
      name: 'aa',
      price: 10,
      selected: true
    },
    {
      name: 'b',
      price: 5,
      selected: true
    }
  ]
  totalPrice = 15
}

describe('PriceListComponent', () => {
  let fixture: ComponentFixture<ParentComponent>
  let comp: ParentComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        PriceListComponent
      ],
      providers: [],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(ParentComponent)
      comp = fixture.componentInstance
    })
  }))

  it('should be initialized', () => {
    fixture.detectChanges()

    const els = fixture.debugElement.queryAll(By.css('.PriceList__Item'))
    expect(els.length).toBe(2)

    const total = fixture.debugElement.query(By.css('.TotalPrice__Value'))
    const name = fixture.debugElement.query(By.css('.PriceList__Item__Name'))
    const price = fixture.debugElement.query(By.css('.PriceList__Item__Price'))
    expect(total.nativeElement.innerText).toBe('15 €')
    expect(name.nativeElement.innerText).toBe('aa')
    expect(price.nativeElement.innerText).toBe('10 €')
  })
})
