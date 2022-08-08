import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloItemComponent } from './polo-item.component';

describe('PoloItemComponent', () => {
  let component: PoloItemComponent;
  let fixture: ComponentFixture<PoloItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
