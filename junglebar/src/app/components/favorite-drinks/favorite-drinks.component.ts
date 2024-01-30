import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-drinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-drinks.component.html',
  styleUrls: ['./favorite-drinks.component.scss']
})
export class FavoriteDrinksComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();
  favoriteDrinks: any[] = [];

  ngOnInit(): void {
    // Lese die gespeicherten Favoriten-Drinks aus dem Local Storage
    const storedFavoriteDrinksJSON = localStorage.getItem('favoriteDrinks');
    this.favoriteDrinks = JSON.parse(storedFavoriteDrinksJSON || '[]');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  toggleFavorite(drink: any) {
    drink.isFavorited = !drink.isFavorited;

    // Hole zuerst die gespeicherten Favoriten aus dem Local Storage
    let favoriteDrinks: any[] = JSON.parse(localStorage.getItem('favoriteDrinks') || '[]');

    // Überprüfe, ob der Drink bereits in den Favoriten ist
    const index = favoriteDrinks.findIndex((favDrink) => favDrink.name === drink.name);

    if (drink.isFavorited) {
      // Wenn der Drink nicht in den Favoriten ist, füge ihn hinzu
      if (index === -1) {
        favoriteDrinks.push(drink);
      }
    } else {
      // Wenn der Drink in den Favoriten ist, entferne ihn
      if (index !== -1) {
        favoriteDrinks.splice(index, 1);
      }
    }

    localStorage.setItem('favoriteDrinks', JSON.stringify(favoriteDrinks));
  }
}
