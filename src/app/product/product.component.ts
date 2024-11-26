import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
//   class="sae2";
//   subject="Angular";
//   color="";

//  onClick(){
//   return alert("Vous avez cliquer!!!!!");
//  }

title: string = 'ProductList';
  color = 'red';
  productList = [
    { id: 1, pName: 'PC', price: '2000', img: '../assets/images/pc.jpg' },
    { id: 2, pName: 'souris', price: '20', img: '../assets/images/souris.png' },
    { id: 3, pName: 'écran', price: '200', img: '../assets/images/ecran.jpg' },
  ];

  
  clickMe() {
    return alert('vous avez cliquer');
  }
}
