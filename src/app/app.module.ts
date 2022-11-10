import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

import { RouterModule } from '@angular/router';
import { AboutassComponent } from './components/aboutass/aboutass.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerComponent,
    AboutassComponent,
    ProductsComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'aboutass',component:AboutassComponent},
      {path:'products',component:ProductsComponent},
      {path:'contacts',component:ContactsComponent},
      {path:'**',redirectTo:'/',pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
