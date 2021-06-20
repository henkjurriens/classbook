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
        loadChildren: () => import('../classmates/classmates.module').then(m => m.Tab1PageModule)
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
