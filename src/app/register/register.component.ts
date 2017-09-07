import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username = new FormControl('', [Validators.required,
                                  Validators.minLength(2),
                                  Validators.maxLength(30),
                                  Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
                                  Validators.minLength(6)]);
  identidad = new FormControl('', [Validators.required,
                                  Validators.maxLength(13),
                                  Validators.minLength(13)]);
  phone = new FormControl('', [Validators.required,
                                Validators.minLength(8),
                                Validators.maxLength(8)]);
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  role = new FormControl('', [Validators.required]);
  fechaNac = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      identidad: this.identidad,
      phone: this.phone,
      role: this.role,
      name: this.name,
      lastName: this.lastName,
      fechaNac: this.fechaNac
    });
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  setClassIdentidad(){
    return {'has-danger': !this.identidad.pristine && !this.identidad.valid};
  }

  setClassPhone(){
    return {'has-danger': !this.phone.pristine && !this.phone.valid};
  }

   setClassName(){
    return {'has-danger': !this.name.pristine && !this.name.valid};
  }

   setClassLastName(){
    return {'has-danger': !this.lastName.pristine && !this.lastName.valid};
  }

   setClassFechaNac(){
     return {'has-danger': !this.fechaNac.pristine && !this.fechaNac.valid};
   }

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('Ha sido registrado satisfactoriamente!', 'success');
        this.router.navigate(['/login']);
      },
      error => this.toast.setMessage('El correo que ingresó ya existe', 'danger')
    );
  }
}
