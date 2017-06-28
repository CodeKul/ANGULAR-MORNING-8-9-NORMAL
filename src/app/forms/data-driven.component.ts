import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent  {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fstNm: [''],
      lstNm: [''],
      email: [''],
      city: ['']
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
