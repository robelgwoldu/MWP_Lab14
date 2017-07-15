import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs/Rx";
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: ['./data-driven.component.css']
})

export class DataDrivenComponent {

  title = 'Lab 14';

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: DataServiceService){
    this.userForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      post: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)]))
    });

    this.userForm.statusChanges.subscribe(data => console.log(data));
  }

  submitForm(): void {
    console.log('Reactive Form Data: ');
    console.log(this.userForm.value);
  }

  getData() {
    this.userService.getData().subscribe(data => {
      this.userForm.controls['name'].setValue(data.name);
      this.userForm.controls['email'].setValue(data.email);
    });

    this.userService.getPostData().subscribe(data => {
      this.userForm.controls['post'].setValue(data[0].body);
    });

  }

}
