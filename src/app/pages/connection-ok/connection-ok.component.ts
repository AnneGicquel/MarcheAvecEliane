import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-connection-ok',
  standalone: true,
  imports: [],
  templateUrl: './connection-ok.component.html',
  styleUrl: './connection-ok.component.css'
})
export class ConnectionOKComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Connexion réussie');
  }

}
