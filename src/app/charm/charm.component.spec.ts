import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmComponent } from './charm.component';

describe('CharmComponent', () => {
  let component: CharmComponent;
  let fixture: ComponentFixture<CharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
