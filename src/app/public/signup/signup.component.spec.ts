import { SignupComponent } from './signup.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  let spectator: Spectator<SignupComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  const createComponent = createTestComponentFactory({
    component: SignupComponent,
    imports: [ReactiveFormsModule],
    mocks: [AuthService, Router],
    providers: [
      {
        provide: FormBuilder, useValue: formBuilder
      }
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
