import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassmatePage } from './classmate.page';

const routes: Routes = [
  {
    path: '',
    component: ClassmatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassmatePageRoutingModule {}
