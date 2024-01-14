import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar-laptop/navbar.component';
import { NavbarPhoneComponent } from '../navbar-phone/navbar-phone.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [NavbarComponent, NavbarPhoneComponent, HttpClientModule, CommonModule],
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
            imageUrl: drink.strDrinkThumb
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
}