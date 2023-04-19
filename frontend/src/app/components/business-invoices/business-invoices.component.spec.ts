import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInvoicesComponent } from './business-invoices.component';

describe('BusinessInvoicesComponent', () => {
  let component: BusinessInvoicesComponent;
  let fixture: ComponentFixture<BusinessInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
