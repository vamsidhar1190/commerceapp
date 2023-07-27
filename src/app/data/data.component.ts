import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit{

  constructor(public productdetailref: ProductService ){}

jioproductData:any[]=[]
flipkarproductData:any[]=[]
relianceproducData:any[]=[]
wishlistdata:any[]=[]
products:any[]=[]

  ngOnInit() {
    this.jiodata()
    this.flipkartdata()
    this.reliancedata()
    this.gettingproductdetails()
  }
  jiodata(){
    this.jioproductData=JSON.parse(localStorage.getItem('jiodata')!) ||[]
    console.log(this.jioproductData);
  }
  flipkartdata(){
    this.flipkarproductData=JSON.parse(localStorage.getItem('flipkartdata')!) || []
    console.log(this.flipkarproductData);
    
  }
  reliancedata(){
    this.relianceproducData=JSON.parse(localStorage.getItem('reliancedata')!) || []
    console.log(this.relianceproducData);
    
  }
  gettingproductdetails(){
    this.productdetailref.getproducts().subscribe((res:any)=>{
      this.products=res.products
      console.log(this.products);
      
    })
  }


  addtowish(products:any){
       const existingProduct =this.wishlistdata.find((item:any)=>item.prodBrand ===products.prodBrand)

    if(!existingProduct){
      this.wishlistdata.push(products);
      localStorage.setItem('wishlist',JSON.stringify(this.wishlistdata));
      alert('product added successfully!')
      console.log(this.wishlistdata);
      
    }else{
      alert('product is already in the wishlist')
    }
  }

  addtocart(cartdata:any){
    const addproduct=this.wishlistdata.find((item:any)=>item.prodBrand===cartdata.prodBrand)

    if(!addproduct){
      this.wishlistdata.push(cartdata);
      localStorage.setItem('cartdata',JSON.stringify(this.wishlistdata));
      alert('product added to cart Successfully!')
      console.log(this.wishlistdata);
      
    }
    else{
      alert('not added to cart!')
    }
  }


  
}
