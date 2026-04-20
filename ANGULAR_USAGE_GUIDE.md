# Using Lean IDS in Angular Projects

## 📋 Overview

This guide shows Angular developers how to use the Lean IDS design system in their projects. The design system provides tokens and a complete data table implementation.

---

## 🚀 Quick Start

### **Step 1: Install Packages**

```bash
npm install lean-ids-tokens@1.1.0
```

**Note:** The components package (`lean-ids-components`) is React-based. For Angular, use the tokens and follow the Angular implementation guide below.

---

## 🎨 Using Design Tokens in Angular

### **1. Install Tokens Package**

```bash
npm install lean-ids-tokens
```

### **2. Import Tokens in Your Angular App**

#### **Option A: Import in TypeScript**

```typescript
// app.component.ts or any component
import { theme, colors, spacing, typography } from 'lean-ids-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Use tokens in component
  primaryColor = colors.carelon.primary[500];
  spacing = spacing;
  
  constructor() {
    console.log('Theme:', theme);
    console.log('Primary Color:', this.primaryColor);
  }
}
```

#### **Option B: Use in SCSS/CSS**

Create a tokens file:

```scss
// src/styles/_tokens.scss

// Import tokens as SCSS variables
$primary-500: #5009B5;
$primary-400: #6222BC;
$primary-300: #8553CB;
$primary-200: #CBB5E9;
$primary-100: #EFE6F8;
$primary-50: #F8F7FB;

$spacing-4: 4px;
$spacing-8: 8px;
$spacing-12: 12px;
$spacing-16: 16px;
$spacing-20: 20px;
$spacing-24: 24px;

// Use in your components
.button {
  background-color: $primary-500;
  padding: $spacing-12 $spacing-24;
}
```

Or use CSS custom properties:

```scss
// src/styles.scss (global styles)

:root {
  // Colors
  --primary-500: #5009B5;
  --primary-400: #6222BC;
  --primary-300: #8553CB;
  --primary-200: #CBB5E9;
  --primary-100: #EFE6F8;
  --primary-50: #F8F7FB;
  
  // Spacing
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  
  // Typography
  --font-primary: 'Inter', sans-serif;
  --font-size-12: 12px;
  --font-size-14: 14px;
  --font-size-16: 16px;
}

// Use in components
.button {
  background-color: var(--primary-500);
  padding: var(--spacing-12) var(--spacing-24);
  font-family: var(--font-primary);
}
```

### **3. Generate SCSS Variables from Tokens**

Create a script to auto-generate SCSS:

```typescript
// scripts/generate-scss-tokens.ts
import { colors, spacing, typography } from 'lean-ids-tokens';
import * as fs from 'fs';

let scss = '// Auto-generated from lean-ids-tokens\n\n';

// Colors
scss += '// Colors\n';
Object.entries(colors.carelon.primary).forEach(([key, value]) => {
  scss += `$primary-${key}: ${value};\n`;
});

// Spacing
scss += '\n// Spacing\n';
Object.entries(spacing).forEach(([key, value]) => {
  scss += `$spacing-${key}: ${value}px;\n`;
});

// Typography
scss += '\n// Typography\n';
scss += `$font-primary: ${typography.fonts.primary};\n`;

fs.writeFileSync('src/styles/_tokens.scss', scss);
console.log('✅ SCSS tokens generated!');
```

Run it:

```bash
npx ts-node scripts/generate-scss-tokens.ts
```

---

## 📊 Using the Data Table in Angular

### **Option 1: Use the Complete Implementation**

The Angular implementation guide is available in your repository:

**File:** `packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md`

This includes:
- Complete component code (TypeScript, HTML, SCSS)
- RxJS state management service
- All features: freezing, sorting, selection, search, pagination

### **Option 2: Quick Setup**

#### **1. Create the Data Table Component**

```bash
ng generate component components/data-table
```

#### **2. Copy the Implementation**

From `packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md`, copy:

1. **Models** (`column-config.model.ts`, `data-row.model.ts`)
2. **Service** (`table-state.service.ts`)
3. **Component** (`data-table.component.ts`, `.html`, `.scss`)

#### **3. Install Dependencies**

```bash
npm install lean-ids-tokens
```

#### **4. Use in Your App**

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <app-data-table
      [data]="tableData"
      [columns]="columns"
      [enableFreezing]="true"
      [maxFrozenColumns]="3"
      [enableSorting]="true"
      [enableSelection]="true"
      [enablePagination]="true"
    ></app-data-table>
  `
})
export class AppComponent {
  tableData = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active'
    },
    // ... more data
  ];

  columns = [
    { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
    { id: 'id', label: 'ID', visible: true, locked: false, order: 1, sortable: true },
    { id: 'name', label: 'Name', visible: true, locked: false, order: 2, sortable: true },
    { id: 'email', label: 'Email', visible: true, locked: false, order: 3, sortable: true, searchable: true },
    { id: 'status', label: 'Status', visible: true, locked: false, order: 4 },
  ];
}
```

---

## 🎨 Styling Angular Components with Tokens

### **Example: Button Component**

```typescript
// button.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="'btn btn-' + variant"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
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
    
    .btn-secondary {
      background-color: var(--primary-100);
      color: var(--primary-700);
    }
    
    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
}
```

### **Example: Card Component**

```typescript
// card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border: 1px solid var(--neutral-300);
      border-radius: 8px;
      padding: var(--spacing-24);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class CardComponent {}
```

---

## 🔧 Advanced Usage

### **1. Create a Theme Service**

```typescript
// services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { theme as carelonTheme } from 'lean-ids-tokens';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject(carelonTheme);
  public theme$ = this.currentTheme.asObservable();

  setTheme(themeName: 'carelon' | 'elevance') {
    // Load theme dynamically
    import('lean-ids-tokens').then(({ colors }) => {
      const theme = themeName === 'carelon' ? colors.carelon : colors.elevance;
      this.applyTheme(theme);
    });
  }

  private applyTheme(theme: any) {
    // Apply theme to CSS variables
    const root = document.documentElement;
    Object.entries(theme.primary).forEach(([key, value]) => {
      root.style.setProperty(`--primary-${key}`, value as string);
    });
  }
}
```

### **2. Use Theme Service**

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <button (click)="switchTheme('carelon')">Carelon Theme</button>
      <button (click)="switchTheme('elevance')">Elevance Theme</button>
      
      <app-data-table [data]="data" [columns]="columns"></app-data-table>
    </div>
  `
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
```

---

## 📦 Project Structure

```
your-angular-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── data-table/          # From implementation guide
│   │   │   │   ├── data-table.component.ts
│   │   │   │   ├── data-table.component.html
│   │   │   │   ├── data-table.component.scss
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── column-config.model.ts
│   │   │   ├── data-row.model.ts
│   │   ├── services/
│   │   │   ├── table-state.service.ts
│   │   │   ├── theme.service.ts
│   │   └── app.component.ts
│   ├── styles/
│   │   ├── _tokens.scss              # Generated from tokens
│   │   ├── _variables.scss
│   │   └── styles.scss
│   └── scripts/
│       └── generate-scss-tokens.ts
├── package.json
└── angular.json
```

---

## 🎯 Complete Example

### **1. Install**

```bash
npm install lean-ids-tokens
```

### **2. Setup Global Styles**

```scss
// src/styles.scss
@import 'styles/tokens';

:root {
  // Apply tokens as CSS variables
  --primary-500: #{$primary-500};
  --spacing-16: #{$spacing-16};
  --font-primary: #{$font-primary};
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-primary);
}
```

### **3. Create Component**

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { colors, spacing } from 'lean-ids-tokens';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Lean IDS Angular Demo</h1>
      <div class="card">
        <p>Primary Color: {{ primaryColor }}</p>
        <p>Spacing: {{ spacing[16] }}px</p>
        <button class="btn-primary">Click Me</button>
      </div>
    </div>
  `,
  styles: [`
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
  `]
})
export class AppComponent {
  primaryColor = colors.carelon.primary[500];
  spacing = spacing;
}
```

---

## 📚 Resources

### **Documentation:**
- **Tokens Package:** https://www.npmjs.com/package/lean-ids-tokens
- **Angular Implementation:** `packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md`
- **Table Template Guide:** `packages/components/src/Table/README_TABLE_TEMPLATE.md`

### **GitHub:**
- **Repository:** https://github.com/ajaysonicarelon/Lean-IDS
- **Issues:** https://github.com/ajaysonicarelon/Lean-IDS/issues

---

## 🆘 Support

### **Common Issues:**

**Q: Can I use the React components in Angular?**  
A: No, but we provide a complete Angular implementation guide with the same features.

**Q: How do I get the data table in Angular?**  
A: Follow the implementation guide in `packages/angular-components/ANGULAR_TABLE_IMPLEMENTATION_GUIDE.md`

**Q: Can I customize the tokens?**  
A: Yes! Import the tokens and override CSS variables or create your own theme.

**Q: Does it work with Angular Material?**  
A: Yes! You can use the tokens alongside Angular Material or replace Material components.

---

## ✅ Checklist for Angular Developers

- [ ] Install `lean-ids-tokens` package
- [ ] Setup CSS variables in global styles
- [ ] Copy Angular table implementation (if needed)
- [ ] Create theme service (optional)
- [ ] Build your components using tokens
- [ ] Test with your data
- [ ] Deploy!

---

**Happy coding with Lean IDS in Angular!** 🚀
