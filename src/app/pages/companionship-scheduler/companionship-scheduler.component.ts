import { Component} from '@angular/core';
import { SchedulerService } from '../../services/schedulerService/scheduler.service';
import { EventListAndFormComponent } from "../../components/event-list-and-form/event-list-and-form.component";
import { CalendarComponent } from "../../components/calendar/calendar.component";

@Component({
    selector: 'app-companionship-scheduler',
    standalone: true,
    templateUrl: './companionship-scheduler.component.html',
    styleUrl: './companionship-scheduler.component.css',
    imports: [EventListAndFormComponent, CalendarComponent]
})
export class CompanionshipSchedulerComponent  {
  activeDate: string = '';
  selectedAction: string | null = null;
  title: string = '';
  formTitle :string = '';
  showFormDropdownInfo: boolean = false;
  label: string = '';
  showFormInfoIfEdit: boolean = false;

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit() {
    this.activeDate = this.schedulerService.formatDate(new Date());

    this.outings.sort((a, b) => {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    });
  }

  // Méthode pour gérer l'action du formulaire émise par EventListAndForm
  handleFormAction(formData: any) {
    // Traitez les données du formulaire ici
    console.log('Action du formulaire:', formData);
    // Vous pouvez mettre en œuvre la logique de gestion des données ici, par exemple, enregistrement dans une base de données ou mise à jour des données du composant parent, etc.
  }

  // OUTINGS
  outings = [
    { name: 'Jasmin-4108', time: '11:00' },
    { name: 'Cactus-1261', time: '13:00' },
    { name: 'Chlorophytum-2387', time: '10:00' },
    { name: 'Bambou-7142', time: '11:00' },
    { name: 'Hibiscus-2776', time: '16:00' },
    { name: 'Lavande-2645', time: '11:00' },
    { name: 'Pépéromia-4233', time: '13:00' },
    { name: 'Narcisse-1234', time: '10:00' },
    { name: 'Citronnelle-8928', time: '11:00' },
    { name: 'Aloe-3397', time: '16:00' },
  ];

  // UPCOMINGS
  upcomings = [
    { name: 'Jasmin-4108', time: '10:00', date: 'Lun 22/04' },
    { name: 'Cactus-1261', time: '11:00', date: 'Ven 26/04' },
    { name: 'Chlorophytum-2387', time: '16:00', date: 'Sam 27/04' },
    { name: 'Bambou-7142', time: '13:00', date: 'Jeu 16/05' },
    { name: 'Hibiscus-2776', time: '11:00', date: 'Mar 28/05' },
    { name: 'Lavande-2645', time: '10:00', date: 'Lun 22/04' },
    { name: 'Pépéromia-4233', time: '11:00', date: 'Ven 26/04' },
    { name: 'SNarcisse-1234', time: '16:00', date: 'Sam 27/04' },
    { name: 'Citronnelle-8928', time: '13:00', date: 'Jeu 16/05' },
    { name: 'Aloe-3397', time: '11:00', date: 'Mar 28/05' },
  ];

  // GESTION DU FORM DYNAMIQUE DELETE or EDIT
  // Méthode pour écouter les événements émis par app-event-list-and-form
  onActionClicked(action: string) {
    this.selectedAction = action;
    console.log('Action:', action);
    // Définir le titre, showFormDropdownInfo et label en fonction de l'action sélectionnée
    if (action === 'delete') {
      this.formTitle = 'Supprimer la date de sortie';
      this.showFormInfoIfEdit = true;
      this.showFormDropdownInfo = false;
      this.label = 'SUPPRIMER';
    } else if (action === 'edit') {
      this.formTitle = 'Modifier la date de sortie';
      this.showFormInfoIfEdit = false;
      this.showFormDropdownInfo = true;
      this.label = 'MODIFIER';
    }
  }
}
