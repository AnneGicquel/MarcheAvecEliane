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
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "aboutUs",
    component: AboutUsComponent
  },
  {
    path: "accountSettings",
    component: AccountSettingsComponent
  },
  {
    path: "companionshipScheduler",
    component: CompanionshipSchedulerComponent
  },
  {
    path: "connectionOK",
    component: ConnectionOKComponent
  },
  {
    path: "contentManagement",
    component: ContentManagementComponent
  },
  {
    path: "legalNotice",
    component: LegalNoticeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'mutualAid/:id',
    component: MutualAidComponent
  },
  {
    path: "notFound",
    component: NotFoundComponent
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

