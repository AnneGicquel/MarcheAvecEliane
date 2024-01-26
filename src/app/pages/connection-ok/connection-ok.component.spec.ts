import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionOKComponent } from './connection-ok.component';

describe('ConnectionOKComponent', () => {
  let component: ConnectionOKComponent;
  let fixture: ComponentFixture<ConnectionOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionOKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectionOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
