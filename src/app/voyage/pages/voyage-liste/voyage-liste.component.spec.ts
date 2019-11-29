import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageListeComponent } from './voyage-liste.component';

describe('VoyageListeComponent', () => {
  let component: VoyageListeComponent;
  let fixture: ComponentFixture<VoyageListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
