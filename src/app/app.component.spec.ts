import { TestBed, async } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents()
  }))

  it('should be defined', () => {
    expect(AppComponent).toBeDefined()
  })
})
