import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualAidComponent } from './mutual-aid.component';

describe('MutualAidComponent', () => {
  let component: MutualAidComponent;
  let fixture: ComponentFixture<MutualAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualAidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutualAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
