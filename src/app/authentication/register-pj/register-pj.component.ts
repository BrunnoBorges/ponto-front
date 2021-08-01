import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-pj',
  templateUrl: './register-pj.component.html',
  styleUrls: ['./register-pj.component.scss']
})
export class RegisterPjComponent implements OnInit {
  
  formPJ: FormGroup = new FormGroup({
    namePj: new FormControl(''),
    passwordPj: new FormControl(''),
    emailPj: new FormControl(''),
    cnpj: new FormControl(''),
    passwordConfirmPj: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitPj() {
    console.log('cadastro de Pj', this.formPJ.value);
  }

}
