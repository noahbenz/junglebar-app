import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  ngOnInit() {
    AOS.init();
  }
}
