import { Component, OnInit } from '@angular/core';
import { Outing } from '../../models/outing.model';
import { Elderly } from '../../models/elderly.model';
import { SchedulerService } from '../../services/schedulerService/scheduler.service';
import { ElderlyService } from '../../services/elderly/elderly.service';
import { OutingService } from '../../services/outing/outing.service';
import { ContentManagementService } from '../../services/contentManagement/content-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.css',
})
export class ContentManagementComponent implements OnInit {
  // CALENDAR
  daysOfWeek!: string[];
  date!: Date;
  currMonthNumber!: number;
  months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  currMonth!: string;
  currYear!: number;
  days!: number[];
  activeDate!: string; // Variable pour stocker la date active
  firstDayofMonth!: number;
  lastDateofMonth!: number;
  lastDayofPrevMonth!: number;
  lastDayofMonth!: number;
  isFormOpenEDIT = false;
  selectedOutingForEdit: any = null;
  isFormOpenDELETE = false;
  selectedOutingForDelete: any = null;
  // HOURS DROPDOWN
  selectedDate: Date | null = null;
  hours: string[] = [];
  selectedTime: string | null = null; // 🙏
  // 🟣 ELDERLY PART
  elderlies: Elderly[] = [];
  selectedElderly: Elderly | null = null;
  // 🟡 OUTING PART
  outings: Outing[] = [];

  constructor(
    private schedulerService: SchedulerService,
    private contentManagementservice: ContentManagementService,
    private elderlyService: ElderlyService,
    private outingService: OutingService
  ) {}

  ngOnInit(): void {
    this.initializeCalendar();
    // HOURS DROPDOWN
    this.initializeHours();
    // 🟣 ELDERLY PART
    this.fetchElderlies();
  }

  //////////////////////////////////////// CALENDAR PART ////////////////////////////////////////

  initializeCalendar(): void {
    this.daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    this.date = new Date();
    this.currMonthNumber = this.date.getMonth();
    this.currMonth = this.months[this.currMonthNumber];
    this.currYear = this.schedulerService.getCurrYear();
    this.days = this.renderCalendar();
    this.activeDate = this.formatDate(this.date); // Initialiser la date active avec la date actuelle
  }

  // Fonction pour mettre à jour la date active lors du clic sur un jour du calendrier
  updateActiveDate(day: number): void {
    // pour ne pas avoir undefined à cause du '-' (qui est de type string)
    if (Number.isInteger(day)) {
      this.activeDate = `${
        this.daysOfWeek[
          new Date(this.currYear, this.currMonthNumber, day).getDay()
        ]
      } ${day < 10 ? '0' : ''}${day}/${
        this.currMonthNumber + 1 < 10 ? '0' : ''
      }${this.currMonthNumber + 1}`;
    }
  }

  // // Fonction utilitaire pour formater la date dans le format souhaité
  formatDate(date: Date): string {
    return `${this.daysOfWeek[date.getDay()]} ${
      date.getDate() < 10 ? '0' : ''
    }${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${
      date.getMonth() + 1
    }`;
  }

  renderCalendar() {
    this.firstDayofMonth = new Date(
      this.currYear,
      this.currMonthNumber,
      1
    ).getDay();
    // mois en cours + .getDay(): Cela appelle la méthode getDay() sur l'objet Date créé précédemment. Cette méthode renvoie le jour de la semaine pour la date spécifiée, où 0 correspond à dimanche, 1 correspond à lundi, etc.
    this.lastDateofMonth = new Date(
      this.currYear,
      this.currMonthNumber + 1,
      0
    ).getDate();
    // new DATE ( currYear, currMonth + 1 (parce qu'on veut le mois précédent), 0 => 0 comme jour, en js, signifie le dernier jour du mois précédent (d'où le +1). Donc, cela nous donne le dernier jour du mois actuel.)
    this.lastDayofMonth = new Date(
      this.currYear,
      this.currMonthNumber,
      this.lastDateofMonth
    ).getDay();
    this.lastDayofPrevMonth = new Date(
      this.currYear,
      this.currMonthNumber,
      0
    ).getDate();
    let daysArray: any[] = [];

    // 🛑 Nettoyer le tableau
    daysArray.length = 0;

    // Last DAY ON PREV MONTH
    for (let i = this.firstDayofMonth; i > 0; i--) {
      daysArray.push((this.lastDayofPrevMonth - i + 1).toString());
      // 🛑
    } //cette boucle ajoute les jours du mois précédent à daysArray dans l'ordre décroissant, en commençant par le dernier jour du mois précédent et en remontant jusqu'au premier jour de la semaine du mois actuel. Cela permet de remplir les cases du calendrier qui correspondent aux jours du mois précédent avant le premier jour du mois actuel.

    // ALL DAYS OF CURRENT MONTH
    for (let i = 1; i <= this.lastDateofMonth; i++) {
      daysArray.push(i);
    }

    // FIRST DAY ON NEXT MONTH
    for (let i = this.lastDayofMonth; i < 6; i++) {
      // 🛑
      daysArray.push((i - this.lastDayofMonth + 1).toString());
    }
    return daysArray;
  }

