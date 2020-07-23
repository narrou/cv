import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasicComponent } from './app.carousel'
import { AppHeaderComponent } from './app.header';
import {ProfilePictureComponent} from './app.profilePicture'

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasicComponent,
    AppHeaderComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdCarouselBasicComponent, AppHeaderComponent, ProfilePictureComponent]
})
export class AppModule { }
