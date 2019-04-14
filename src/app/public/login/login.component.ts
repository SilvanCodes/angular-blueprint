import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  public login(): void {
    const { email, password }: { [key: string]: string } = this.loginForm.value;
    this.auth.login(email, password);
  }

  public logout(): void {
    this.auth.logout();
  }

}
