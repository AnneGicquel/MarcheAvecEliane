import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { IpagesData, PAGESDATA } from '../../mocks/pagesData';
import {
  ActivatedRoute,
  Params,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-mutual-aid',
  standalone: true,
  templateUrl: './mutual-aid.component.html',
  styleUrl: './mutual-aid.component.css',
  imports: [AccordionComponent, HeroComponent, RouterLink, RouterLinkActive],
})
export class MutualAidComponent implements OnInit {
  // AJOUT ********** déclarer propriétés + import
  data: IpagesData[] = PAGESDATA;
  currentPageSubtitle: any;
  subtitle: any;

  // injecter ActivatedRoute
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.subtitle = this.getCurrentSubtitle();
    });
  }

  getCurrentSubtitle() {
    // récupérer le subtitle avec un type string
    const subtitle = String(this.route.snapshot.paramMap.get('subtitle'));
    // verif
    console.log('subtitle:', subtitle, 'c est ok !!! ');
    console.log('test:', this.data, 'this data est l objet itself');

    // correspondance entre id reçu et le mock pour ouverture de l'article associé
    const currentPageSubtitle = this.data.find(
      (page: IpagesData) => page.subtitle === subtitle
    );
    // verif
    console.log('currentPageSubtitle: ', currentPageSubtitle);

    const subtitleCurrentPage = currentPageSubtitle?.subtitle;
    console.log('ceci est l subtitle :', subtitleCurrentPage);

    this.currentPageSubtitle = currentPageSubtitle;
  }
}
