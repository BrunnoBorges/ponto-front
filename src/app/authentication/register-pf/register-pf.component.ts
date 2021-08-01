import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-pf',
  templateUrl: './register-pf.component.html',
  styleUrls: ['./register-pf.component.scss']
})
export class RegisterPfComponent implements OnInit {

  formPF: FormGroup = new FormGroup({
    namePf: new FormControl(''),
    passwordPf: new FormControl(''),
    emailPf: new FormControl(''),
    cpf: new FormControl(''),
    passwordConfirmPf: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitPf() {
    console.log('cadastro de Pf', this.formPF.value);
  }

}
