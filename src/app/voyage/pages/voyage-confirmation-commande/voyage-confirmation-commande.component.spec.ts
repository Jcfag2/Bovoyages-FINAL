import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageConfirmationCommandeComponent } from './voyage-confirmation-commande.component';

describe('VoyageConfirmationCommandeComponent', () => {
  let component: VoyageConfirmationCommandeComponent;
  let fixture: ComponentFixture<VoyageConfirmationCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageConfirmationCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageConfirmationCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
