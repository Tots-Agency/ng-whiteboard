import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgWhiteboardComponent } from './ng-whiteboard.component';



@NgModule({
  declarations: [
    NgWhiteboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgWhiteboardComponent
  ]
})
export class NgWhiteboardModule { }
