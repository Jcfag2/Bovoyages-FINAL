import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesCommandesDetailComponent } from './voyages-commandes-detail.component';

describe('VoyagesCommandesDetailComponent', () => {
  let component: VoyagesCommandesDetailComponent;
  let fixture: ComponentFixture<VoyagesCommandesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagesCommandesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesCommandesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
