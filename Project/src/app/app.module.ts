import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FactScrollerComponent } from './fact-scroller/fact-scroller.component';
import { HttpClientModule } from '@angular/common/http';
import { FactService } from './service/fact.service';

@NgModule({
  declarations: [
    AppComponent,
    FactScrollerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    HttpClientModule,
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
