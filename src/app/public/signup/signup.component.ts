import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)] ],
      passwordConfirm: ['']
    }, { validators: this.matching })
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  public signup() {
    console.log('sigunup with', this.email.value, this.password.value);
    this.auth.signup(this.email.value, this.password.value)
    .then(value => this.router.navigate(['/member']))
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  private matching(group: FormGroup) {
    const valid = group.get('password').value === group.get('passwordConfirm').value;

    if (valid) return null;

    return {
      mismatch: true
    };
  }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('passwords').get('password'); }

  get passwords() { return this.signupForm.get('passwords'); }

  get passwordConfirm() { return this.signupForm.get('passwords').get('passwordConfirm'); }
}
