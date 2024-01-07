import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-drinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-drinks.component.html',
  styleUrls: ['./favorite-drinks.component.scss']
})
export class FavoriteDrinksComponent {
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    console.log("drink");
    this.closeModalEvent.emit();
  }
}
