import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  // { path: 'drinks', component: DrinksComponent },
  // { path: 'book', component: BookComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
