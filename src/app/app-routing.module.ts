import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { AboutComponent } from './admin/about/about.component';
import {CartComponent } from './admin/cart/cart.component';
import {ContactComponent } from './admin/contact/contact.component';
import {ShopSingleComponent } from './admin/shop-single/shop-single.component';
import {ShopComponent } from './admin/shop/shop.component';


const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: '', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
 
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop-single', component: ShopSingleComponent },
  { path: 'shop', component: ShopComponent },
];
@NgModule({
 
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
