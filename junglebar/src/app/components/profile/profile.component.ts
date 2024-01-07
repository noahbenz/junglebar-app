import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import { FavoriteDrinksComponent } from '../favorite-drinks/favorite-drinks.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NavbarPhoneComponent, FavoriteDrinksComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isFavoriteDrinksModalOpen = false;

  openFavoriteDrinksModal() {
    this.isFavoriteDrinksModalOpen = true;
  }

  closeFavoriteDrinksModal() {
    this.isFavoriteDrinksModalOpen = false;
  }
}
