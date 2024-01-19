import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar-laptop/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteDrinksComponent } from './components/favorite-drinks/favorite-drinks.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingpageComponent,
    NavbarComponent,
    ProfileComponent,
    FavoriteDrinksComponent,
    BookingFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    LandingpageComponent,
    NavbarComponent,
    ProfileComponent,
    FavoriteDrinksComponent,
    BookingFormComponent,
  ],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppComponent,
  ],
})
export class AppComponent {
  title = 'junglebar';
}
