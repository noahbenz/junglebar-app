import { Component } from '@angular/core';
import { ImpressumComponent } from '../impressum/impressum.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImpressumComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isImpressumModalOpen = false;

  openImpressumModal() {
    this.isImpressumModalOpen = true;
  }

  closeImpressumModal() {
    this.isImpressumModalOpen = false;
  }
}
