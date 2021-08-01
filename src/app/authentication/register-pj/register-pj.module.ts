import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPjRoutingModule } from './register-pj-routing.module';
import { RegisterPjComponent } from './register-pj.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    RegisterPjComponent
  ],
  imports: [
    CommonModule,
    RegisterPjRoutingModule,
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
    RegisterPjComponent
  ]
})
export class RegisterPjModule { }
