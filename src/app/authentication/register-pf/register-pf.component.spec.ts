import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPfComponent } from './register-pf.component';

describe('RegisterPfComponent', () => {
  let component: RegisterPfComponent;
  let fixture: ComponentFixture<RegisterPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
