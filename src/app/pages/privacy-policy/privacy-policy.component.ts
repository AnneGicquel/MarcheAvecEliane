import { Component, OnInit } from '@angular/core';
import { IpagesData, PAGESDATA } from '../../dataHeroAndAccordion/pagesData';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent {
  // AJOUT ********** déclarer propriétés + import
  data: IpagesData[] = PAGESDATA;
  currentPrivacySubtitle: any;
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
    const currentPrivacySubtitle = this.data.find(
      (page: IpagesData) => page.subtitle === subtitle
    );
    // verif
    console.log('currentPrivacySubtitle: ', currentPrivacySubtitle);

    const subtitleCurrentPage = currentPrivacySubtitle?.subtitle;
    console.log('ceci est l subtitle :', subtitleCurrentPage);

    this.currentPrivacySubtitle = currentPrivacySubtitle;
  }
}
