import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './formRouting.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent
  ]
})
export class FormModule { }
