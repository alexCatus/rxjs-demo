import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component';
import { IdCardColumnComponent } from './id-card-column/id-card-column.component';
import { PromiseVsObservablePageComponent } from './promise-vs-observable-page/promise-vs-observable-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OperatorsPageComponent } from './operators-page/operators-page.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    IdCardColumnComponent,
    PromiseVsObservablePageComponent,
    OperatorsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
