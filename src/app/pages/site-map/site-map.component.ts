import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.css'
})
export class SiteMapComponent  implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Plan du site');
  }
}
