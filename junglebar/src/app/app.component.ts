import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar-laptop/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteDrinksComponent } from './components/favorite-drinks/favorite-drinks.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import AboutUsComponent from './components/about-us/about-us.component';
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> 04b1733c6ae25a08aa0d174d1f397c3f8c00896c

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, LandingpageComponent, NavbarComponent, RouterModule, AboutUsComponent, ProfileComponent, FavoriteDrinksComponent, BookingFormComponent, ReactiveFormsModule],
=======
  imports: [CommonModule, RouterOutlet],
>>>>>>> 04b1733c6ae25a08aa0d174d1f397c3f8c00896c
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'junglebar';
}
