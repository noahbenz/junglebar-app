<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DrinksComponent } from './components/drinks/drinks.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
import { Routes } from '@angular/router';

export const routes: Routes = [];
>>>>>>> 04b1733c6ae25a08aa0d174d1f397c3f8c00896c
