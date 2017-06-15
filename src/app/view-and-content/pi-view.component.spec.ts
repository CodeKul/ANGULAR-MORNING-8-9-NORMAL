import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiViewComponent } from './pi-view.component';

describe('PiViewComponent', () => {
  let component: PiViewComponent;
  let fixture: ComponentFixture<PiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
