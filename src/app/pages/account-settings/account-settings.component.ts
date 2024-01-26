import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Paramètres du compte');
  }
}
