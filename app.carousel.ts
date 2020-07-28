import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IconSvgExample } from './app.icons'



@Component({
    selector: 'ngbd-carousel-basic',
    templateUrl: './app.carousel.html',
    providers: [NgbCarouselConfig] })
export class NgbdCarouselBasicComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }
}