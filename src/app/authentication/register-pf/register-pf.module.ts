import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPfRoutingModule } from './register-pf-routing.module';
import { RegisterPfComponent } from './register-pf.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    RegisterPfComponent
  ],
  imports: [
    CommonModule,
    RegisterPfRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    RegisterPfComponent
  ]
})
export class RegisterPfModule { }
