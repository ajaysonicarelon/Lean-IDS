import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lean-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() error: string = '';
  @Input() helpText: string = '';
  @Input() importance: 'required' | 'optional' | 'recommended' = 'optional';
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() pattern?: string;
  @Input() autocomplete?: string;
  @Input() id?: string;
  @Input() name?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();

  value: string = '';
  isFocused: boolean = false;
  uniqueId: string;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    this.uniqueId = this.id || `input-field-${Math.random().toString(36).substr(2, 9)}`;
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Event handlers
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onInputBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  onInputFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.focus.emit(event);
  }

  get hasError(): boolean {
    return !!this.error;
  }

  get showHelpText(): boolean {
    return !!this.helpText && !this.hasError;
  }

  get importanceLabel(): string {
    switch (this.importance) {
      case 'required':
        return 'Required';
      case 'recommended':
        return 'Recommended';
      case 'optional':
        return 'Optional';
      default:
        return '';
    }
  }

  get importanceClass(): string {
    return `importance-${this.importance}`;
  }
}
