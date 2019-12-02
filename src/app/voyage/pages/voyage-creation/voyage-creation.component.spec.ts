import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageCreationComponent } from './voyage-creation.component';

describe('VoyageCreationComponent', () => {
  let component: VoyageCreationComponent;
  let fixture: ComponentFixture<VoyageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
