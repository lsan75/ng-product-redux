import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../../store/product/product'
import { Observable } from 'rxjs/Observable'
import { BASE_URL } from '../tokens'

@Injectable()
export class ProductService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {}

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }
}
