import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/dashboard/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./views/account/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: 'corporate',
    loadChildren: () =>
      import('./views/corporate/corporate/corporate.module').then(
        (m) => m.CorporateModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./views/our-team/our-team/our-team.module').then(
        (m) => m.OurTeamModule
      ),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./views/social/social/social.module').then((m) => m.SocialModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./views/settings/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
