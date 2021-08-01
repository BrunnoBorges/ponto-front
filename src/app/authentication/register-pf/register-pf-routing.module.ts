import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPfComponent } from './register-pf.component';

const routes: Routes = [{path: '', component: RegisterPfComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPfRoutingModule { }
