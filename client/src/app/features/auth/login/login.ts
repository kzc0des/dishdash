import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  showPassword = signal(false);

  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [false]
  });

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
      // Here you would typically call an authentication service
      // For now, we'll just navigate to the home page on successful login
      this._router.navigate(['/']);
    }
  }

  loginWithGoogle() {
    console.log('Login with Google');
    // Here you would trigger the Google SSO flow
  }

  loginWithMicrosoft() {
    console.log('Login with Microsoft');
    // Here you would trigger the Microsoft SSO flow
  }
}