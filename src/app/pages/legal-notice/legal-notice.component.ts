import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IpagesData, PAGESDATA } from '../../dataHeroAndAccordion/pagesData';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.css'
})
export class LegalNoticeComponent implements OnInit {

   // AJOUT ********** déclarer propriétés + import
   data: IpagesData[] = PAGESDATA;
   currentLegalNoticeSubtitle: any;
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
     const currentLegalNoticeSubtitle = this.data.find(
       (page: IpagesData) => page.subtitle === subtitle
     );
     // verif
     console.log('currentLegalNoticeSubtitle: ', currentLegalNoticeSubtitle);
   
     const subtitleCurrentPage = currentLegalNoticeSubtitle?.subtitle;
     console.log('ceci est l subtitle :', subtitleCurrentPage);
   
     this.currentLegalNoticeSubtitle = currentLegalNoticeSubtitle;
   }
     
   
}
