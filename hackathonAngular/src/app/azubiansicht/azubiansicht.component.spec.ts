import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzubiansichtComponent } from './azubiansicht.component';

describe('AzubiansichtComponent', () => {
  let component: AzubiansichtComponent;
  let fixture: ComponentFixture<AzubiansichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzubiansichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzubiansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
