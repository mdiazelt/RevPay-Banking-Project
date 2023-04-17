import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWalletComponent } from './personal-wallet.component';

describe('PersonalWalletComponent', () => {
  let component: PersonalWalletComponent;
  let fixture: ComponentFixture<PersonalWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
