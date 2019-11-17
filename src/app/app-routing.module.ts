import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'info', 
    loadChildren: './info/info.module#InfoPageModule' 
  },
  { path: 'report', 
    loadChildren: './report/report.module#ReportPageModule' 
  },
  { path: 'prediction', 
    loadChildren: './prediction/prediction.module#PredictionPageModule' 
  },
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
  { path: 'developer', loadChildren: './pages/developer/developer.module#DeveloperPageModule' },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
