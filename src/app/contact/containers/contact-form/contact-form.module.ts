import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormContainer } from './contact-form.component';
import { ContactFormModule } from '../../components/contact-form/contact-form.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ContactFormContainer
  ],
  imports: [
    CommonModule,
    ContactFormModule,
    MatSnackBarModule
  ],
  exports:[
    ContactFormContainer
  ]
})
export class ContactFormContainerModule { }
