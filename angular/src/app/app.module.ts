import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


import { BootstrapSwitchModule, BootstrapSwitchComponent } from 'angular2-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChuckyService } from './chucky.service';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BootstrapSwitchModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ChuckyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
