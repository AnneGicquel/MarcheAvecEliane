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
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LearnMorePageComponent } from './pages/learn-more-page/learn-more-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [

  { path: "", 
    redirectTo: '/bienvenue',
    pathMatch: 'full' 
  },
  {
    path: "bienvenue",
    title:'Bienvenue | MaÉ ♡',
    component: WelcomePageComponent
  },
  {
    path: "en_savoir_plus/:subtitle",
    title:'En savoir plus | MaÉ ♡',
    component: LearnMorePageComponent 
  },

  {
    path: "connexion",
    title:'Connexion | MaÉ ♡',
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
    path: "mentions_legales/:subtitle",
    title:'À propos | MaÉ ♡',
    component: LegalNoticeComponent
  },
  {
    path: 'entraide/:subtitle',
    title:'Entraide | MaÉ ♡',
    component: MutualAidComponent
  },
  {
    path: "politique_de_confidentialite/:subtitle",
    title:'Politique de confidentialité | MaÉ ♡',
    component: PrivacyPolicyComponent
  },
  {
    path: "plan_du_site/:subtitle",
    title: 'Plan du site | MaÉ ♡', 
    component: SiteMapComponent
  },
  {
    path: "notFound",
    title:'Page non trouvée | MaÉ ♡',
    component: NotFoundComponent
  }, 
  {
    path: "mot_de_passe_oublie",
    component: PasswordResetInstructionsComponent
  },
  { 
    path: '**', 
    redirectTo: '/notFound' 
  },
 
  {
    path: "passwordResetRequest",
    component: PasswordResetRequestComponent
  },
  {
    path: "passwordSetUp",
    component: PasswordSetUpComponent
  },
];

