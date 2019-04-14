import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PublicModule } from './public/public.module';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { CoreModule } from './core/core.module';
import { UserPresentGuard } from './core/guards/user-present.guard';


const routes: Routes = [
  { path: '', component: PublicComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'member',  canLoad: [UserPresentGuard], loadChildren: './member/member.module#MemberModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    CoreModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
