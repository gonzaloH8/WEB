import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  producto: string = '';
  color: string = '';

  constructor(private _route: ActivatedRoute){ }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.producto = params['productId'];
      this.color = params['category'];
    });
  }

}
