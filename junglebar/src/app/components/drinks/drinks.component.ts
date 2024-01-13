import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [NavbarComponent, NavbarPhoneComponent],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.scss'
})
export class DrinksComponent {

}
