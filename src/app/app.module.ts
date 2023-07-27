import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TestComponent } from './test/test.component';
import { CardModule } from 'primeng/card';
import { AjioComponent } from './ajio/ajio.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { ReliancedigitalComponent } from './reliancedigital/reliancedigital.component';
import { DialogModule } from 'primeng/dialog';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AjioComponent,
    FlipkartComponent,
    ReliancedigitalComponent,
    LoginComponent,
    DataComponent,
    WishlistComponent,
    CartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
