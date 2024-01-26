import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent    implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Accueil');
  }

}
