import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldeansichtComponent } from './anmeldeansicht.component';

describe('AnmeldeansichtComponent', () => {
  let component: AnmeldeansichtComponent;
  let fixture: ComponentFixture<AnmeldeansichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmeldeansichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldeansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
