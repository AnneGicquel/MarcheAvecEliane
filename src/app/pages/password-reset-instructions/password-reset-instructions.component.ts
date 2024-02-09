import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-reset-instructions',
  standalone: true,
  imports: [],
  templateUrl: './password-reset-instructions.component.html',
  styleUrl: './password-reset-instructions.component.css'
})
export class PasswordResetInstructionsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Instructions réinitialisation mot de passe');
  }
}
