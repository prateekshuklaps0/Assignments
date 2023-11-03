import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidator } from 'src/assets/passStrength';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), PasswordValidator.strong]],
      confirmPassword: ['', [Validators.required, PasswordValidator.matchPassword]],
      phoneNumber: ['', [Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Submit the form to the server
    }
  }
}
