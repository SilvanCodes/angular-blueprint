import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    PublicComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PublicModule { }
