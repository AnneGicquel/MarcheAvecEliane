import { Component, OnInit } from '@angular/core';
import { Outing } from '../../models/outing.model';
import { Elderly } from '../../models/elderly.model';
import { Coordinator } from '../../models/coordinator.model';
import { SchedulerService } from '../../services/schedulerService/scheduler.service';
import { ElderlyService } from '../../services/elderly/elderly.service';
import { OutingService } from '../../services/outing/outing.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
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
  activeDate!: string;
  firstDayofMonth!: number;
  lastDateofMonth!: number;
  lastDayofPrevMonth!: number;
  lastDayofMonth!: number;
  isFormOpenEDIT = false;
  selectedOutingLineForEdit: any = null;
  isFormOpenDELETE = false;
  selectedOutingForDelete: any = null;
  // HOURS DROPDOWN
  selectedDate: Date | null = null;
  hours: string[] = [];
  selectedTime!: string;
  // 🟣 ELDERLY PART
  elderlies: Elderly[] = [];
  selectedElderly: Elderly | null = null;
  // 🟡 OUTING PART
  outings: Outing[] = [];
  // COORDINATOR
  coordinator!: Coordinator;
  // 🟢 MOBILE PART
  activeTab: string = 'calendarArticle'; // tab par défaut
  isMobile: boolean = false;

  constructor(
    private schedulerService: SchedulerService,
    // private contentManagementservice: ContentManagementService,
    private elderlyService: ElderlyService,
    private outingService: OutingService
  ) {}

  ngOnInit(): void {
    this.initializeCalendar();
    // HOURS DROPDOWN
    this.initializeHours();
    // 🟣 ELDERLY PART
      this.fetchElderlies();
     


    // 🟢 MOBILE PART
    this.setupTabButtons(); // tabs mngmt
    // 🟦 PERSISTENCE LS
   this.loadStoredData(); // ALL DATA
   // OUTINGS
    // const confirmClicked = localStorage.getItem('confirmClicked'); // CLIC ON CONFIRM BTN
    // // if (confirmClicked === 'true') {
    // //   this.confirmClicked = true;
    // // } else {
    // //   this.confirmClicked = false;
    // // }
  }

  
  //////////////////////////////////////// 🟦 PERSISTENCE /////////////////////////////////////////
  // load all data from LS
//   loadStoredData(): void {
    
