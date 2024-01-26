import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Connexion');
  }
}
