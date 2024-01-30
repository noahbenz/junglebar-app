import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ArrowUpComponent } from '../arrow-up/arrow-up.component';


@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [NavbarComponent, NavbarPhoneComponent, HttpClientModule, CommonModule, ArrowUpComponent, FooterComponent],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.scss'
})
export class DrinksComponent implements OnInit {
  drinks: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRandomDrinks(14);
  }


  getRandomDrinks(count: number) {
    for (let i = 0; i < count; i++) {
      this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .subscribe((data: any) => {
          const drink = data.drinks[0];
          this.drinks.push({
            name: drink.strDrink,
            ingredients: this.extractIngredients(drink),
            imageUrl: drink.strDrinkThumb,
            isFavorited: false 
          });
        });
    }
  }

  private extractIngredients(drink: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink['strIngredient' + i];
      const measure = drink['strMeasure' + i];
      if (ingredient && measure) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
    
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
