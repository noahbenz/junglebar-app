import { Component, EventEmitter, Output } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    console.log("drink");
    this.closeModalEvent.emit();
  }
}
