import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesCommandesComponent } from './voyages-commandes.component';

describe('VoyagesCommandesComponent', () => {
  let component: VoyagesCommandesComponent;
  let fixture: ComponentFixture<VoyagesCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagesCommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
