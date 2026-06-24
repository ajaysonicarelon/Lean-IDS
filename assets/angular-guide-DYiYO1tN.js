import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as o}from"./index-DL7Mpk60.js";import{M as t}from"./index-BwSaPJK2.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-65YTGFeW.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Getting Started/Angular"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h2,{id:"using-lean-ids-in-angular",children:"Using Lean IDS in Angular"}),`
`,n.jsx(e.h2,{id:"-overview",children:"� Overview"}),`
`,n.jsx(e.p,{children:"This guide shows Angular developers how to use the Lean IDS design system in their projects. The design system provides design tokens and component implementations for Angular."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-start",children:"🚀 Quick Start"}),`
`,n.jsx(e.h3,{id:"step-1-install-tokens-package",children:n.jsx(e.strong,{children:"Step 1: Install Tokens Package"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @ajaysoni7832/lean-ids-tokens
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," The ",n.jsx(e.code,{children:"@ajaysoni7832/lean-ids-components"})," package is React-based. For Angular, use the design tokens and copy component implementations from the repository."]}),`
`,n.jsx(e.h3,{id:"step-2-import-fonts-required",children:n.jsx(e.strong,{children:"Step 2: Import Fonts (Required)"})}),`
`,n.jsx(e.p,{children:"Add the font import to your global styles file:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* src/styles.css or src/styles.scss */
@import '@ajaysoni7832/lean-ids-tokens/dist/fonts.css';

body {
  font-family: "Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
`})}),`
`,n.jsxs(e.p,{children:["This automatically loads the ",n.jsx(e.strong,{children:"Elevance Sans"})," font family used throughout the design system."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-using-design-tokens",children:"🎨 Using Design Tokens"}),`
`,n.jsx(e.h3,{id:"import-in-typescript",children:"Import in TypeScript"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.component.ts
import { colors, spacing, typography } from '@ajaysoni7832/lean-ids-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColor = colors.carelon.primary[500]; // #5009B5
  spacing = spacing;
}
`})}),`
`,n.jsx(e.h3,{id:"use-in-scss-with-css-variables",children:"Use in SCSS with CSS Variables"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`// src/styles.scss (global styles)
:root {
  // Colors
  --primary-500: #5009B5;
  --primary-400: #6222BC;
  --primary-300: #8553CB;
  --primary-200: #CBB5E9;
  --primary-100: #EFE6F8;
  --primary-50: #F8F7FB;
  
  // Spacing
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  
  // Typography
  --font-primary: 'Inter', sans-serif;
}

// Use in components
.button {
  background-color: var(--primary-500);
  padding: var(--spacing-12) var(--spacing-24);
  font-family: var(--font-primary);
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-using-angular-components",children:"🧩 Using Angular Components"}),`
`,n.jsx(e.h3,{id:"available-components",children:n.jsx(e.strong,{children:"Available Components"})}),`
`,n.jsxs(e.p,{children:["Angular implementations are available in the repository at ",n.jsx(e.code,{children:"packages/angular-components/src/"}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Currently Available:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"InputField"})," - Text input with validation, forms integration, and all input types"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Data Table"})," - Advanced table with freezing, sorting, selection, pagination"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Coming Soon:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button, Checkbox, Radio Button, Toggle, Textarea, Select, and more"}),`
`]}),`
`,n.jsx(e.h3,{id:"how-to-use-components",children:n.jsx(e.strong,{children:"How to Use Components"})}),`
`,n.jsx(e.h4,{id:"step-1-copy-the-component",children:n.jsx(e.strong,{children:"Step 1: Copy the Component"})}),`
`,n.jsx(e.p,{children:"Copy the component folder from the repository to your Angular project:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Example: Copy InputField component
cp -r packages/angular-components/src/input-field/ your-angular-app/src/app/components/
`})}),`
`,n.jsx(e.h4,{id:"step-2-import-and-use",children:n.jsx(e.strong,{children:"Step 2: Import and Use"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Component } from '@angular/core';
import { InputFieldComponent } from './components/input-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFieldComponent],
  template: \`
    <lean-input-field
      label="Email Address"
      type="email"
      [required]="true"
      helpText="We'll never share your email"
    ></lean-input-field>
  \`
})
export class AppComponent {}
`})}),`
`,n.jsx(e.h3,{id:"component-specific-documentation",children:n.jsx(e.strong,{children:"Component-Specific Documentation"})}),`
`,n.jsx(e.p,{children:"Each component has its own documentation:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"InputField:"}),' See "Components → InputField → Angular Implementation"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Data Table:"})," See ",n.jsx(e.code,{children:"packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md"})]}),`
`]}),`
`,n.jsx(e.p,{children:"Check each component's page in Storybook for Angular-specific usage examples."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-example-components",children:"🎨 Example Components"}),`
`,n.jsx(e.h3,{id:"button-component",children:"Button Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// button.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <button 
      [class]="'btn btn-' + variant"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  \`,
  styles: [\`
    .btn {
      font-family: var(--font-primary);
      font-size: 14px;
      font-weight: 600;
      padding: var(--spacing-12) var(--spacing-24);
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-primary {
      background-color: var(--primary-500);
      color: white;
    }
    
    .btn-primary:hover {
      background-color: var(--primary-600);
    }
    
    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  \`]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
}
`})}),`
`,n.jsx(e.h3,{id:"card-component",children:"Card Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: \`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \`,
  styles: [\`
    .card {
      background: white;
      border: 1px solid var(--neutral-300);
      border-radius: 8px;
      padding: var(--spacing-24);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  \`]
})
export class CardComponent {}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-theme-service-advanced",children:"🔧 Theme Service (Advanced)"}),`
`,n.jsx(e.p,{children:"Create a service to manage themes dynamically:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<'carelon' | 'elevance'>('carelon');
  public theme$ = this.currentTheme.asObservable();

  setTheme(themeName: 'carelon' | 'elevance') {
    import('@ajaysoni7832/lean-ids-tokens').then(({ colors }) => {
      const theme = themeName === 'carelon' ? colors.carelon : colors.elevance;
      this.applyTheme(theme);
      this.currentTheme.next(themeName);
    });
  }

  private applyTheme(theme: any) {
    const root = document.documentElement;
    Object.entries(theme.primary).forEach(([key, value]) => {
      root.style.setProperty(\`--primary-\${key}\`, value as string);
    });
  }
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  template: \`
    <button (click)="switchTheme('carelon')">Carelon Theme</button>
    <button (click)="switchTheme('elevance')">Elevance Theme</button>
  \`
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme('carelon');
  }

  switchTheme(theme: 'carelon' | 'elevance') {
    this.themeService.setTheme(theme);
  }
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-resources",children:"📚 Resources"}),`
`,n.jsx(e.h3,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"npm Package:"})," ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens",rel:"nofollow",children:"@ajaysoni7832/lean-ids-tokens"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub Repository:"})," ",n.jsx(e.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS",rel:"nofollow",children:"Lean-IDS"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Angular Guide:"})," ",n.jsx(e.code,{children:"ANGULAR_USAGE_GUIDE.md"})," in the repository"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Table Implementation:"})," ",n.jsx(e.code,{children:"packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"compatibility",children:"Compatibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Angular Versions:"})," 15, 16, 17, 18, 19"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript:"})," 4.8+"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RxJS:"})," 7.0+"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-checklist",children:"✅ Quick Checklist"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Install ",n.jsx(e.code,{children:"@ajaysoni7832/lean-ids-tokens"})," package"]}),`
`,n.jsx(e.li,{children:"[ ] Setup CSS variables in global styles"}),`
`,n.jsx(e.li,{children:"[ ] Import tokens in TypeScript components"}),`
`,n.jsx(e.li,{children:"[ ] Copy Angular table implementation (if needed)"}),`
`,n.jsx(e.li,{children:"[ ] Create theme service (optional)"}),`
`,n.jsx(e.li,{children:"[ ] Build your components using tokens"}),`
`,n.jsx(e.li,{children:"[ ] Test with your data"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-common-questions",children:"🆘 Common Questions"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Can I use the React components in Angular?"}),n.jsx(e.br,{}),`
`,"A: No, but we provide a complete Angular implementation guide with the same features."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: How do I get the data table?"}),n.jsx(e.br,{}),`
`,"A: Follow the implementation guide in ",n.jsx(e.code,{children:"packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Can I customize the tokens?"}),n.jsx(e.br,{}),`
`,"A: Yes! Import the tokens and override CSS variables or create your own theme."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Does it work with Angular Material?"}),n.jsx(e.br,{}),`
`,"A: Yes! You can use the tokens alongside Angular Material or replace Material components."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-complete-example",children:"🎯 Complete Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { colors, spacing } from '@ajaysoni7832/lean-ids-tokens';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container">
      <h1>Lean IDS Angular Demo</h1>
      <div class="card">
        <p>Primary Color: {{ primaryColor }}</p>
        <p>Spacing: {{ spacing[16] }}px</p>
        <button class="btn-primary">Click Me</button>
      </div>
    </div>
  \`,
  styles: [\`
    .container {
      padding: var(--spacing-24);
    }
    
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: var(--spacing-24);
      margin-top: var(--spacing-16);
    }
    
    .btn-primary {
      background-color: var(--primary-500);
      color: white;
      padding: var(--spacing-12) var(--spacing-24);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    
    .btn-primary:hover {
      opacity: 0.9;
    }
  \`]
})
export class AppComponent {
  primaryColor = colors.carelon.primary[500];
  spacing = spacing;
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Happy coding with Lean IDS in Angular!"})," 🚀"]})]})}function u(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{u as default};
