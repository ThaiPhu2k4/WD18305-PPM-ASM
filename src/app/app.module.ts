import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { AdminComponent } from './admin/app.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { AboutComponent } from './admin/about/about.component';
import { CartComponent } from './admin/cart/cart.component';
import { ContactComponent } from './admin/contact/contact.component';
import { ShopSingleComponent } from './admin/shop-single/shop-single.component';
import { ShopComponent } from './admin/shop/shop.component';
import { HomeComponent } from './admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CartComponent,
    ContactComponent,
    ShopSingleComponent,
    ShopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
