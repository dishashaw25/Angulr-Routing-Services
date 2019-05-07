import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJSONComponent } from './show-json.component';

describe('ShowJSONComponent', () => {
  let component: ShowJSONComponent;
  let fixture: ComponentFixture<ShowJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
