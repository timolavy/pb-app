import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '@resources/auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/illustrations',
    pathMatch: 'full',
  },
  {
    path: 'illustrations',
    loadChildren: () => import('./pages/illustration/illustration.module').then(m => m.IllustrationModule),
  },
  {
    path: 'basket',
    loadChildren: () => import('./pages/basket/basket.module').then(m => m.BasketModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
