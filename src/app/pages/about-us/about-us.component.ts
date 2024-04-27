import { Component, OnInit } from '@angular/core';
import { IpagesData, PAGESDATA } from '../../dataHeroAndAccordion/pagesData';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeroComponent, RouterLink, RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
 
export class AboutUsComponent implements OnInit {
  
// AJOUT ********** déclarer propriétés + import
data: IpagesData[] = PAGESDATA;
currentAboutPageSubtitle: any;
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
  const currentAboutPageSubtitle = this.data.find(
    (page: IpagesData) => page.subtitle === subtitle
  );
  // verif
  console.log('currentAboutPageSubtitle: ', currentAboutPageSubtitle);

  const subtitleCurrentPage = currentAboutPageSubtitle?.subtitle;
  console.log('ceci est l subtitle :', subtitleCurrentPage);

  this.currentAboutPageSubtitle = currentAboutPageSubtitle;
}
  

}
