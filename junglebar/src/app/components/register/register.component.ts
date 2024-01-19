import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']  
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
    if (this.signupObj.userName === '' || this.signupObj.email === '' || this.signupObj.password === '') {
      alert('Please enter all details');
    } else {
      this.authService.signUp(this.signupObj);
      this.signupObj = { userName: '', email: '', password: '' };
    }
    
  }
}
