import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as s}from"./index-BwSaPJK2.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-65YTGFeW.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/InputField/Angular Implementation"}),`
`,n.jsx(e.h1,{id:"inputfield---angular-implementation",children:"InputField - Angular Implementation"}),`
`,n.jsx(e.p,{children:"Complete Angular implementation of the InputField component matching the React design system."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-installation",children:"📦 Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @ajaysoni7832/lean-ids-tokens
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-component-files",children:"📁 Component Files"}),`
`,n.jsx(e.p,{children:"The Angular InputField component is available in the repository:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Location:"})," ",n.jsx(e.code,{children:"packages/angular-components/src/input-field/"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Files:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"input-field.component.ts"})," - Component logic"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"input-field.component.html"})," - Template"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"input-field.component.scss"})," - Styles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"README.md"})," - Full documentation"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-start",children:"🚀 Quick Start"}),`
`,n.jsx(e.h3,{id:"1-copy-the-component",children:"1. Copy the Component"}),`
`,n.jsxs(e.p,{children:["Copy the ",n.jsx(e.code,{children:"input-field"})," folder to your Angular project:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`your-angular-app/src/app/components/input-field/
├── input-field.component.ts
├── input-field.component.html
├── input-field.component.scss
└── index.ts
`})}),`
`,n.jsx(e.h3,{id:"2-setup-css-variables",children:"2. Setup CSS Variables"}),`
`,n.jsxs(e.p,{children:["Add to your ",n.jsx(e.code,{children:"src/styles.scss"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`:root {
  --primary-500: #5009B5;
  --primary-600: #400791;
  --neutral-1000: #000000;
  --neutral-600: #4B5563;
  --neutral-500: #6B7280;
  --neutral-400: #9CA3AF;
  --neutral-300: #D1D5DB;
  --neutral-100: #F3F4F6;
  --error-500: #DC2626;
  --error-700: #B91C1C;
  --error-100: #FEE2E2;
  --warning-700: #B45309;
  --warning-100: #FEF3C7;
  --font-primary: 'Inter', sans-serif;
}
`})}),`
`,n.jsx(e.h3,{id:"3-use-in-your-app",children:"3. Use in Your App"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Component } from '@angular/core';
import { InputFieldComponent } from './components/input-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFieldComponent],
  template: \`
    <lean-input-field
      label="Email Address"
      placeholder="Enter your email"
      type="email"
      [required]="true"
      helpText="We'll never share your email"
    ></lean-input-field>
  \`
})
export class AppComponent {}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-api-reference",children:"📊 API Reference"}),`
`,n.jsx(e.h3,{id:"inputs",children:"Inputs"}),`
`,n.jsxs(e.p,{children:[`| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `,n.jsx(e.code,{children:"label"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"''"}),` | Label text for the input |
| `,n.jsx(e.code,{children:"placeholder"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"''"}),` | Placeholder text |
| `,n.jsx(e.code,{children:"type"})," | ",n.jsx(e.code,{children:"'text' \\| 'email' \\| 'password' \\| 'number' \\| 'tel' \\| 'url'"})," | ",n.jsx(e.code,{children:"'text'"}),` | Input type |
| `,n.jsx(e.code,{children:"disabled"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"false"}),` | Whether the input is disabled |
| `,n.jsx(e.code,{children:"required"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"false"}),` | Whether the input is required |
| `,n.jsx(e.code,{children:"error"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"''"}),` | Error message to display |
| `,n.jsx(e.code,{children:"helpText"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"''"}),` | Help text below input |
| `,n.jsx(e.code,{children:"importance"})," | ",n.jsx(e.code,{children:"'required' \\| 'optional' \\| 'recommended'"})," | ",n.jsx(e.code,{children:"'optional'"}),` | Importance indicator |
| `,n.jsx(e.code,{children:"maxLength"})," | ",n.jsx(e.code,{children:"number"})," | ",n.jsx(e.code,{children:"undefined"}),` | Maximum character length |
| `,n.jsx(e.code,{children:"minLength"})," | ",n.jsx(e.code,{children:"number"})," | ",n.jsx(e.code,{children:"undefined"}),` | Minimum character length |
| `,n.jsx(e.code,{children:"pattern"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"undefined"}),` | Validation pattern (regex) |
| `,n.jsx(e.code,{children:"autocomplete"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"undefined"}),` | Autocomplete attribute |
| `,n.jsx(e.code,{children:"id"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"auto-generated"}),` | Input ID |
| `,n.jsx(e.code,{children:"name"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"auto-generated"})," | Input name |"]}),`
`,n.jsx(e.h3,{id:"outputs",children:"Outputs"}),`
`,n.jsxs(e.p,{children:[`| Event | Type | Description |
|-------|------|-------------|
| `,n.jsx(e.code,{children:"valueChange"})," | ",n.jsx(e.code,{children:"EventEmitter<string>"}),` | Emitted when value changes |
| `,n.jsx(e.code,{children:"blur"})," | ",n.jsx(e.code,{children:"EventEmitter<FocusEvent>"}),` | Emitted when input loses focus |
| `,n.jsx(e.code,{children:"focus"})," | ",n.jsx(e.code,{children:"EventEmitter<FocusEvent>"})," | Emitted when input gains focus |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-usage-examples",children:"💡 Usage Examples"}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`@Component({
  template: \`
    <lean-input-field
      label="Full Name"
      placeholder="Enter your name"
    ></lean-input-field>
  \`
})
`})}),`
`,n.jsx(e.h3,{id:"with-reactive-forms",children:"With Reactive Forms"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent],
  template: \`
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
  \`
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
`})}),`
`,n.jsx(e.h3,{id:"with-template-driven-forms",children:"With Template-Driven Forms"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field';

@Component({
  standalone: true,
  imports: [FormsModule, InputFieldComponent],
  template: \`
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
  \`
})
export class TemplateFormComponent {
  username: string = '';

  onSubmit() {
    console.log('Username:', this.username);
  }
}
`})}),`
`,n.jsx(e.h3,{id:"with-importance-indicators",children:"With Importance Indicators"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Required field -->
<lean-input-field
  label="Full Name"
  importance="required"
  [required]="true"
></lean-input-field>

<!-- Recommended field -->
<lean-input-field
  label="Phone Number"
  importance="recommended"
  type="tel"
></lean-input-field>

<!-- Optional field -->
<lean-input-field
  label="Middle Name"
  importance="optional"
></lean-input-field>
`})}),`
`,n.jsx(e.h3,{id:"with-error-handling",children:"With Error Handling"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`@Component({
  template: \`
    <lean-input-field
      label="Email"
      type="email"
      [error]="emailError"
      (valueChange)="validateEmail($event)"
    ></lean-input-field>
  \`
})
export class Component {
  emailError: string = '';

  validateEmail(value: string) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!value) {
      this.emailError = 'Email is required';
    } else if (!emailRegex.test(value)) {
      this.emailError = 'Please enter a valid email';
    } else {
      this.emailError = '';
    }
  }
}
`})}),`
`,n.jsx(e.h3,{id:"with-help-text",children:"With Help Text"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<lean-input-field
  label="Password"
  type="password"
  helpText="Must be at least 8 characters with 1 number and 1 special character"
  [minLength]="8"
></lean-input-field>
`})}),`
`,n.jsx(e.h3,{id:"with-max-length",children:"With Max Length"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<lean-input-field
  label="Bio"
  placeholder="Tell us about yourself"
  [maxLength]="200"
  helpText="Maximum 200 characters"
></lean-input-field>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-styling",children:"🎨 Styling"}),`
`,n.jsx(e.p,{children:"The component uses CSS variables from Lean IDS design tokens. All styles match the React version exactly."}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsx(e.p,{children:"Override CSS variables in your global styles:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`:root {
  --primary-500: #5009B5;  // Focus border color
  --error-500: #DC2626;    // Error border color
  --neutral-300: #D1D5DB;  // Default border color
  --font-primary: 'Inter', sans-serif;
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-accessibility",children:"♿ Accessibility"}),`
`,n.jsx(e.p,{children:"The Angular component includes the same accessibility features as React:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"WCAG 2.1 AA Compliant"})]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Keyboard Navigation"})," - Full keyboard support"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Screen Reader Support"})," - Proper ARIA labels"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Focus Management"})," - Clear focus indicators"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Error Announcements"})," - ",n.jsx(e.code,{children:'role="alert"'})," for errors"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Label Association"})," - Proper label-input association"]}),`
`]}),`
`,n.jsx(e.h3,{id:"aria-attributes",children:"ARIA Attributes"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<input
  [attr.aria-invalid]="hasError"
  [attr.aria-describedby]="hasError ? uniqueId + '-error' : (showHelpText ? uniqueId + '-help' : null)"
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-features",children:"🔧 Features"}),`
`,n.jsx(e.h3,{id:"form-integration",children:"Form Integration"}),`
`,n.jsxs(e.p,{children:["The component implements ",n.jsx(e.code,{children:"ControlValueAccessor"}),", making it fully compatible with:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ Reactive Forms (",n.jsx(e.code,{children:"FormControl"}),", ",n.jsx(e.code,{children:"FormGroup"}),")"]}),`
`,n.jsxs(e.li,{children:["✅ Template-Driven Forms (",n.jsx(e.code,{children:"ngModel"}),")"]}),`
`,n.jsx(e.li,{children:"✅ Custom validators"}),`
`,n.jsx(e.li,{children:"✅ Form validation states"}),`
`]}),`
`,n.jsx(e.h3,{id:"validation-support",children:"Validation Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Required validation"}),`
`,n.jsx(e.li,{children:"✅ Min/max length"}),`
`,n.jsx(e.li,{children:"✅ Pattern matching (regex)"}),`
`,n.jsx(e.li,{children:"✅ Custom error messages"}),`
`,n.jsx(e.li,{children:"✅ Real-time validation feedback"}),`
`]}),`
`,n.jsx(e.h3,{id:"visual-states",children:"Visual States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Default"}),`
`,n.jsx(e.li,{children:"✅ Hover"}),`
`,n.jsx(e.li,{children:"✅ Focus (with ring)"}),`
`,n.jsx(e.li,{children:"✅ Disabled"}),`
`,n.jsx(e.li,{children:"✅ Error"}),`
`,n.jsx(e.li,{children:"✅ Success"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-browser-support",children:"📱 Browser Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome (latest)"}),`
`,n.jsx(e.li,{children:"Firefox (latest)"}),`
`,n.jsx(e.li,{children:"Safari (latest)"}),`
`,n.jsx(e.li,{children:"Edge (latest)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-angular-version-compatibility",children:"🔄 Angular Version Compatibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Angular 15+"}),`
`,n.jsx(e.li,{children:"Angular 16+"}),`
`,n.jsx(e.li,{children:"Angular 17+"}),`
`,n.jsx(e.li,{children:"Angular 18+"}),`
`,n.jsx(e.li,{children:"Angular 19+"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-complete-documentation",children:"📚 Complete Documentation"}),`
`,n.jsx(e.p,{children:"For full documentation, see:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"packages/angular-components/src/input-field/README.md"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"packages/angular-components/INPUT_FIELD_SUMMARY.md"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-react-vs-angular",children:"🆚 React vs Angular"}),`
`,n.jsx(e.p,{children:"Both implementations provide identical:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Visual design"}),`
`,n.jsx(e.li,{children:"✅ Functionality"}),`
`,n.jsx(e.li,{children:"✅ Accessibility"}),`
`,n.jsx(e.li,{children:"✅ Design tokens"}),`
`,n.jsx(e.li,{children:"✅ API surface (adapted for each framework)"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Choose based on your project's framework:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React:"})," Use ",n.jsx(e.code,{children:"@lean-ids/components"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Angular:"})," Copy from ",n.jsx(e.code,{children:"packages/angular-components/src/input-field/"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-next-steps",children:"🎯 Next Steps"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Copy the component to your Angular project"}),`
`,n.jsxs(e.li,{children:["Install ",n.jsx(e.code,{children:"@ajaysoni7832/lean-ids-tokens"})]}),`
`,n.jsx(e.li,{children:"Setup CSS variables"}),`
`,n.jsx(e.li,{children:"Test with your forms"}),`
`,n.jsx(e.li,{children:"Customize as needed"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Ready to use! Check the repository for the complete source code."})," 🚀"]})]})}function j(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
