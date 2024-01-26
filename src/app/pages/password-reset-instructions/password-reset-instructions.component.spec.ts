import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetInstructionsComponent } from './password-reset-instructions.component';

describe('PasswordResetInstructionsComponent', () => {
  let component: PasswordResetInstructionsComponent;
  let fixture: ComponentFixture<PasswordResetInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordResetInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordResetInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
