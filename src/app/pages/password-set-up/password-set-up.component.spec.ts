import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSetUpComponent } from './password-set-up.component';

describe('PasswordSetUpComponent', () => {
  let component: PasswordSetUpComponent;
  let fixture: ComponentFixture<PasswordSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordSetUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
