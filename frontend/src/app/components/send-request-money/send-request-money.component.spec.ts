import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestMoneyComponent } from './send-request-money.component';

describe('SendRequestMoneyComponent', () => {
  let component: SendRequestMoneyComponent;
  let fixture: ComponentFixture<SendRequestMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendRequestMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendRequestMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
