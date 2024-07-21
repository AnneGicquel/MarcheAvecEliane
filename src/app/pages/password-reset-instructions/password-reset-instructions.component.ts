import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-reset-instructions',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './password-reset-instructions.component.html',
  styleUrl: './password-reset-instructions.component.css'
})
export class PasswordResetInstructionsComponent {
  email: string = '';

  sendPasswordResetLink() {
    if (this.email) {
      
          alert('Rendez-vous dans votre boîte mail ! 📥 \nSi un compte bénévole est associé à votre mail vous recevrez un lien dans votre boîte de réception pour réinitialiser votre mot de passe.  \n \nMail non reçu?  \nVérifiez que l’adresse email saisie est bien la bonne, ou que le mail ne s’est pas glissé dans vos indésirables. 👀 ');
        }}
  
  }
