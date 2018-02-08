declare var Swiper: any;

import { Component, OnInit } from '@angular/core';
import '../../../assets/js/vendor/swiper.min.js';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper = () => {

    //testimonials slider
    let swiper = new Swiper('.testimonials-slider', {
      pagination: '.testimonials-pagination',
      paginationClickable: true,
      slidesPerView: 1,
      spaceBetween: 30,
      nextButton: '.testimonials-slider-next',
      prevButton: '.testimonials-slider-prev'
    });
  }
}
