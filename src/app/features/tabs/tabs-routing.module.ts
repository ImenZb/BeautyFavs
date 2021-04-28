import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '', component: TabsComponent, children:[
      {
        path:'home', loadChildren: () => import('../home/home.module')
                                          .then(m => m.HomeModule) 
      },
      {
        path: 'search', loadChildren: () => import('../search/search.module')
                                            .then(m => m.SearchModule)
      },
      {
        path: 'detail', loadChildren: () => import('../detail/detail.module')
                                            .then(m => m.DetailModule)
      },
      {
        path: 'profil', loadChildren: () => import('../profil/profil.module')
                                            .then(m => m.ProfilModule)
      },
      {
        path: 'add', loadChildren: () => import('../add-product/add-product.module')
                                            .then(m => m.AddProductModule)
      },
      {
        path: 'ask', loadChildren: () => import('../ask/ask.module')
                                            .then(m => m.AskModule)
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TabsRoutingModule { }