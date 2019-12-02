import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageCommandesComponent } from './voyage-commandes.component';

describe('VoyageCommandesComponent', () => {
  let component: VoyageCommandesComponent;
  let fixture: ComponentFixture<VoyageCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageCommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
