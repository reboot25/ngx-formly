import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

type RadioProps = FormlyFieldProps;

export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
  type: 'radio' | Type<FormlyFieldRadio>;
}

@Component({
  selector: 'formly-field-primeng-radio',
  template: `
    <div
      class="p-field-radiobutton flex items-center"
      *ngFor="let option of props.options | formlySelectOptions: field | async"
    >
      <p-radioButton
        [name]="field.name || id"
        [inputId]="option.label"
        [formControl]="option.disabled ? disabledControl : formControl"
        [value]="option.value"
      >
      </p-radioButton>
      <label [for]="option.label" class="ml-2">{{ option.label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
  get disabledControl() {
    return new UntypedFormControl({ value: this.formControl.value, disabled: true });
  }
}
