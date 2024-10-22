import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL= 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]>{ // devuelve un observable de tipo IProduct
    return this._httpClient.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct>{ // devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  // public getProductsSort(sort?: string ): Observable<IProduct[]>{
  //   const params = sort ? `?sorts${sort}` : ''
  //   return this._httpClient.get<IProduct[]>(`${this.baseURL}/${params}`);
  // }

  public getAllCategories(): Observable<Category[]>{ // devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categoris`);
  }

  public newProducto(product: IProduct): Observable<IProduct>{ // devuelve un observable de un producto
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }
  
  public updateProduct(id: number, product: IProduct): Observable<IProduct>{ // devuelve un observable de un producto actualizado
    return this._httpClient.post<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct>{ // devuelve un observable de un producto actualizado
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }



}

// 200 igual a OK esta bien
// 201 se a creado bien