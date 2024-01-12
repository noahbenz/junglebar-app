import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import AboutUsComponent from '../about-us/about-us.component';
import { FruitDividerComponent } from '../fruit-divider/fruit-divider.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, NavbarPhoneComponent, AboutUsComponent, FruitDividerComponent, BookingFormComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
