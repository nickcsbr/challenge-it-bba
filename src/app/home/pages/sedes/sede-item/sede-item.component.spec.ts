import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeItemComponent } from './sede-item.component';

describe('SedeItemComponent', () => {
  let component: SedeItemComponent;
  let fixture: ComponentFixture<SedeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
