import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})


export class FuncionarioComponent implements OnInit {
  date: any;
  locale: any;

  register: any;
  registered: any;

  displayedRegister: string[] = ['date', 'locale'];
  displayedRegistered: string[] = ['date', 'type', 'locale', 'edit', 'delete' ];

  constructor(private router: Router,) {
    this.register = [
      {date: '30/07/2021', locale: 'aqui'}
    ]

    this.registered = [
      {date: '30/07/2021',type: 'Entrada', locale: 'aqui'}
    ]
   }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/']);
  }

  registrar() {
    console.log('registrou ponto')
  }
  

}
