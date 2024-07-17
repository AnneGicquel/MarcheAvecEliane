import { Component } from '@angular/core';
import { SocialNetworkComponent } from "../social-network/social-network.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [RouterModule, SocialNetworkComponent]
})
export class FooterComponent {
    showCookieOverlay = false;

    openCookieWarning(){
        this.showCookieOverlay = true;
    }  
  
    handleCookieChoice(accepted: boolean): void {
      this.showCookieOverlay = false;
    }

}
