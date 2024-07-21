import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SchedulerService } from '../../services/schedulerService/scheduler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
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
  firstDayofMonth!: number;
  lastDateofMonth!: number;
  lastDayofPrevMonth!: number;
  lastDayofMonth!: number;
  // TESTTTT
  activeDate!: string; // Variable pour stocker la date active
  nonActiveDay: boolean[] = [];

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    this.date = new Date();
    this.currMonthNumber = this.date.getMonth();
    this.currMonth = this.months[this.currMonthNumber];
    this.currYear = this.schedulerService.getCurrYear();
    this.days = this.renderCalendar();
    // TESTTT 🔴
    this.initializeCalendar();
  }

  // TESTTTT 🔴
  initializeCalendar(): void {
    this.daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    this.date = new Date();
    this.currMonthNumber = this.date.getMonth();
    this.currMonth = this.months[this.currMonthNumber];
    this.currYear = this.schedulerService.getCurrYear();
    this.days = this.renderCalendar();
    this.activeDate = this.schedulerService.formatDate(this.date); // Initialiser la date active avec la date actuelle
    console.log('initializeCalendar OK');
  }
  @Output() activeDateChange = new EventEmitter<string>(); // Propriété de sortie pour émettre la date active

  // Màj de la date active au click sur un jour du calendar
  updateActiveDate(day: number): void {
    if (Number.isInteger(day)) {
      // pour ne pas avoir undefined à cause du '-' (qui est de type string)
      this.activeDate = `${
        this.daysOfWeek[
          new Date(this.currYear, this.currMonthNumber, day).getDay()
        ]
      } ${day < 10 ? '0' : ''}${day}/${
        this.currMonthNumber + 1 < 10 ? '0' : ''
      }${this.currMonthNumber + 1}`;
      console.log('updateActiveDate OK ' + this.activeDate);
      // Émettre la date active mise à jour
      this.activeDateChange.emit(this.activeDate);
    }
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
    const currentDate = new Date();

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
    this.updateActiveDate(this.date.getDate());
  }
}
