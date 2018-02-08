declare var Swiper: any;

import { Component, OnInit } from '@angular/core';
import '../../../assets/js/vendor/swiper.min.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper = () => {
    // home slider
    let swiper = new Swiper('.home-slider', {
      pagination: '.home-pagination',
      paginationClickable: true,
      nextButton: '.home-slider-next',
      prevButton: '.home-slider-prev'
    });
  }

}