  getPREVMonthAndDays() {
    this.currMonthNumber -= 1;
    if (this.currMonthNumber < 0) {
      // Si le mois devient négatif, revenir à décembre de l'année précédente
      this.currMonthNumber = 11; // Décembre est 11 car les mois sont indexés de 0 à 11
      this.currYear -= 1; // Diminuer l'année
    }
    this.currMonth = this.months[this.currMonthNumber];
    this.days = this.renderCalendar();
  }

  getNEXTMonthAndDays() {
    this.currMonthNumber += 1;
    if (this.currMonthNumber > 11) {
      // Si le mois devient supérieur à 11, revenir à janvier de l'année suivante
      this.currMonthNumber = 0; // Janvier est 0 car les mois sont indexés de 0 à 11
      this.currYear += 1; // Augmenter l'année
    }
    this.currMonth = this.months[this.currMonthNumber];
    this.days = this.renderCalendar();
  }

  isActive(day: number) {
    const currentDate = new Date(); // Créer un objet Date représentant la date actuelle

    // Comparer le jour de la semaine avec le jour actuel, le mois et l'année avec la date actuelle
    return (
      day === currentDate.getDate() &&
      this.currMonthNumber === currentDate.getMonth() &&
      this.currYear === currentDate.getFullYear()
    );
  }
  // 🛑
  isNonActive(day: number): boolean {
    return typeof day == 'string';
  }

  // DIRECTION
  goToToday() {
    this.currMonthNumber = this.date.getMonth();
    this.currYear = this.date.getFullYear();
    this.currMonth = this.months[this.currMonthNumber];
    this.days = this.renderCalendar();
  }

  // TOGGLE
  // que les forment s'ouvre avec les data correspondants à la sortie
  toggleFormEDIT(outing: any) {
    //console.log('??' + this.isFormOpenEDIT);
    this.selectedOutingForEdit = outing;
    this.isFormOpenEDIT = !this.isFormOpenEDIT;
  }
  toggleFormDELETE(outing: any) {
    //console.log('??' + this.isFormOpenDELETE);
    this.selectedOutingForDelete = outing;
    this.isFormOpenDELETE = !this.isFormOpenDELETE;
  }

