import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id!: number;
  productItem!: any;
  productList = [
    { id: 1, pName: 'PC', price: '2000', img: '../assets/images/pc.jpg' },
    { id: 2, pName: 'souris', price: '20', img: '../assets/images/souris.png' },
    { id: 3, pName: 'écran', price: '200', img: '../assets/images/ecran.jpg' },
  ];
  constructor(private act: ActivatedRoute) {}
  ngOnInit() {
    // this.id = this.act.snapshot.params['id'];
    this.act.paramMap.subscribe(res=>this.id=Number(res.get('id')))
    this.productItem = this.productList.filter((p) => p.id == this.id);
  }
}
