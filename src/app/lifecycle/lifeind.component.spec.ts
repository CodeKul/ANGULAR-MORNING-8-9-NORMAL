import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeindComponent } from './lifeind.component';

describe('LifeindComponent', () => {
  let component: LifeindComponent;
  let fixture: ComponentFixture<LifeindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
