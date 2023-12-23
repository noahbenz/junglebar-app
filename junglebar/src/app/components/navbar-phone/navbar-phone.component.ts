import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar-phone',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, NgIf, NgClass],
  templateUrl: './navbar-phone.component.html',
  styleUrl: './navbar-phone.component.scss'
})
export class NavbarPhoneComponent {
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
}
