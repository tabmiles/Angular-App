import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsItemsComponent } from './pets-items.component';

describe('PetsItemsComponent', () => {
  let component: PetsItemsComponent;
  let fixture: ComponentFixture<PetsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
