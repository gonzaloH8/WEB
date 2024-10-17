import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../product/product.mock';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product;
  producstList: Product[] = productList
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute){ }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
      this.product = this.producstList.find(product => product.id == params['productId']);
      this.color = this.product?.price as number > 5 ? 'red' : ''
      this.loading = false;
    });
    }, 1500);
    
  }

}
