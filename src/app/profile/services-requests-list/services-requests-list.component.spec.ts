import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRequestsListComponent } from './services-requests-list.component';

describe('ServicesRequestsListComponent', () => {
  let component: ServicesRequestsListComponent;
  let fixture: ComponentFixture<ServicesRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesRequestsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
