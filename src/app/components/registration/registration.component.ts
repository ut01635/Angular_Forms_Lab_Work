import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  fullName: string = '';
  gender: string = '';
  country: string = '';
  submitted: boolean = false;


  countries = ['USA', 'UK', 'Canada', 'India'];

  onSubmit() {
    this.submitted = true;
    if (this.fullName && this.gender) {
      console.log('Selected Gender:', this.gender);
      console.log('Selected Country:', this.country);
    }
  }

}
