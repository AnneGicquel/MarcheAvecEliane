import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { VolunteerService } from '../../services/volunteer/volunteer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

  export class LoginComponent {

  email!: string;
  password!: string;
  isPasswordVisible: boolean = false;
  isLoggedIn: boolean = false;
  userInitial: string = ''; 

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private volunteerService: VolunteerService
  ) { }

 
  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        const token = response.token;
        const role = response.role;
        console.log('ROLE EST ', role)
        localStorage.setItem('access_token', token);

        if (role === 'VOLUNTEER') {
          // Récupérer les détails du volontaire
          this.volunteerService.getVolunteerByEmail(this.email).subscribe(
            volunteer => {
              localStorage.setItem('volunteer', JSON.stringify(volunteer));
              this.router.navigate(['/accueil']);
            },
            error => {
              console.error('Erreur lors de la récupération des détails du volontaire', error);
            }
          );
        } else if (role === 'COORDINATOR') {
          this.router.navigate(['/gestion_des_demandes']);
        } else {
          console.error('Rôle non reconnu');
        }
      },
      error => {
        console.error('🛑 Erreur lors de la connexion :', error);
        alert('✋ Votre profil ne correspond pas à celui  \nd\'un.e bénévole de Marche avec Éliane ♡')
      }
    );
  }

    // TOGGLE EYE OPEN/CLOSE
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  

  }





  