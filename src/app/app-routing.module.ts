import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { currentRoutes } from './data/navigation.items';

const routes: Routes = currentRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
