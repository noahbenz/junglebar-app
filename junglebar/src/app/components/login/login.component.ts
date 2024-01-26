import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.getUserByEmailAndPassword(this.email, this.password)
      .subscribe(
        (user) => {
          localStorage.setItem('loggedIn', 'true');
          
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Login failed. Please check your credentials and try again.');
        }
      );
  }
}
