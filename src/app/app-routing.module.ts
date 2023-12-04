import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: 'product-details/:id1/:id2', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
