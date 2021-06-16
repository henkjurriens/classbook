import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'classmates',
        loadChildren: () => import('../classmates/classmates.module').then(m => m.ClassmatesPageModule)
      },
      {
        path: 'classmate/:id',
        loadChildren: () => import('../classmate/classmate.module').then(m => m.ClassmatePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/classmates',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
