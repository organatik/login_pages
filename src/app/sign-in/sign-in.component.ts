import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'email': ['', Validators.compose([
        Validators.required, myValidations])],
      'password': ['', Validators.compose([
        Validators.required, myValidations])]
    });
  }

  ngOnInit() {
  }

}
