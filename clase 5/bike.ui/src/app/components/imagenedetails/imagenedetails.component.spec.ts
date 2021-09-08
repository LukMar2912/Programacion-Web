import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenedetailsComponent } from './imagenedetails.component';

describe('ImagenedetailsComponent', () => {
  let component: ImagenedetailsComponent;
  let fixture: ComponentFixture<ImagenedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
