
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ItemComponent } from './components/item/item.component';
import { ImagesComponent } from './components/images/images.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactService} from './services/contact.service';
import { ShowErrorsComponent } from './components/contact/show-errors/show-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    ItemComponent,
    ImagesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    NewsComponent,
    CartComponent,
    ShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SwiperModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
