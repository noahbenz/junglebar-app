import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import AboutUsComponent from '../about-us/about-us.component';
import { partnerScroll } from '../partner-slide/partner-slide.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { ArrowUpComponent } from '../arrow-up/arrow-up.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, NavbarPhoneComponent, AboutUsComponent, partnerScroll, BookingFormComponent, ArrowUpComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
