import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesListComponent } from './sedes-list.component';

describe('SedesListComponent', () => {
  let component: SedesListComponent;
  let fixture: ComponentFixture<SedesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
