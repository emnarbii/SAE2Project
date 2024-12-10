import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formBuilder = new FormBuilder();

  // create form with FormGroup Class
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    tel: new FormControl('', [Validators.required,Validators.pattern('^[1-9][0-9]{7}$')]),
    connexion: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    }),
  });

  // with formBuilder
  registerFormFB = this.formBuilder.group({
    username: '',
    email: '',
    pwd: '',
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
