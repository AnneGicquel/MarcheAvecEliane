import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SocialNetworkComponent } from "./components/social-network/social-network.component";
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, SocialNetworkComponent,]
})
export class AppComponent {
  title = 'Marche Avec Éliane';
  // url:string = "";

 // Pages without header & footer
  isLoginPage(): boolean {
    return this.router.url === '/connexion';
  }
  isWelcomePage():boolean{
    return this.router.url === '/bienvenue';
  }
  isManagementPage():boolean{
    return this.router.url === '/gestion_des_demandes';
  }
  isLearnMorePage():boolean{
    return this.router.url === '/en_savoir_plus/association'
  }
  isPwdForgotten():boolean{
    return this.router.url === '/mot_de_passe_oublie'
  }
  // SCROLL TO TOP
  constructor ( 
    private router: Router, 
    private viewportScroller: ViewportScroller) {
   
    this.router.events.subscribe (event => {
    if (event instanceof NavigationEnd){
    this.scrollToTop ();
    // this.url = event.url;
    // this.checkUrl(this.url);
  }
});
    }

    scrollToTop () {
    this.viewportScroller. scrollToPosition([0, 0]); 
    }
}

