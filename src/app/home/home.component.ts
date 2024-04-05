import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any = [];
  constructor(private cart: CartService){}
  ngDoCheck(){
    this.items = this.cart.getAllCats();
  }
}
