import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClient],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Modify the URL to your desired endpoint
      const formSubmitUrl = 'https://formsubmit.co/36edd6f61d356d3a6af959552e803d13';

      this.http.post(formSubmitUrl, formData)
        .subscribe(
          response => {
            // Handle success response
            console.log('Form submitted successfully', response);
          },
          error => {
            // Handle error response
            console.error('Error submitting form', error);
          }
        );
    }
  }
}