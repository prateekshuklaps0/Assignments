import { FormControl, AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static matchPassword(control: FormControl): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { matchPassword: true };
    }

    return null;
  }

  static strong(control: FormControl): { [key: string]: any } | null {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSpecial = /[$@$! %*? &]/.test(control.value);

    if (!hasNumber || !hasUpper || !hasLower || !hasSpecial) {
      return { passwordStrength: true };
    }

    return null;
  }
}
