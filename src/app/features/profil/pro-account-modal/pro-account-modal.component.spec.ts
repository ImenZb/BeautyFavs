import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAccountModalComponent } from './pro-account-modal.component';

describe('ProAccountModalComponent', () => {
  let component: ProAccountModalComponent;
  let fixture: ComponentFixture<ProAccountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProAccountModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
