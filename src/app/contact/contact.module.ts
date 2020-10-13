import { NgModule } from '@angular/core';
import { ContactFormContainerModule } from './containers/contact-form/contact-form.module';
import { ContactFormModule } from './components/contact-form/contact-form.module';

@NgModule({
  imports: [
    ContactFormContainerModule,
    ContactFormModule
  ],
  exports: [
    ContactFormContainerModule,
    ContactFormModule
  ]
})
export class ContactModule { }
