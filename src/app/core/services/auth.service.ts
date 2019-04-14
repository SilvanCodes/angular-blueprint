import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ErrorService, Error } from './error.service';
import { shareReplay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  public user$: Observable<firebase.User>;
  private userInPlace: Subscription;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private error: ErrorService,
    private router: Router
  ) {
    this.user$ = firebaseAuth.user.pipe(
      shareReplay(1)
    );
    // this subscription holds the user in correct place all the time
    // TODO: maybe dedup navigate to member on user-refresh
    this.userInPlace = this.user$.pipe(
      tap(user => this.router.navigate([!!user ? '/member' : '/login']))
    ).subscribe();
  }

  public signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then() // result gets communicated over user$ observable
      .catch(err => this.error.pushError(
          new Error(
            AuthService.name,
            'Could not sign you up.',
            err
          )
        )
      );
  }

  public login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then() // result gets communicated over user$ observable
      .catch(err => this.error.pushError(
          new Error(
            AuthService.name,
            'Could not log you in.',
            err
          )
        )
      );
  }

  public logout() {
    this.firebaseAuth
      .auth
      .signOut()
      .then() // result gets communicated over user$ observable
      .catch(err => this.error.pushError(
          new Error(
            AuthService.name,
            'Could not log you out.',
            err
          )
        )
      );
  }

  ngOnDestroy() {
    this.userInPlace.unsubscribe();
  }
}
