import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NIndiaComponent } from './nindia.component';

describe('NIndiaComponent', () => {
  let component: NIndiaComponent;
  let fixture: ComponentFixture<NIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NIndiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
