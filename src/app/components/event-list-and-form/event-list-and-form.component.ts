import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-list-and-form',
  standalone: true,
  imports: [],
  templateUrl: './event-list-and-form.component.html',
  styleUrl: './event-list-and-form.component.css',
})
export class EventListAndFormComponent {
  // TOUS CE DONT J AI BESOIN SUR SCHEDULER
  @Input() title!: string;
  @Input() events!: any[]; 
  @Input() formTitle!: string;
  @Input() formButtonLabel!: string;
  @Input() showAddButton!: boolean;
  @Input() showEditButton!: boolean;
  @Input() showDeleteButton!: boolean;
  @Input() showFormInfo!: boolean;
  @Input() showFormDropdownInfo!: boolean;

  // OUTPUT
  @Output() formAction: EventEmitter<any> = new EventEmitter<any>();

  // TOGGLE
  isFormOpen = false;

  toggleForm(actionType: string) {
    // Si l'action est 'add' ou 'edit' ou 'delete', basculez isFormOpen
    if (
      actionType === 'add' ||
      actionType === 'edit' ||
      actionType === 'delete' ||
      actionType === 'close'
    ) {
      this.isFormOpen = !this.isFormOpen;
    }
    this.formAction.emit({ actionType: actionType, eventData: null });
  }

  // ACTION TO DYNAMISE delete/edit FORM
  @Output() actionClicked: EventEmitter<string> = new EventEmitter<string>();

  onEditClick() {
    // Émettre un événement lorsque l'utilisateur clique sur le bouton de modification
    this.actionClicked.emit('edit');
    console.log("this.actionClicked.emit('edit');");
  }

  onDeleteClick() {
    // Émettre un événement lorsque l'utilisateur clique sur le bouton de suppression
    this.actionClicked.emit('delete');
    console.log("this.actionClicked.emit('delete');");
  }
}
