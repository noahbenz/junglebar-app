import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-up',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './arrow-up.component.html',
  styleUrl: './arrow-up.component.scss'
})
export class ArrowUpComponent {
  public displayArrowUp: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.displayArrowUp = window.scrollY >= 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