  // HOURS DROPDOWN
  initializeHours(): void {
    this.hours = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ];
  }

  selectDate(day: number): void {
    this.selectedDate = new Date(this.currYear, this.currMonthNumber, day);
    this.isDropdownOpen = true;
    console.log('SELECT DATE : ' + this.selectedDate);
  }
  dropdownPosition: { top: number; left: number } = { top: 0, left: 0 };

  isDropdownOpen: boolean = false;

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  //////////////////////////////////////// 🟣 ELDERLY PART ////////////////////////////////////////

  fetchElderlies(): void {
    this.elderlyService.getAllElderlies().subscribe(
      (data: Elderly[]) => {
        this.elderlies = data;
        console.log('Elderlies fetched successfully', this.elderlies); // CHECK IN CONSOLE
      }
      // ,
      // (error) => {
      //   console.error('Error fetching elderlies', error);
      // }
    );
  }

  selectElderly(elderly: Elderly): void {
    // 💎 Sauvegarde de la personne sélectionnée dans localStorage
    localStorage.setItem('selectedElderly', JSON.stringify(elderly));
    if (this.selectedDate) {
      const selectedDateTime = `${this.selectedDate} ${elderly.pseudo}`;
      // 🚨 🚨 🚨 DECOMMENTER this.saveSelectedDateTime(selectedDateTime); 🚨 🚨 🚨
      //this.saveSelectedDateTime(selectedDateTime, this.selectedElderly );
      this.selectedDate = null;
      console.log('alors !! : ');
    }
  }

  onSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    this.selectedElderly =
      this.elderlies.find((elderly) => elderly.id === selectedId) || null;

    if (this.selectedElderly) {
      localStorage.setItem(
        'selectedElderly',
        JSON.stringify({ Elderly: this.selectedElderly })
      );
    }

    // Vérification que l'elderly est bien stocké
    const storedElderly = localStorage.getItem('selectedElderly');
    if (storedElderly) {
      const elderly = JSON.parse(storedElderly);
      console.log('Elderly stored in localStorage:', elderly);
    }
  }

  confirmClicked = false; // sinon le outings se déclenchent avec la condition "outing.elderly.id === selectedElderly.id"

  confirmSelection(): void {
    if (this.selectedElderly) {
      this.fetchOutings(this.selectedElderly.id);
      // déclenchement !
      this.confirmClicked = true;
    }
  }

  //////////////////////////////////////// 🟡 OUTING PART  ////////////////////////////////////////

  fetchOutings(elderlyId: string): void {
    //setTimeout(() => {
    this.outingService
      .getAllOutings(this.selectedElderly)
      .subscribe((data: Outing[]) => {
        this.outings = data.sort((a, b) => {
          const dateA =
            a.outingDates[0] instanceof Date
              ? a.outingDates[0]
              : new Date(a.outingDates[0]);
          const dateB =
            b.outingDates[0] instanceof Date
              ? b.outingDates[0]
              : new Date(b.outingDates[0]);

          return dateA.getTime() - dateB.getTime();
        });
      });
    //}, 60000); // Simule un délai (1 MIN ) POUR L AFFICHAGE DU MESSAGE SI AUCUN OUTINGS !!!!
  }

  // FROM HOURS DROPDOWN

  // Définition de la fonction toISOStringWithoutTimezone
  toTimestampFormat(date: Date): string {
    const zero = (number: number) =>
      number < 10 ? '0' + number : number.toString();

    const year = date.getFullYear();
    const month = zero(date.getMonth() + 1); // Les mois commencent à 0
    const day = zero(date.getDate());
    const hours = zero(date.getHours());
    const minutes = zero(date.getMinutes());
    const seconds = zero(date.getSeconds());

    // Construire la chaîne de date au format ISO sans information de fuseau horaire
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  selectTime(hour: string): void {
    this.selectedTime = hour; // 🙏
    if (this.selectedDate) {
      const [hourPart, minutePart] = hour
        .split(':')
        .map((part) => parseInt(part, 10));
      this.selectedDate.setHours(hourPart, minutePart);

      const selectedDateTime = this.toTimestampFormat(this.selectedDate);
      const selectedElderly = localStorage.getItem('selectedElderly');
      if (selectedElderly) {
        const elderly = JSON.parse(selectedElderly);
        //this.saveSelectedDateTime(selectedDateTime, elderly.id);
      }

      //this.selectedDate = null;
      console.log(
        'SELECT TIME 🕘 is : ' +
          selectedDateTime +
          ' TYPE 🕘 is : ' +
          typeof selectedDateTime
      );
    }
  }
  createOuting(): void {
    if (this.selectedDate !== null && this.selectedElderly) {
      const selectedDateTime = this.toTimestampFormat(this.selectedDate);
      const newOuting: Outing = {
        id: '123e4567-e89b-12d3-a456-426614174000', // histoire de ... sera override par le BACK
        outingDates: [new Date(selectedDateTime)],
        elderly: this.selectedElderly as Elderly,
      };

      this.outingService.createNewOuting(newOuting).subscribe({
        next: (createdOuting) => console.log('Outing created:', createdOuting),
        error: (error) => console.error('Error creating outing:', error),
      });
    } else {
      console.error('selectedDate or selectedElderly is null');
    }
  }
}
