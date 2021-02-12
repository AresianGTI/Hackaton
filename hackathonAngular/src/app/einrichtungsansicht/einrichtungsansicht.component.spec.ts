import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinrichtungsansichtComponent } from './einrichtungsansicht.component';

describe('EinrichtungsansichtComponent', () => {
  let component: EinrichtungsansichtComponent;
  let fixture: ComponentFixture<EinrichtungsansichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinrichtungsansichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinrichtungsansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
