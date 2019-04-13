import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/core/services/auth.service';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createTestComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule],
    mocks: [AuthService]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
