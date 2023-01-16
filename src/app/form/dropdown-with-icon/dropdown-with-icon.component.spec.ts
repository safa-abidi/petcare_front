import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWithIconComponent } from './dropdown-with-icon.component';

describe('DropdownWithIconComponent', () => {
  let component: DropdownWithIconComponent;
  let fixture: ComponentFixture<DropdownWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