//     const storedElderly = localStorage.getItem('selectedElderly');
//     if (storedElderly) {
//       this.selectedElderly = JSON.parse(storedElderly);
//     }
//     else if (storedElderly === null || storedElderly === undefined) {
//       console.warn('No selectedElderly data found in localStorage.');
//       return;
//     }
//     const storedOutings = localStorage.getItem('outings');
//     if (storedOutings) {
//       this.outings = JSON.parse(storedOutings);
//     }
// }
loadStoredData(): void {
  // Récupérer les données stockées pour selectedElderly
  const storedElderly = localStorage.getItem('selectedElderly');

  // Vérifier si storedElderly est null ou undefined
  if (storedElderly === null || storedElderly === undefined) {
    console.warn('No selectedElderly data found in localStorage.');
    return;
  }

  let parsedElderly;
  try {
    parsedElderly = JSON.parse(storedElderly);
  } catch (error) {
    console.warn('Error parsing selectedElderly data from localStorage:', error);
    return;
  }

  // Vérifier si parsedElderly est bien un objet
  if (typeof parsedElderly === 'object') {
    this.selectedElderly = parsedElderly;
  } else {
    console.warn('Invalid elderly data found in localStorage.');
    return;
  }

  // Charger les sorties (outings) s'il y en a dans le localStorage
  const storedOutings = localStorage.getItem('outings');
  if (storedOutings) {
    try {
      this.outings = JSON.parse(storedOutings);
    } catch (error) {
      console.warn('Error parsing outings data from localStorage:', error);
    }
  }
}


  storeOutings(): void {
    localStorage.setItem('outings', JSON.stringify(this.outings));
  }

  //////////////////////////////////////// CALENDAR PART ////////////////////////////////////////

  initializeCalendar(): void {
    this.daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    this.date = new Date();
    this.currMonthNumber = this.date.getMonth();
    this.currMonth = this.months[this.currMonthNumber];
    this.currYear = this.schedulerService.getCurrYear();
    this.days = this.renderCalendar();
    this.activeDate = this.formatDate(this.date); // Initialise active date with actual date
  }

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

  // date in rigth format
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

    // Nettoyer le tableau
    daysArray.length = 0;

    // Last DAY ON PREV MONTH
    for (let i = this.firstDayofMonth; i > 0; i--) {
      daysArray.push((this.lastDayofPrevMonth - i + 1).toString());
    } //cette boucle ajoute les jours du mois précédent à daysArray dans l'ordre décroissant, en commençant par le dernier jour du mois précédent et en remontant jusqu'au premier jour de la semaine du mois actuel. Cela permet de remplir les cases du calendrier qui correspondent aux jours du mois précédent avant le premier jour du mois actuel.

    // ALL DAYS OF CURRENT MONTH
    for (let i = 1; i <= this.lastDateofMonth; i++) {
      daysArray.push(i);
    }

    // FIRST DAY ON NEXT MONTH
    for (let i = this.lastDayofMonth; i < 6; i++) {
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
    this.isFormOpenDELETE = false; // closing DELETE
    this.selectedOutingLineForEdit = outing;
    this.isFormOpenEDIT = !this.isFormOpenEDIT;
  }
  toggleFormDELETE(outing: any) {
    //console.log('??' + this.isFormOpenDELETE);
    this.isFormOpenEDIT = false; // closing EDITform
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
    // close edit,delete forms !
    this.isFormOpenEDIT = false;
    this.isFormOpenDELETE = false;
    console.log('SELECT DATE : ' + this.selectedDate);
  }
  dropdownPosition: { top: number; left: number } = { top: 0, left: 0 };

  isDropdownOpen: boolean = false;

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  //////////////////////////////////////// 🟣 ELDERLY PART ////////////////////////////////////////

  fetchElderlies(): void {
    // 🟦 LS
    this.elderlyService.getAllElderlies().subscribe((elderlies) => {
      // sort pseudo by alphabetic order
      this.elderlies = elderlies.sort((a, b) => a.pseudo.localeCompare(b.pseudo));
      
      if (this.elderlies.length > 0) {
        this.selectedElderly = this.elderlies[-1];
        this.storeSelectedElderly(); // Save by defaut (-1 => select a pseudo)
        }
    });
  }

  selectElderly(elderly: Elderly): void {
    localStorage.setItem('selectedElderly', JSON.stringify(elderly));
  }
  // 🟦 LS
  storeSelectedElderly(): void {
    localStorage.setItem(
      'selectedElderly',
      JSON.stringify(this.selectedElderly)
    );
  }

  onSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    console.log("selectELEMENT " , selectElement) //si je selectionne ''; j'ai ce que je veux !!
    const selectedId = selectElement.value;
    console.log("selectID " , selectedId) 
    

    if (selectedId === '') {
        // 🟦 clear LS
        localStorage.removeItem('selectedElderly');
        localStorage.removeItem('outings');
        localStorage.removeItem('confirmClicked');
        this.selectedElderly = null;
        this.confirmClicked = false;
        console.log('LocalStorage a été réinitialisé');
    } 
    else {
        this.selectedElderly = this.elderlies.find((elderly) => elderly.id === selectedId) || null;
        if (this.selectedElderly) {
            localStorage.setItem('selectedElderly', JSON.stringify(this.selectedElderly));
            this.confirmClicked= false;
        }
    }
}

  confirmClicked = false; // sinon le outings se déclenchent avec la condition "outing.elderly.id === selectedElderly.id"

  // 🟦 LS
  confirmSelection(): void {
    if (this.selectedElderly) {
        this.fetchOutings(this.selectedElderly.id);
        this.confirmClicked = true;
       // localStorage.setItem('confirmClicked', 'true');
    }
}
  // // 🟦 LS
  // cancelConfirmation(): void {
  //   this.confirmClicked = false;
  //   localStorage.setItem('confirmClicked', 'false');
  // }

  //////////////////////////////////////// 🟡 OUTING PART  ////////////////////////////////////////
  // GET ALL OUTINGS
  // fetchOutings(elderlyId: string): void {
  //   //setTimeout(() => {
  //   this.outingService
  //     .getAllOutings(this.selectedElderly)
  //     .subscribe((data: Outing[]) => {
  //       this.outings = data.sort((a, b) => {
  //         const dateA =
  //           a.outingDates[0] instanceof Date
  //             ? a.outingDates[0]
  //             : new Date(a.outingDates[0]);
  //         console.log('a.outingDates[0]' + a.outingDates[0]);
  //         const dateB =
  //           b.outingDates[0] instanceof Date
  //             ? b.outingDates[0]
  //             : new Date(b.outingDates[0]);

  //         console.log('RDV ', data);

  //         return dateA.getTime() - dateB.getTime();
  //       });
  //       this.storeOutings(); // 🟦 LS
  //     });
  //   //}, 60000); // Simule un délai (1 MIN ) POUR L AFFICHAGE DU MESSAGE SI AUCUN OUTINGS !!!!
  // }
  fetchOutings(elderlyId: string): void {
    this.outingService.getAllOutings(this.selectedElderly).subscribe((data: Outing[]) => {
      this.outings = data
        .map(outing => ({
          ...outing,
          outingDates: outing.outingDates.map(date => new Date(date))
        }))
        .filter(outing => {
          const outingDate = outing.outingDates[0];
          const currentDate = new Date();
          return outingDate > currentDate;
        })
        .sort((a, b) => {
          const dateA = a.outingDates[0];
          const dateB = b.outingDates[0];
          return dateA.getTime() - dateB.getTime();
        });
  
      this.storeOutings(); // Sauvegarde des sorties en local storage
    });
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
    console.log(" 0 - selectedTime :", this.selectedTime)

    if (this.selectedDate) {
      const [hourPart, minutePart] = hour
        .split(':')
        .map((part) => parseInt(part, 10));
      this.selectedDate.setHours(hourPart, minutePart);
      console.log(" 1 - this.selectedDate before .sethours :", this.selectedDate)
      console.log(" 1bis - this.selectedDate after .sethours :", this.selectedDate.setHours(hourPart, minutePart))
      console.log(" 2 - const [hourPart, minutePart] :", [hourPart, minutePart])

      const selectedDateTime = this.toTimestampFormat(this.selectedDate);
      console.log(" 3 - selectedDateTime :", selectedDateTime)


      const selectedElderly = localStorage.getItem('selectedElderly');
      if (selectedElderly) {
        const elderly = JSON.parse(selectedElderly);
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

  // CREATE OUTING

  // CONDITIONS
  // 🚨
  isDuplicateOuting(newOuting: Outing): boolean {
    return this.outings.some((outing) => {
      // Convertir les dates en instances de Date si nécessaire
      const outingDate = new Date(outing.outingDates[0]);
      const newOutingDate = new Date(newOuting.outingDates[0]);

      return (
        outingDate.getTime() === newOutingDate.getTime() &&
        outing.elderly.id === newOuting.elderly.id
      );
    });
  }
  isDateValid(selectedDate: Date): boolean {
    const currentDate = new Date(); // today
    return selectedDate >= currentDate; // true if sup ou = currentDate
  }

  createOuting(): void {
    if (this.selectedDate !== null && this.selectedElderly) {
      if (!this.isDateValid(this.selectedDate)) {
        alert('🚨 La date de sortie ne peut pas être antérieure à la date du jour.');
        return; // quit
      }
      if (this.selectedDate !== null && this.selectedElderly) {
      const selectedDateTime = this.toTimestampFormat(this.selectedDate);
      const newOuting: Outing = {
        id: '123e4567-e89b-12d3-a456-426614174000', // histoire de ... sera override par le BACK
        outingDates: [new Date(selectedDateTime)],
        elderly: this.selectedElderly as Elderly,
        coordinator: {
          id: 'b1dfe247-27a0-416d-8925-de9bb7608e98' 
        }
      };

      // is duplicate ???
      if (this.isDuplicateOuting(newOuting)) {
        alert('🚨 Cette demande existe déjà. Création en doublon impossible');
        return;
      }

      // reset conditions to close div after click
      this.selectedTime = '';
      this.selectedDate = null;

      this.outingService.createNewOuting(newOuting).subscribe({
        next: (createdOuting) => {
          console.log('Outing created:', createdOuting);
          this.storeOutings(); // 🟦 LS
          if (this.selectedElderly) {
            this.fetchOutings(this.selectedElderly.id); // refresh list
          } else {
            console.error('selectedElderly is null');
          }
        },
        error: (error) => console.error('Error creating outing:', error),
      });
    } else {
      console.error('selectedDate or selectedElderly is null');
    }
  }}
  
  closeOutingCreation(): void {
    // reset conditions to close div after click
    this.selectedTime = '';
    this.selectedDate = null;
  }
  

  // DELETE OUTING
  deleteOuting(elderlyId: string, outingId: string): void {
    this.outingService.deleteOutingByElderlyId(elderlyId, outingId).subscribe({
      next: (response) => {
        console.log('✅ Response deleteOuting:', response);
        this.fetchOutings(elderlyId); // refresh outing list !
        this.storeOutings(); // 🟦 LS
        this.isFormOpenDELETE = false; // closing form
      },
      error: (error) => {
        console.error('🛑 Error deletingOuting:', error);
      },
    });
  }
  // UPDATE OUTING

  onTimeChange(event: any) {
    this.selectedTime = event.target.value;
    console.log('Selected time:', this.selectedTime);
  }

  updateOuting(): void {
    console.log('Update called ✅ ');
    console.log(
      'selectedOutingLineForEdit ✅ ',
      this.selectedOutingLineForEdit
    );
    console.log('selectedTime:', this.selectedTime);

    if (this.selectedOutingLineForEdit && this.selectedTime) {
      const [hourPart, minutePart] = this.selectedTime
        .split(':')
        .map((part) => parseInt(part, 10));
      const updatedDate = new Date(
        this.selectedOutingLineForEdit.outingDates[0]
      );
      updatedDate.setHours(hourPart, minutePart);

      const updatedOuting: Outing = {
        ...this.selectedOutingLineForEdit,
        outingDates: [updatedDate],
      };

      // is duplicated?
      if (this.isDuplicateOuting(updatedOuting)) {
        alert('🚨 Cet horaire existe déjà. Modification impossible');
        return;
      }

      this.outingService
        .updateOutingByElderlyId(
          updatedOuting.elderly.id,
          updatedOuting.id,
          updatedOuting
        )
        .subscribe({
          next: (updatedOutingResponse) => {
            console.log('Outing updated successfully:', updatedOutingResponse);
            this.fetchOutings(this.selectedOutingLineForEdit.elderly.id); // refresh list
            this.storeOutings(); // 🟦 LS
            this.isFormOpenEDIT = false; // closing EDITform
            // reset conditions to not open outing creation div
            this.selectedTime = '';
            this.selectedDate = null;
          },
          error: (error) => {
            console.error('Error updating outing:', error);
          },
        });
    } else {
      console.error('selectedOutingLineForEdit or selectedTime is null');
    }
  }

  /////////////////////// 🟢 MOBILE PART ///////////////////////
  // checkScreenSize(): void {
  //       this.isMobile = window.innerWidth <= 950;
  //     }

  setActiveTab(
    tabName: 'firstStepsArticle' | 'calendarArticle' | 'managementArticle'
  ): void {
    this.isMobile = true;
    this.activeTab = tabName;
    console.log('tabName is : ' + tabName);
    this.toggleTabsDisplay(this.activeTab);
    this.updateActiveTabButton(this.activeTab); //tablinks.active
  }

  toggleTabsDisplay(activeTab: string): void {
    this.isMobile = true;
    const sections = document.querySelectorAll<HTMLElement>('.tabcontent');
    sections.forEach((section: { style: { display: string }; id: any }) => {
      section.style.display = section.id === activeTab ? 'block' : 'none';
    });
  }

  setupTabButtons(): void {
    this.isMobile = true;
    const buttons = document.querySelectorAll('.tablinks');
    buttons.forEach(
      (button: {
        addEventListener: (arg0: string, arg1: (event: any) => void) => void;
      }) => {
        button.addEventListener('click', (event: { target: HTMLElement }) => {
          const sectionId = (event.target as HTMLElement).getAttribute(
            'data-section-id'
          );
          if (sectionId) {
            this.setActiveTab(
              sectionId as
                | 'firstStepsArticle'
                | 'calendarArticle'
                | 'managementArticle'
            );
          }
        });
      }
    );
  }
  updateActiveTabButton(activeTab: string): void {
    this.isMobile = true;
    const buttons = document.querySelectorAll('.tablinks');
    buttons.forEach(
      (button: {
        getAttribute: (arg0: string) => any;
        classList: {
          add: (arg0: string) => void;
          remove: (arg0: string) => void;
        };
      }) => {
        const sectionId = button.getAttribute('data-section-id');
        if (sectionId === activeTab) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    );
  }
}
