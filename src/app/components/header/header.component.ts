import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.handleNavHideOnSmallScreens();
  }

  private handleNavHideOnSmallScreens = () => {
    jQuery('ul li').click(function () {
      console.log($(window).width());
      console.log($(document).width());
      if ($(window).width() < 480) {
        jQuery('.navbar-collapse').removeClass('in');
      }

    });
  }

}
