import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AuthService} from './core/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'blueprint';
  public user$: Observable<firebase.User | null>;
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private auth: AuthService) {
    this.user$ = auth.user;
  }

  public login(): void {
    const { email, password }: { [key: string]: string } = this.loginForm.value;
    this.auth.login(email, password);
  }

  public logout(): void {
    this.auth.logout();
  }
}
