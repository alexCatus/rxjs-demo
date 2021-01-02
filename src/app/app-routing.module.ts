import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsPageComponent } from './operators-page/operators-page.component';
import { PromiseVsObservablePageComponent } from './promise-vs-observable-page/promise-vs-observable-page.component';

const routes: Routes = [
  { path: 'promises', component: PromiseVsObservablePageComponent },
  { path: 'operators', component: OperatorsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
