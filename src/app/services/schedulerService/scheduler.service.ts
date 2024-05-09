import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  constructor() { }
  // GETTING date, current year, current month
  date = new Date();
  currYear = this.date.getFullYear();
  
  getCurrYear(){
    return this.currYear;
  }

  // FORMAT DATE DU TITLE OUTINGS PART
  // Fonction utilitaire pour formater la date dans le format souhaité
formatDate(date: Date): string {
  return `${this.daysOfWeek[date.getDay()]} ${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;
}
  
}

