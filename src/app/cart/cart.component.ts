import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartdatas:any[]=[];

  ngOnInit(){
    this.cartdata()
    
  }
  cartdata(){
    this.cartdatas=JSON.parse(localStorage.getItem('cartdata')!)
    console.log(this.cartdatas);
    
  }

}
