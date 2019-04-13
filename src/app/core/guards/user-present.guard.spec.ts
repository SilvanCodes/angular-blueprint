import { UserPresentGuard } from './user-present.guard';
import { createService, mockProvider, SpectatorService } from '@netbasal/spectator';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UserPresentGuard', () => {
  let spectator: SpectatorService<UserPresentGuard>;

  const serviceSetup = {
    service: UserPresentGuard,
    mocks: [Router],
    providers: [AuthService]
  };

  const noUserAuth = {
    providers: [
      mockProvider(
        AuthService, {
          user$: of(null)
        }
      )
    ]
  };

  const hasUserAuth = {
    providers: [
      mockProvider(
        AuthService, {
          user$: of({ emailVerified: true })
        }
      )
    ]
  };

  describe('without user', () => {
    spectator = createService({ ...serviceSetup, ...noUserAuth });

    it('should have no user', () => {
      const router = spectator.get<Router>(Router);
      router.navigate.and.returnValue({});

      spectator.service.canLoad().subscribe(result => expect(result).toBeFalsy());
    });
  });

  describe('with user', () => {
    spectator = createService({ ...serviceSetup, ...hasUserAuth });

    it('should have some user', () => {
      const router = spectator.get<Router>(Router);
      router.navigate.and.returnValue({});

      spectator.service.canLoad().subscribe(result => expect(result).toBeTruthy());
    });
  });
});
