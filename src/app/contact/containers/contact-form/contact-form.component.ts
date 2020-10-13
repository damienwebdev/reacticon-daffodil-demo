import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DaffContactDriver, DaffContactServiceInterface } from '@daffodil/contact';

import { ContactFormBuilderService } from '../../components/contact-form/builder.service';
import { AppContactForm } from '../../components/contact-form/model';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'contact-form-container',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormContainer implements OnInit {
  formGroup: FormGroup;

  loading: boolean = false;

  constructor(
      private contactFormBuilder: ContactFormBuilderService, 
      private _snackBar: MatSnackBar,
      @Inject(DaffContactDriver) private contactDriver: DaffContactServiceInterface<AppContactForm, any>
    ) { }

  ngOnInit(): void {
    this.formGroup = this.contactFormBuilder.create();
  }

  private getMessage(name: string){
    return "Thanks for reaching out " + name + ", we're on the case.";
  }

  onSubmission(form: AppContactForm) {
    this.formGroup.disable();
    this.contactDriver.send(form).pipe(
      map((response) => {
        this.formGroup.enable();
        this._snackBar.open(this.getMessage(form.name), null, {
          duration: 4000
        });
      }),
      catchError((error: any) => {
        this.formGroup.enable();
        return of(error).pipe(
          tap(() => this._snackBar.open("Something went horribly terribly wrong.", 'Close'))
        )
      })
    ).subscribe();
  }

}
