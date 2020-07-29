import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasicComponent } from './app.carousel'
import { AppHeaderComponent } from './app.header';
import { ProfilePictureComponent } from './app.profilePicture'
import { IconSvgExample } from './app.icons'
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { MglTimelineModule } from 'angular-mgl-timeline';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasicComponent,
    AppHeaderComponent,
    ProfilePictureComponent,
    IconSvgExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdCarouselBasicComponent, AppHeaderComponent, ProfilePictureComponent]
})
export class AppModule { }
