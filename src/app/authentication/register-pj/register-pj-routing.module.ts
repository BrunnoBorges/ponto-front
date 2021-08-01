import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPjComponent } from './register-pj.component';

const routes: Routes = [{path: '', component: RegisterPjComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPjRoutingModule { }
