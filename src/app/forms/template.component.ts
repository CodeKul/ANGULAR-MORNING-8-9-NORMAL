import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    fstNm: '', lstNm: '', email: ''
  };

  cities = [
    'Pune', 'Mumbai', 'Sangli', 'Nagpur', 'Satara'
  ];

  constructor() { }

  ngOnInit() {
  }

  wowSubmit(form?: NgForm) {
    console.log(form);
  }
}
