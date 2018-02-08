declare var Swiper: any;

import { Component, OnInit } from '@angular/core';
import '../../../assets/js/vendor/swiper.min.js';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }
initSwiper = () => {
  //post slider
let swiper = new Swiper('.post-slider', {
  pagination: '.post-pagination',
  paginationClickable: true,
  nextButton: '.post-slider-next',
  prevButton: '.post-slider-prev',
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
      1024: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      640: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      320: {
          slidesPerView: 1,
          spaceBetween: 0
      }
  }
});
}
}
