import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { CompanionshipSchedulerComponent } from './pages/companionship-scheduler/companionship-scheduler.component';
import { ConnectionOKComponent } from './pages/connection-ok/connection-ok.component';
import { ContentManagementComponent } from './pages/content-management/content-management.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { LoginComponent } from './pages/login/login.component';
import { MutualAidComponent } from './pages/mutual-aid/mutual-aid.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PasswordResetInstructionsComponent } from './pages/password-reset-instructions/password-reset-instructions.component';
import { PasswordResetRequestComponent } from './pages/password-reset-request/password-reset-request.component';
import { PasswordSetUpComponent } from './pages/password-set-up/password-set-up.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';

export const routes: Routes = [
  { path: "", 
    redirectTo: '/connexion',
    pathMatch: 'full' 
  },
  {
    path: "connexion",
    // title:'Connexion | MaÉ ♡',
    component: LoginComponent
  },
  {
    path: "accueil",
    title:'Accueil | MaÉ ♡',
    component: HomePageComponent
  },
  {
    path: "a_propos/:subtitle",
    title:'À propos | MaÉ ♡',
    component: AboutUsComponent
  },
  {
    path: "mes_informations",
    title:'Mes informations | MaÉ ♡',
    component: AccountSettingsComponent
  },
  {
    path: "rencontres",
    title:'Rencontres | MaÉ ♡',
    component: CompanionshipSchedulerComponent
  },
  {
    path: "connectionOK",
    component: ConnectionOKComponent
  },
  {
    path: "gestion_des_demandes",
    title:'Gestion des demandes | MaÉ ♡',
    component: ContentManagementComponent
  },
  {
    path: "legalNotice",
    component: LegalNoticeComponent
  },
  {
    path: 'entraide/:subtitle',
    title:'Entraide | MaÉ ♡',
    component: MutualAidComponent
  },
  {
    path: "notFound",
    // title:'404 | MaÉ ♡',
    component: NotFoundComponent
  },
  { 
    path: '**', 
    redirectTo: '/notFound' 
  },
  {
    path: "passwordResetInstructions",
    component: PasswordResetInstructionsComponent
  },
  {
    path: "passwordResetRequest",
    component: PasswordResetRequestComponent
  },
  {
    path: "passwordSetUp",
    component: PasswordSetUpComponent
  },
  {
    path: "privacyPolicy",
    component: PrivacyPolicyComponent
  },
  {
    path: "siteMap",
    component: SiteMapComponent
  }
];

