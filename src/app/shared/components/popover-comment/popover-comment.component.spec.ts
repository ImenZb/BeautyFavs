import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverCommentComponent } from './popover-comment.component';

describe('PopoverCommentComponent', () => {
  let component: PopoverCommentComponent;
  let fixture: ComponentFixture<PopoverCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
