import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ArrowUpComponent } from '../arrow-up/arrow-up.component';
import swal from 'sweetalert';


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
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      swal('Please login to access this feature!');
      return;
    }
  
    drink.isFavorited = !drink.isFavorited;
  
    let favoriteDrinks: any[] = JSON.parse(localStorage.getItem('favoriteDrinks') || '[]');
  
    const index = favoriteDrinks.findIndex((favDrink) => favDrink.name === drink.name);
  
    if (drink.isFavorited) {
      if (index === -1) {
        favoriteDrinks.push(drink);
      }
    } else {
      if (index !== -1) {
        favoriteDrinks.splice(index, 1);
      }
    }
  
    localStorage.setItem('favoriteDrinks', JSON.stringify(favoriteDrinks));
  }
}
