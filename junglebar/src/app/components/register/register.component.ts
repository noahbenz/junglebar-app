import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import swal from 'sweetalert';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignUp(): void {
    if (this.registerForm.invalid) {
      swal("Something went wrong! Please try again.")
      return;
    }

    this.userService.registerUser(this.registerForm.value).subscribe(
      () => {
        swal("Registration successful!");
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Fehler bei der Registrierung:', error);
        swal("Something went wrong! Please try again.");
      }
    );
  }
}
