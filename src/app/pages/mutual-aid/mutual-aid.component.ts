import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from "../../components/accordion/accordion.component";

@Component({
    selector: 'app-mutual-aid',
    standalone: true,
    templateUrl: './mutual-aid.component.html',
    styleUrl: './mutual-aid.component.css',
    imports: [AccordionComponent]
})
export class MutualAidComponent  implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Entraide');
  }
}
