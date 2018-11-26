import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckDataComponent } from './check-form/check-data.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DoorFlowerComponent} from './door-flower/door-flower.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'check', component: CheckDataComponent },
  { path: 'flower', component: DoorFlowerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
