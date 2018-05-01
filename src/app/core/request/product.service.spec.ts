/*
 * Testing ProductService
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'

import { ProductService } from './product.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { BASE_URL } from '../tokens'

describe('ProductService', () => {
  let service

  const spyHttp = jasmine.createSpyObj('spyHttp', ['get'])
  spyHttp.get.and.returnValue(Observable.of('pan'))

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        {
          provide: HttpClient,
          useValue: spyHttp
        },
        {
          provide: BASE_URL,
          useValue: 'url'
        }
      ]
    })
  })

  beforeEach(inject([ProductService], (p: ProductService) => {
    service = p
  }))

  it('should get products', done => {
    service.getProducts().subscribe(result => {
      expect(result).toBe('pan')
      expect(spyHttp.get).toHaveBeenCalledWith('url/products')
      done()
    })
  })

})
