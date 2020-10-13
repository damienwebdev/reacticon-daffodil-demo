import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContactDriver } from '@daffodil/contact';
import { ZendeskService } from './zendesk.service';
import { ContactZendeskConfig } from './config.token';
import { ZendeskConfig } from './config';

@NgModule({
  imports: [CommonModule],
})
export class ContactZendeskDriverModule {
  static forRoot(
    config: ZendeskConfig
  ): ModuleWithProviders<ContactZendeskDriverModule> {
    return {
      ngModule: ContactZendeskDriverModule,
      providers: [
        { provide: DaffContactDriver, useClass: ZendeskService },
        { provide: ContactZendeskConfig, useValue: config },
      ],
    };
  }
}
