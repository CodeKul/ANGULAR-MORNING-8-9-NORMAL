import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiContentComponent } from './pi-content.component';

describe('PiContentComponent', () => {
  let component: PiContentComponent;
  let fixture: ComponentFixture<PiContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
