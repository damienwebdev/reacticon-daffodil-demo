import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppContactForm } from '../contact-form/model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @Output() submitted: EventEmitter<AppContactForm> = new EventEmitter<AppContactForm>();

  @Input() formGroup: FormGroup;

  submit() {
    if(this.formGroup.valid){
      this.submitted.emit(this.formGroup.value);
    }
  }
}
