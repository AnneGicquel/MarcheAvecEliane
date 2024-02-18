import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from "../../components/accordion/accordion.component";
import { IpagesData, PAGESDATA } from '../../mocks/pagesData';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
    selector: 'app-mutual-aid',
    standalone: true,
    templateUrl: './mutual-aid.component.html',
    styleUrl: './mutual-aid.component.css',
    imports: [AccordionComponent, HeroComponent]
})
export class MutualAidComponent  implements OnInit {

  // AJOUT ********** déclarer propriétés + import
  data: IpagesData[] = PAGESDATA;
  currentPageId: any;

  // injecter ActivatedRoute
  constructor(private titleService: Title, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Entraide');
    // AJOUT ********** 
    this.getCurrentPageId()
  }

  // AJOUT ********** 
  /* Récupérer l'ID -> ajouter variable de route à app-routing.module.ts
  { path: 'articles/:id', component: ArticlesComponent }
  et dans le html:[routerLink]="['/articles', data.id]"*/
  getCurrentPageId() {


    // récupérer l'id avec un type number
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // verif
    console.log('ID:', id,  'c est ok !!! ');
    console.log('test:', this.data , 'this data est l objet itself');


    // correspondance entre id reçu et le mock pour ouverture de l'article associé
    const currentPageId = this.data.find((page: IpagesData) => page.id === id)
    // verif
    console.log('currentPageId: ', currentPageId)

    const idDeLaCurrentPage = currentPageId?.id
    console.log('ceci est l id :', idDeLaCurrentPage)

    this.currentPageId = currentPageId;
    // AJOUT **********   FIN
  }
}

    




