import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { PostPagePage } from '../pages/post-page/post-page.page';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: Tab1Page,
    children:[
      {
        path: 'post/:id',
        loadChildren: () => import('../pages/post-page/post-page.module').then(m => m.PostPagePageModule)
      }
    ]
  },
  {
    path: 'post/:id',
    component: Tab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
