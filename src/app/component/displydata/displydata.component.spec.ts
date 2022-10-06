import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplydataComponent } from './displydata.component';

describe('DisplydataComponent', () => {
  let component: DisplydataComponent;
  let fixture: ComponentFixture<DisplydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
