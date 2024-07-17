import { Component, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
   showCookieOverlay = true;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (cookieChoice !== null) {
      this.showCookieOverlay = false;
    }
  }

  handleCookieChoice(accepted: boolean): void {
    localStorage.setItem('cookieChoice', accepted ? 'accepted' : 'declined');
    this.showCookieOverlay = false;
  }
}






