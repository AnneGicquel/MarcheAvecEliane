import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-companionship-scheduler',
  standalone: true,
  imports: [],
  templateUrl: './companionship-scheduler.component.html',
  styleUrl: './companionship-scheduler.component.css'
})
export class CompanionshipSchedulerComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MAÉ ♡ | Rencontres');
  }

}
