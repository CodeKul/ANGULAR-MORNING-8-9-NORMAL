import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

  form: FormGroup;

  cities = [
    'Pune', 'Mumbai', 'Delhi', 'Nagpur'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fstNm: ['', Validators.compose([
        Validators.required
      ])],
      lstNm: ['', Validators.compose([Validators.required, this.validateLstNm()])],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      city: ['']
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  validateLstNm(): ValidatorFn {
    return (c: AbstractControl) => {
      return c.value.charAt(0) !== 'a' ? { err: 'Word does not start from a' } : null;
    };
  }
}
