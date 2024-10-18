import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationQ3Component } from './components/registration-q3/registration-q3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginFormComponent,RegistrationComponent,RegistrationQ3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customPipesAndDirectives';
}
