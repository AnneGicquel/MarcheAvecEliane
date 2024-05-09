import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListAndFormComponent } from './event-list-and-form.component';

describe('EventListAndFormComponent', () => {
  let component: EventListAndFormComponent;
  let fixture: ComponentFixture<EventListAndFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListAndFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventListAndFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
