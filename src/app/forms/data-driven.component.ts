import { Component } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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
      ]), this.asyncEmailVlidator()],
      lstNm: ['', Validators.compose([Validators.required, this.validateLstNm()])],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      city: [''],
      mobiles: formBuilder.array([
        new FormControl(''),
        new FormControl('')
      ])
    });
  }

  onOkay() {
    (<FormArray>this.form.controls.mobiles).push(new FormControl());
  }
  onSubmit() {
    console.log(this.form);
  }

  validateLstNm(): ValidatorFn {
    return (c: AbstractControl) => {
      return c.value.charAt(0) !== 'a' ? { err: 'Word does not start from a' } : null;
    };
  }

  asyncEmailVlidator(): AsyncValidatorFn {

    let fn: AsyncValidatorFn = (c: AbstractControl) => new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (c.value.charAt(0) === 'a') {
          res({ err: 'Starts with a' });
        }
        else res(null);

      }, 1000);
    });
    return fn;
  }
}
