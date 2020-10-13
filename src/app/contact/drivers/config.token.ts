import { InjectionToken } from '@angular/core';
import { ZendeskConfig } from './config';

export const ContactZendeskConfig = new InjectionToken<ZendeskConfig>(
  'ContactZendeskConfigToken'
);
