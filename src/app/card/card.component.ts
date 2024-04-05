import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private cart: CartService){}
  @Input() catDetails: any;
  @Input() idx: any;
  @Input() canDelete: any;
  

  isAdded: boolean = false;
  totalCount: number = 0;
  
  ngOnInit(){
    // this.getCatUrl();
    
    if (this.catDetails.count > 0) {
      this.isAdded = true;
    }
    this.totalCount = this.catDetails.count;
  }
  // getCatUrl(){
  //   let url: any = '';
  //   const sub = this.cart.getCat().subscribe((val):any=>{
  //     url = val;
  //   });
  //   sub.unsubscribe();
  //   return url.url;
  // }
  addToCart(){
    this.cart.insertCat(this.idx);
    this.updateCart(1);
    this.isAdded = true;
  }
  updateCart(cnt: number){
    this.totalCount += cnt;
    if (this.totalCount == 0) { this.removeCat(); this.isAdded = false;}
    else this.cart.updateCat(this.idx, cnt);
  }
  removeCat(){
    this.cart.removeCat(this.idx);
  }
}
