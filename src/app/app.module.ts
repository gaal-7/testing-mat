import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { StdevComponent } from './stdev/stdev.component';
import { SimpsonComponent } from './simpson/simpson.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StdevComponent,
    SimpsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




