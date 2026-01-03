import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Custom validator to check if passwords match
export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    return { passwordsNotMatching: true };
  }

  return null;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUp {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  showPassword = signal(false);
  showConfirmPassword = signal(false);

  signUpForm = this._fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  }, { validators: passwordsMatchValidator });

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Sign up form submitted:', this.signUpForm.value);
      // Here you would typically call a registration service
      // For now, we'll just navigate to the home page on successful registration
      this._router.navigate(['/']);
    }
  }

  signUpWithGoogle() {
    console.log('Sign up with Google');
    // Here you would trigger the Google SSO flow
  }

  signUpWithMicrosoft() {
    console.log('Sign up with Microsoft');
    // Here you would trigger the Microsoft SSO flow
  }
}