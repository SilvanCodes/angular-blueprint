import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.user;
  }

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
