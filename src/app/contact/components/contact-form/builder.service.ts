import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactFormBuilderService {

  constructor(private formBuilder: FormBuilder) {
  }

  create() {
    return this.formBuilder.group({
      "name": this.formBuilder.control('Damien Retzinger', [Validators.required]),
      "email": this.formBuilder.control('damien@graycore.io', [Validators.required]),
      "message": this.formBuilder.control('Reacticon is a very amazing conference.', [Validators.required])
    });
  }
}
