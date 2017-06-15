import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetyComponent } from './tweety.component';

describe('TweetyComponent', () => {
  let component: TweetyComponent;
  let fixture: ComponentFixture<TweetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
