import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDetails } from './primary-details';

describe('PrimaryDetails', () => {
  let component: PrimaryDetails;
  let fixture: ComponentFixture<PrimaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
