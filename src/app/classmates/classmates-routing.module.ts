import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassmatesPage } from './classmates.page';

const routes: Routes = [
  {
    path: '',
    component: ClassmatesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
