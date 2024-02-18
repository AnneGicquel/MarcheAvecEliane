import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IaccordionItem, IpagesData, PAGESDATA } from '../../mocks/pagesData';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  data: IpagesData[] = PAGESDATA;

  @Input() intro!: string;
  @Input() items!: IaccordionItem[];


  ngOnInit() {
    console.log('intro:', this.intro);
    console.log('items:', this.items);
    console.log('heading :', this.items[0].heading);
    //  => verif
  }

  itemClicked($index: number) {
    // if item TRUE => FALSE
    if (this.items[$index].isActive) {
      this.items[$index].isActive = false;
    } else {
      // if FALSE item => TRUE & all others => FALSE
      this.items.forEach((item, index) => {
        item.isActive = index === $index;
      });
    }
  }
}
