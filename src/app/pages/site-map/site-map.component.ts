import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, RouterLink } from '@angular/router';
import { IpagesData, PAGESDATA } from '../../dataHeroAndAccordion/pagesData';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [HeroComponent, RouterLink],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.css'
})
export class SiteMapComponent  implements OnInit {

  // AJOUT ********** déclarer propriétés + import
  data: IpagesData[] = PAGESDATA;
  currentSiteMapSubtitle: any;
  subtitle: any;

  // injecter ActivatedRoute
  constructor(public route: ActivatedRoute, public router: Router) {}

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
    const currentSiteMapSubtitle = this.data.find(
      (page: IpagesData) => page.subtitle === subtitle
    );
    // verif
    console.log('currentSiteMapSubtitle: ', currentSiteMapSubtitle);

    const subtitleCurrentPage = currentSiteMapSubtitle?.subtitle;
    console.log('ceci est l subtitle :', subtitleCurrentPage);

    this.currentSiteMapSubtitle = currentSiteMapSubtitle;
  }
}


