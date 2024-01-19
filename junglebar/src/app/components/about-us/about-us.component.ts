import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export default class AboutUsComponent {
}
