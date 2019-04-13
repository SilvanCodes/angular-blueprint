import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { createService } from '@netbasal/spectator';

describe('AuthService', () => {
  const spectator = createService<AuthService>({
    service: AuthService,
    mocks: [AngularFireAuth]
  });

  it('should be created', () => {
    const service: AuthService = spectator.get<AuthService>(AuthService);
    expect(service).toBeTruthy();
  });
});
