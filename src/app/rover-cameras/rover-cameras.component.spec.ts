import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverCamerasComponent } from './rover-cameras.component';

describe('RoverCamerasComponent', () => {
  let component: RoverCamerasComponent;
  let fixture: ComponentFixture<RoverCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
