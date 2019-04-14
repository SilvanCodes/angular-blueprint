import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { createService, mockProvider } from '@netbasal/spectator';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthService', () => {
  const spectator = createService<AuthService>({
    service: AuthService,
    mocks: [Router],
    providers: [
      mockProvider(
        AngularFireAuth, {
          user: of(null)
        }
      )
    ]
  });

  it('should be created', () => {
    const service: AuthService = spectator.get<AuthService>(AuthService);
    expect(service).toBeTruthy();
  });
});
