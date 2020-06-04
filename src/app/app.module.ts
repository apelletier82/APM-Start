import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule // attention à l'ordre des routes 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
