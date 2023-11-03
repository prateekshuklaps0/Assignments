import { AbstractControl } from '@angular/forms';

export function passwordStrengthValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.value;

  if (!password) {
    return null;
  }

  // Define a regex pattern for password strength
  const passwordStrengthPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordStrengthPattern.test(password)) {
    return { passwordStrength: true };
  }

  return null;
}
