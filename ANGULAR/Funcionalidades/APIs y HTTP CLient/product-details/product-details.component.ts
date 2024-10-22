import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IProduct } from '../Models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: IProduct;
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _ApiService: ApiService


  ){ }

  ngOnInit(): void {  
      this._route.params.subscribe({
        next: (params: Params) => {
          this._ApiService.getProductById(Number(params['productId'])).subscribe({
            next: (data: IProduct) =>{
              this.product = data
              this.color = this.product?.price as number > 200 ? 'red' : ''
              this.loading = false;
            },
             error: (error: any) => {
                console.log(error);
                this.loading = false;
              }
          })
        }
      })
    }
  }