import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-q3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-q3.component.html',
  styleUrl: './registration-q3.component.css'
})
export class RegistrationQ3Component {

  name: string = '';
  dateOfBirth: Date | null = null;
  age: number = 0
  submitted: boolean = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid && this.age >= 18) {
      console.log('Name:', this.name);
      console.log('Date of Birth:', this.dateOfBirth);
      console.log('Age:', this.age);
    }
  }

  checkAge() {
    const currentDate = new Date();
    if (this.dateOfBirth) {
      const birthDate = new Date(this.dateOfBirth);
      const calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
    //   const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    //   if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    //     this.age = calculatedAge - 1;
    //   } else {
    //     this.age = calculatedAge;
    //   }
    // } else {
    //   this.age = 0;
    this.age = calculatedAge;
    }
  }

}
