import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesDetailsComponent } from './voyages-details.component';

describe('VoyagesDetailsComponent', () => {
  let component: VoyagesDetailsComponent;
  let fixture: ComponentFixture<VoyagesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
