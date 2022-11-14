import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputWithIconComponent } from './text-input-with-icon.component';

describe('TextInputWithIconComponent', () => {
  let component: TextInputWithIconComponent;
  let fixture: ComponentFixture<TextInputWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
