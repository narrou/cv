import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IconSvgExample } from './app.icons'



@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './app.carousel.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselBasicComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';
  entries = [
    {
      header: 'Jouve | Technicien Informatique',
      content: '<ul><li> Mise en place d&rsquo;un Bench RAD (reconnaissance automatique de document) pour contr&ocirc;le de non-r&eacute;gression.</li><li> D&eacute;veloppement d&rsquo;un outil de mod&eacute;lisation rad/lad. </li><li> Utilisation avanc&eacute;e de Bash, python ainsi que PyQt.</li></ul>',
      timeline: '01-06-2020 -- 31-07-2020'
    },
    {
      header: 'PaintFusion | Tr&eacute;sorier',
      content: '',
      timeline: ''
    },
    {
      header: 'Jouve | Technicien Informatique',
      content: '',
      timeline: ''
    },
    {
      header: 'Les Restos du C&oelig;ur | B&eacute;n&eacute;volat',
      content: '',
      timeline: ''
    },
    {
      header: 'Jouve | Charg&eacute; de production',
      content: '',
      timeline: ''
    },
  ]
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }
  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
}