import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { createService, mockProvider } from '@netbasal/spectator';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


describe('AuthService', () => {
  const userValues = new Subject();

  const spectator = createService<AuthService>({
    service: AuthService,
    mocks: [Router],
    providers: [
      mockProvider(
        AngularFireAuth, {
          user: userValues
        }
      )
    ]
  });

  let auth: AuthService;

  beforeEach(() => auth = spectator.get<AuthService>(AuthService));

  afterEach(() => auth.ngOnDestroy());

  it('should be created', () => {
    expect(auth).toBeTruthy();
  });

  it('should navigate on user change', () => {
    const router = spectator.get<Router>(Router);

    // emulate user change
    userValues.next(null);
    userValues.next({});

    expect(router.navigate.calls.count()).toEqual(2);
    expect(router.navigate.calls.argsFor(0)).toEqual([ ['/login'] ]);
    expect(router.navigate.calls.argsFor(1)).toEqual([ ['/member'] ]);
  });
});
