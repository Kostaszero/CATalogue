import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  catList: any = [];

  total_price: number = 0;
  delivery_date: any;

  constructor(private cart: CartService){}

  ngDoCheck(){
    let len = 0;
    this.catList = this.cart.getAllCatsInCart();
    for(let item of this.catList){
      this.total_price += item[1].price;
      len++;
    }
    const date = new Date();
    const today_date = date.getDate();
    console.log(today_date, len);
    
    let eta = ((today_date+len) > 30) ? today_date : (today_date+len);
    this.delivery_date = `${date.toLocaleDateString('default', { month: 'long' })} ${eta}`
  }
}
