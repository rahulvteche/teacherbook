import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajajHeaderComponent } from './bajaj-header.component';

describe('BajajHeaderComponent', () => {
  let component: BajajHeaderComponent;
  let fixture: ComponentFixture<BajajHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajajHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajajHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
