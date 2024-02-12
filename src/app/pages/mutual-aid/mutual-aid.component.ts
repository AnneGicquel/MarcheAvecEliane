import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mutual-aid',
  standalone: true,
  imports: [],
  templateUrl: './mutual-aid.component.html',
  styleUrl: './mutual-aid.component.css'
})
export class MutualAidComponent  implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Entraide');
  }
}
