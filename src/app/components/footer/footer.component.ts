import { Component } from '@angular/core';
import { SocialNetworkComponent } from "../social-network/social-network.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [SocialNetworkComponent]
})
export class FooterComponent {

}
