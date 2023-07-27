import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  
  ngOnInit() {
    this.wishlist()
  }

  products:any[]=[]

  wishlist(){
    this.products=JSON.parse(localStorage.getItem('wishlist')!)
    console.log(this.products);
    
  }
  // increaseQuantity(product: any) {
  //   product.prodQua++; // Increment the product quantity
  // }
  // decreaseQuantity(product: any) {
  //   if (product.prodQua > 1) {
  //     product.prodQua--; // Decrement the product quantity but ensure it stays at least 1
  //   }
  // }

  // calculatePrice(product: any) {
  //   return product.prodQua * product.prodprice; // Calculate the total price based on quantity
  // }

  increaseQuantity(product:any){
    product.prodQua++

  }
  decreaseQuantity(product:any){
    if(product.prodQua>1){
      product.prodQua--
    }
  }
  calculatePrice(product:any){
    return product.prodQua * product.prodprice;
  }
  removeProduct(index:number){
    this.products.splice(index,1)
  }


}
