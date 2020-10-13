import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DaffContactServiceInterface } from '@daffodil/contact';
import { Observable } from 'rxjs';

import { ContactZendeskConfig } from './config.token';
import { AppContactForm } from '../components/contact-form/model';
import { ZendeskConfig } from './config';

@Injectable()
export class ZendeskService implements DaffContactServiceInterface<AppContactForm, any>{
  readonly ENDPOINT_PATTERN: string = "https://{subdomain}.zendesk.com/api/v2/requests.json";

  private getEndpoint(subdomain: string) {
    return this.ENDPOINT_PATTERN.replace("{subdomain}", subdomain)
  } 

  constructor(
    private httpClient: HttpClient,
    @Inject(ContactZendeskConfig) private config: ZendeskConfig
  ) { }

  send(form: AppContactForm): Observable<any>{
    return this.httpClient.post(this.getEndpoint(this.config.subdomain),  {
      "request": {
        "requester": {"name": form.name},
        "subject": "Contact Form Request - Reaction Demo",
        "comment": {"body": form.message }
      }
    });
  }
}
