import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-carousel-basic',
    templateUrl: './app.carousel.html'})
export class NgbdCarouselBasicComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}