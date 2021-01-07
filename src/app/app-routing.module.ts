import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsPageRowComponent } from './operators-page-row/operators-page-row.component';
import { PromiseVsObservablePageComponent } from './promise-vs-observable-page/promise-vs-observable-page.component';

const routes: Routes = [
  { path: 'promises', component: PromiseVsObservablePageComponent },
  { path: 'operators', component: OperatorsPageRowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
