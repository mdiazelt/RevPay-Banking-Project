import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTransactionListComponent } from './personal-transaction-list.component';

describe('PersonalTransactionListComponent', () => {
  let component: PersonalTransactionListComponent;
  let fixture: ComponentFixture<PersonalTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTransactionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
