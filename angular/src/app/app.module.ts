import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {ChuckyService } from './chucky.service';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ChuckyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
