import AboutUsComponent from './components/about-us/about-us.component';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar-laptop/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteDrinksComponent } from './components/favorite-drinks/favorite-drinks.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent, NavbarComponent, RouterModule, AboutUsComponent, ProfileComponent, FavoriteDrinksComponent, BookingFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'junglebar';
  @ViewChild('scrollUpArrow') scrollUpArrow: ElementRef | undefined;
  isArrowVisible: boolean = false;

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      console.log('Scroll position:', window.scrollY);
      if (window.scrollY > 100) {
        this.isArrowVisible = true;
      } else {
        this.isArrowVisible = false;
      }
    });
  }
  
}
