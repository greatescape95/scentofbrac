
declare var Swiper: any;

import { Component, OnInit } from '@angular/core';
import '../../../assets/js/vendor/swiper.min.js';
import { Item } from './../../models/item';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: Item[];

    constructor() { }

    ngOnInit() {
        this.initSwiper();
        this.initModel();
    }

    initModel = () => {
        this.products = [
            {
                name: 'Olive Oil Lavander Soap',
                imageUrl: 'assets/img/soap4.jpg',
                secImageUrl: 'assets/img/product4.png'
            },
            {
                name: 'Olive Oil Lemon Soap',
                imageUrl: 'assets/img/soap3.jpg',
                secImageUrl: 'assets/img/product4.png'
            },
            {
                name: 'Olive Oil Rosemary Soap',
                imageUrl: 'assets/img/soap1.jpg',
                secImageUrl: 'assets/img/product4.png'
            },
            {
                name: 'Olive Oil Orange Soap',
                imageUrl: 'assets/img/soap2.jpg',
                secImageUrl: 'assets/img/product4.png'
            }
        ];
    }

    initSwiper = () => {
        // product list
        const swiper = new Swiper('.product-list-slider', {
            slidesPerView: 3,
            pagination: '.product-list-pagination',
            paginationClickable: true,
            nextButton: '.product-list-slider-next',
            prevButton: '.product-list-slider-prev',
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
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                420: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }
}
