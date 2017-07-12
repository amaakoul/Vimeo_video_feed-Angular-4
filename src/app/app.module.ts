import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { VideoService } from './video/video.service';
import { VideoComponent } from './video/video.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,       // <=== HERE! 
    // AppRoutingModule,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
