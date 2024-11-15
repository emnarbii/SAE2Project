import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  class="sae2";
  subject="Angular";
  color="";

 onClick(){
  return alert("Vous avez cliquer!!!!!");
 }
}
