import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveformComponent } from './driveform.component';

describe('DriveformComponent', () => {
  let component: DriveformComponent;
  let fixture: ComponentFixture<DriveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
