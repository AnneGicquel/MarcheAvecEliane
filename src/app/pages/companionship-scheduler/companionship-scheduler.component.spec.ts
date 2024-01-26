import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionshipSchedulerComponent } from './companionship-scheduler.component';

describe('CompanionshipSchedulerComponent', () => {
  let component: CompanionshipSchedulerComponent;
  let fixture: ComponentFixture<CompanionshipSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanionshipSchedulerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanionshipSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
