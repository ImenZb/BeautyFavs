import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.module')
                        .then(m => m.TabsModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login', loadChildren: () => import('./features/login/login.module')
                                        .then(m => m.LoginModule),canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'register', loadChildren: () => import('./features/register/register.module')
                                        .then(m => m.RegisterModule)
  },
  {
    path: 'intro', loadChildren: () => import('./features/intro/intro.module')
                                        .then(m => m.IntroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
