import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIndianComponent } from './sindian.component';

describe('SIndianComponent', () => {
  let component: SIndianComponent;
  let fixture: ComponentFixture<SIndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIndianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
