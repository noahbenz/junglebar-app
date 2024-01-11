import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';  // Stellen Sie sicher, dass der Pfad korrekt ist

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']  // Achten Sie darauf, dass es 'styleUrls' und nicht 'styleUrl' ist
})
export class RegisterComponent implements OnInit {
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public onSignUp() {
    this.authService.signUp(this.signupObj);
    this.signupObj = { userName: '', email: '', password: '' };
  }
}
