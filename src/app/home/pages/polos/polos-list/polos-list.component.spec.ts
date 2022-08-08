import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolosListComponent } from './polos-list.component';

describe('PolosListComponent', () => {
  let component: PolosListComponent;
  let fixture: ComponentFixture<PolosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
