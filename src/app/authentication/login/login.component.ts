import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from './models/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: any;
 
  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private loginService: LoginService) {
    this.formLogin = FormGroup;
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  logar() {
    if (this.formLogin.invalid) {
      this.snackBar.open("Dados inválidos", "Erro", {duration: 5000});
      return;
    }

    const login: Login = this.formLogin.value;
    this.loginService.sendLogin(login)
      .subscribe(
        data => {
          console.log('---->', JSON.stringify(data))
          localStorage['token'] = data['token'];
          const usuarioData = JSON.parse(
            atob(data['token'].split('.')[1]));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/funcionario']);
          }
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}
