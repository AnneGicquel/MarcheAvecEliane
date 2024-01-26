import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-reset-request',
  standalone: true,
  imports: [],
  templateUrl: './password-reset-request.component.html',
  styleUrl: './password-reset-request.component.css'
})
export class PasswordResetRequestComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Demande réinitialisation mot de passe');
  }
}
