import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSocialDetails } from './contact-social-details';

describe('ContactSocialDetails', () => {
  let component: ContactSocialDetails;
  let fixture: ComponentFixture<ContactSocialDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSocialDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSocialDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
