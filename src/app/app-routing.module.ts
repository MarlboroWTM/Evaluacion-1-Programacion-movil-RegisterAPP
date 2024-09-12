import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-main',
    loadChildren: () => import('./inicio-main/inicio-main.module').then( m => m.InicioMainPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'qrgenerate',
    loadChildren: () => import('./qrgenerate/qrgenerate.module').then( m => m.QrgeneratePageModule)
  },
  {
    path: 'qrgenerate',
    loadChildren: () => import('./qrgenerate/qrgenerate.module').then( m => m.QrgeneratePageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'assistance',
    loadChildren: () => import('./assistance/assistance.module').then( m => m.AssistancePageModule)
  },
  {
    path: 'credencial-virtual',
    loadChildren: () => import('./credencial-virtual/credencial-virtual.module').then( m => m.CredencialVirtualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
