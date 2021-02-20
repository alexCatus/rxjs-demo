import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './components/id-card/id-card.component';
import { PromiseVsObservablePageComponent } from './page/promise-vs-observable-page/promise-vs-observable-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { OperatorsPageComponent } from './page/operators-page/operators-page.component';
import { ObservableRowComponent } from './components/observable-row/observable-row.component';
import { IdCardColumnComponent } from './components/id-card-column/id-card-column.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { SubscriptionPageComponent } from './page/subscription-page/subscription-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    IdCardColumnComponent,
    PromiseVsObservablePageComponent,
    OperatorsPageComponent,
    ObservableRowComponent,
    SubscriptionPageComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
