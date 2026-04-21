# Angular InputField Component

A fully-featured input field component for Angular applications, matching the Lean IDS design system.

## Features

- ✅ **Form Control Integration** - Implements `ControlValueAccessor` for Angular forms
- ✅ **Validation Support** - Built-in error handling and display
- ✅ **Accessibility** - ARIA attributes and keyboard navigation
- ✅ **Design Tokens** - Uses Lean IDS design tokens
- ✅ **Multiple Input Types** - text, email, password, number, tel, url
- ✅ **Importance Indicators** - Required, recommended, optional labels
- ✅ **Help Text** - Contextual help messages
- ✅ **Responsive** - Mobile-friendly design

---

## Installation

```bash
npm install @ajaysoni7832/lean-ids-tokens
```

---

## Usage

### Basic Usage

```typescript
import { Component } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFieldComponent],
  template: `
    <lean-input-field
      label="Email Address"
      placeholder="Enter your email"
      type="email"
    ></lean-input-field>
  `
})
export class AppComponent {}
```

### With Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <lean-input-field
        label="Email"
        formControlName="email"
        type="email"
        [required]="true"
        [error]="getErrorMessage('email')"
        helpText="We'll never share your email"
      ></lean-input-field>
      
      <lean-input-field
        label="Password"
        formControlName="password"
        type="password"
        [required]="true"
        [error]="getErrorMessage('password')"
      ></lean-input-field>
      
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  `
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  getErrorMessage(field: string): string {
    const control = this.form.get(field);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters';
    }
    return '';
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

### With Template-Driven Forms

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, InputFieldComponent],
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <lean-input-field
        label="Username"
        [(ngModel)]="username"
        name="username"
        [required]="true"
        placeholder="Enter username"
      ></lean-input-field>
      
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  `
})
export class TemplateFormComponent {
  username: string = '';

  onSubmit() {
    console.log('Username:', this.username);
  }
}
```

---

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the input |
| `placeholder` | `string` | `''` | Placeholder text |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `error` | `string` | `''` | Error message to display |
| `helpText` | `string` | `''` | Help text to display below input |
| `importance` | `'required' \| 'optional' \| 'recommended'` | `'optional'` | Importance indicator |
| `maxLength` | `number` | `undefined` | Maximum character length |
| `minLength` | `number` | `undefined` | Minimum character length |
| `pattern` | `string` | `undefined` | Validation pattern (regex) |
| `autocomplete` | `string` | `undefined` | Autocomplete attribute |
| `id` | `string` | `auto-generated` | Input ID |
| `name` | `string` | `auto-generated` | Input name |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emitted when value changes |
| `blur` | `EventEmitter<FocusEvent>` | Emitted when input loses focus |
| `focus` | `EventEmitter<FocusEvent>` | Emitted when input gains focus |

---

## Examples

### With Importance Indicators

```html
<lean-input-field
  label="Full Name"
  importance="required"
  [required]="true"
></lean-input-field>

<lean-input-field
  label="Phone Number"
  importance="recommended"
  type="tel"
></lean-input-field>

<lean-input-field
  label="Middle Name"
  importance="optional"
></lean-input-field>
```

### With Error Handling

```html
<lean-input-field
  label="Email"
  type="email"
  [error]="emailError"
  (valueChange)="validateEmail($event)"
></lean-input-field>
```

```typescript
emailError: string = '';

validateEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    this.emailError = 'Email is required';
  } else if (!emailRegex.test(value)) {
    this.emailError = 'Please enter a valid email';
  } else {
    this.emailError = '';
  }
}
```

### With Help Text

```html
<lean-input-field
  label="Password"
  type="password"
  helpText="Must be at least 8 characters with 1 number and 1 special character"
  [minLength]="8"
></lean-input-field>
```

### With Max Length

```html
<lean-input-field
  label="Bio"
  placeholder="Tell us about yourself"
  [maxLength]="200"
  helpText="Maximum 200 characters"
></lean-input-field>
```

---

## Styling

The component uses CSS variables from the Lean IDS design tokens. To customize, override these variables in your global styles:

```scss
// src/styles.scss
:root {
  --primary-500: #5009B5;
  --neutral-1000: #000000;
  --neutral-600: #4B5563;
  --neutral-300: #D1D5DB;
  --error-500: #DC2626;
  --error-700: #B91C1C;
  --font-primary: 'Inter', sans-serif;
}
```

---

## Accessibility

The component includes:
- Proper label association
- ARIA attributes (`aria-invalid`, `aria-describedby`)
- Keyboard navigation support
- Focus indicators
- Error announcements for screen readers

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Angular Version Compatibility

- Angular 15+
- Angular 16+
- Angular 17+
- Angular 18+
- Angular 19+

---

## License

UNLICENSED (Internal use only)
