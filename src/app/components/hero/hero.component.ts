import { Component, Input } from '@angular/core';
import { IheroPicture, IpagesData, PAGESDATA } from '../../mocks/pagesData';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  data: IpagesData[] = PAGESDATA;

  @Input() currentPage!: IpagesData;
  @Input() heroPicture!: IheroPicture;

  ngOnInit() {
    console.log('currentPage:', this.currentPage);
    console.log('heroPicture:', this.heroPicture);
    //  => verif
  }
}
