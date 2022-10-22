import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'MyGram',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        //loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        loadChildren: () => import('../pages/feed-page/feed-page.module').then(m => m.FeedPagePageModule),
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('../pages/profile-page/profile-page.module').then(m => m.ProfilePagePageModule)
      },
      {
        path: 'post/:id',
        loadChildren: () => import('../pages/post-page/post-page.module').then(m => m.PostPagePageModule)
      },
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'MyGram/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
