import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';


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
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  public signup() {
    console.log('sigunup with', this.email.value, this.password.value);
    this.auth.signup(this.email.value, this.password.value);
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
