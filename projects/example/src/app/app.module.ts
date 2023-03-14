import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWhiteboardModule } from 'projects/tots/ng-whiteboard/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
