
import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private bagCartData: any = {};
  private catData: any = [];

  constructor() {
    // console.log(data, Object.entries(data)[16][1]);
    // Object.entries(data).forEach((val) => {
    //   this.catData.push(val[1]);
    // })
    this.catData = Object.entries(data)[16][1];
   }


  insertCat(idx: number){
    console.log(idx, this.bagCartData);
    this.bagCartData[idx] = this.catData[idx];
  }
  updateCat(idx: number, cnt: number){
    this.bagCartData[idx].count += cnt;
    this.catData[idx].count = this.bagCartData[idx].count;
  }
  removeCat(idx: number){
    delete this.bagCartData[idx];
    this.catData[idx].count = 0;
    
  }
  getAllCatsInCart(){
    return Object.entries(this.bagCartData);
  }

  getAllCats(){
    return this.catData;
  }


  // getCat(){
  //   return this.http.get('https://api.thecatapi.com/v1/images/search');
  // }
}
