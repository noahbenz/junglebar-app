import AboutUsComponent from './components/about-us/about-us.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar-laptop/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteDrinksComponent } from './components/favorite-drinks/favorite-drinks.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent, NavbarComponent, RouterModule, AboutUsComponent, ProfileComponent, FavoriteDrinksComponent, BookingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'junglebar';
}
