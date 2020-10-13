import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';

import { DaffContactHubSpotDriverModule } from '@daffodil/contact';
import { DaffContactInMemoryDriverModule } from '@daffodil/contact/testing';
import { ContactZendeskDriverModule } from './contact/drivers/zendesk.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContactModule,
    MatCardModule,

    HttpClientModule,
    // DaffContactHubSpotDriverModule.forRoot({
    //   portalId: "6291679",
    //   guid: "b24fc5f2-5422-4566-b550-bb685d00c74c"
    // }),
    // DaffContactInMemoryDriverModule.forRoot()
    // ContactZendeskDriverModule.forRoot({
    //   subdomain: 'graycore'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
