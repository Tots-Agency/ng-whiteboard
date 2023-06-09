import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWhiteboardComponent } from './ng-whiteboard.component';

describe('NgWhiteboardComponent', () => {
  let component: NgWhiteboardComponent;
  let fixture: ComponentFixture<NgWhiteboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgWhiteboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgWhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
