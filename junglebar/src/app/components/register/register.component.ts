import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent {
  signupObj: User = {
    id: 0,
    email: '',
    name: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  onSignUp(): void {
    this.userService.registerUser(this.signupObj).subscribe(
      () => {
        alert('Registrierung erfolgreich!');
      },
      (error) => {
        console.error('Fehler bei der Registrierung:', error);
        alert("something is wrong!!!!!")
      }
    );
  }
}
