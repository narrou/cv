import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-svg-facebook',
  templateUrl: 'icon-svg-facebook.html',
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'facebook', sanitizer.bypassSecurityTrustResourceUrl('../assets/facebook.svg'));
    iconRegistry.addSvgIcon(
        'linkedin', sanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg'));
    iconRegistry.addSvgIcon(
        'github', sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg'));
    iconRegistry.addSvgIcon(
        'twitter', sanitizer.bypassSecurityTrustResourceUrl('../assets/twitter.svg'));
  }
}