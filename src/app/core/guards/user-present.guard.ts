import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserPresentGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.auth.user$.pipe(
      // tap(console.log),
      map(user => user && user.emailVerified),
      tap(okay => !okay ? this.router.navigate(['/login']) : null )
      // redirect to login and pop/up with -verify email please-
    );
  }
}
