import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule,Rea77ctiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup ;
  successMessage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Simulate a form submission (e.g., send to a server)
      this.successMessage = true;

      // Reset the form after 3 seconds
      setTimeout(() => {
        this.successMessage = false;
        this.contactForm.reset();
      }, 3000);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.successMessage = false;
  }
}
