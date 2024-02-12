import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-set-up',
  standalone: true,
  imports: [],
  templateUrl: './password-set-up.component.html',
  styleUrl: './password-set-up.component.css'
})
export class PasswordSetUpComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Configuration mot de passe');
  }
}
