import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AjioComponent } from './ajio/ajio.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { ReliancedigitalComponent } from './reliancedigital/reliancedigital.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent
  },
  {
    path:'data/login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'test',component:TestComponent 
  },
  {
    path:'data',component:DataComponent 
  },
  {
    path:'data/wishlist',component:WishlistComponent
  },
  {
    path:'data/cart',component:CartComponent
  },
  {
    path:'test/ajio',component:AjioComponent
  },
  {
    path:'test/ajio/data/login',component:LoginComponent
  },
  {
    path:'test/flipkart',component:FlipkartComponent
  },
  {
    path:'test/reliancedigital',component:ReliancedigitalComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
