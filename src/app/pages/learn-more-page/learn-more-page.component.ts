import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { IpagesData, PAGESDATA } from '../../dataHeroAndAccordion/pagesData';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-more-page',
  standalone: true,
  imports: [HeroComponent, RouterLink],
  templateUrl: './learn-more-page.component.html',
  styleUrl: './learn-more-page.component.css'
})
export class LearnMorePageComponent implements OnInit {
  
  // AJOUT ********** déclarer propriétés + import
  data: IpagesData[] = PAGESDATA;
  currentLearnMoreSubtitle: any;
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
    const currentLearnMoreSubtitle = this.data.find(
      (page: IpagesData) => page.subtitle === subtitle
    );
    // verif
    console.log('currentLearnMoreSubtitle: ', currentLearnMoreSubtitle);
  
    const subtitleCurrentPage = currentLearnMoreSubtitle?.subtitle;
    console.log('ceci est l subtitle :', subtitleCurrentPage);
  
    this.currentLearnMoreSubtitle = currentLearnMoreSubtitle;
  }
    
  }
  