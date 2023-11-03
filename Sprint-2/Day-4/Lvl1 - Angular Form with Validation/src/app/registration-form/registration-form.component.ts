import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Handle form submission here (e.g., send data to a server)
    console.log(this.user);
  }
}
