import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReimbursementFormComponent } from './create-reimbursement-form.component';

describe('CreateReimbursementFormComponent', () => {
  let component: CreateReimbursementFormComponent;
  let fixture: ComponentFixture<CreateReimbursementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReimbursementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReimbursementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
