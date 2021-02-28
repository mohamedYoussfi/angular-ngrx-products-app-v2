import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouctItemComponent } from './prdouct-item.component';

describe('PrdouctItemComponent', () => {
  let component: PrdouctItemComponent;
  let fixture: ComponentFixture<PrdouctItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdouctItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdouctItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
