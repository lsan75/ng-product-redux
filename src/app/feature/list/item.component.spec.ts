/*
 * Testing ItemComponent
 */

import { NO_ERRORS_SCHEMA, Component, ViewChild } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { ItemComponent } from './item.component'
import { Product } from '../../store/product/product'

@Component({
  selector: 'app-parent',
  template: `
    <app-item
      [productList]="productList"
      (select)="select($event)"
    ></app-item>
  `
})
class ParentComponent {
  @ViewChild(ItemComponent) child: ItemComponent
  productList: Product[] = [
    {
      name: 'a',
      price: 10,
      selected: true
    },
    {
      name: 'b',
      price: 5
    }
  ]
  select = (product: Product) => {}
}

describe('ItemComponent', () => {
  let fixture: ComponentFixture<ParentComponent>
  let comp: ParentComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ItemComponent
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
    const els = fixture.debugElement.queryAll(By.css('.ProductList__Item'))
    expect(els.length).toBe(2)
    expect(els[0].nativeElement.className).toContain('selected')

    const name = fixture.debugElement.query(By.css('.ProductList__Item__Name'))
    expect(name.nativeElement.innerText).toBe('A')

    const price = fixture.debugElement.query(By.css('.ProductList__Item__Price'))
    expect(price.nativeElement.innerText).toBe('10€')

  })

  it('should be selected', () => {
    spyOn(comp, 'select')
    fixture.detectChanges()
    const els = fixture.debugElement.queryAll(By.css('.ProductList__Item'))
    els[0].nativeElement.click()

    expect(comp.select).toHaveBeenCalledWith(comp.productList[0])
  })
})
