import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.dataService.login(this.loginObj.email, this.loginObj.password).subscribe(
      (response) => {
        if (response && response.message === 'Login successful') {
          console.log('Login successful');
          this.router.navigate(['/']);
        } else {
          console.error('Login failed');
          alert("Login was not successfull! Please pay attention to possible Capital letters.")
        }
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
  }
}
