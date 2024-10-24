import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void{
    this._apiService.getAllProducts().subscribe((data: IProduct[])=>{
      this.productsList = data;
    })
  }
}
