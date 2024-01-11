import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  public onLogin() {
    const isUserExist = this.authService.login(this.loginObj.email, this.loginObj.password);
    if(isUserExist) {
      alert('User Login succeeded');
    } else {
      alert('Wrong Credentials');
    }
  }
}
