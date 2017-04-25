import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);