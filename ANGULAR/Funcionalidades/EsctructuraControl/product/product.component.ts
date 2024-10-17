import { Component } from '@angular/core';
import { productList } from './product.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  producstList = productList;
}
