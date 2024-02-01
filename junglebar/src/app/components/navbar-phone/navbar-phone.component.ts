import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import AOS from 'aos';
import swal from 'sweetalert';


@Component({
  selector: 'app-navbar-phone',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, NgIf, NgClass],
  templateUrl: './navbar-phone.component.html',
  styleUrl: './navbar-phone.component.scss'
})
export class NavbarPhoneComponent {
  ngOnInit() {
    AOS.init();
  }
  isMenuOpen: boolean = false;
  iconSrc: string = 'assets/svg/burger-icon.svg'

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.iconSrc = 'assets/svg/burger-icon-opened.svg';
    } else {
      this.iconSrc = 'assets/svg/burger-icon.svg';
    }
  }

  isLoggedIn: boolean = localStorage.getItem('loggedIn') === 'true';

  constructor(private router: Router) { }

  logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  showLoginAlert() {
    swal('Please log in to access your profile.');
  }
}
