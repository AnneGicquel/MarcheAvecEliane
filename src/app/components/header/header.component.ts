import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OutSideClickDirective } from '../../directives/outside-click.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, OutSideClickDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // TOGGLE MOBILE MENU
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Détection du clic sur un lien dans le menu
    this.el.nativeElement
      .querySelectorAll('.menu-item a')
      .forEach(
        (anchor: {
          addEventListener: (arg0: string, arg1: (event: any) => void) => void;
          getAttribute: (arg0: string) => string;
        }) => {
          anchor.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            const targetId = anchor.getAttribute('href').substring(1); // Récupérer l'identifiant de la section cible
            const targetElement = document.getElementById(targetId); // Trouver l'élément de la section cible
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              }); // Faire défiler la page vers la section cible
            }
          });
        }
      );
  }

  ngAfterViewInit() {
    const menuBurger = this.el.nativeElement.querySelector('.menuBurger');
    const navbarToSidebar =
      this.el.nativeElement.querySelector('.navbarToSidebar');

    this.renderer.listen(menuBurger, 'click', () => {
      const hasMobileMenuClass =
        navbarToSidebar.classList.contains('mobileMenu');

      if (hasMobileMenuClass) {
        this.renderer.removeClass(navbarToSidebar, 'mobileMenu');
      } else {
        this.renderer.addClass(navbarToSidebar, 'mobileMenu');
      }
    });
  }

  // TOGGLE DROPDOWN
  isOpenAboutUs = false;
  isOpenMutualAid = false;
  isOpenAccountSettings = false;

  toggleAboutUs = () => {
    this.isOpenAboutUs = !this.isOpenAboutUs;

    this.isOpenMutualAid = false;
    this.isOpenAccountSettings = false;
  };

  toggleMutualAid = () => {
    this.isOpenMutualAid = !this.isOpenMutualAid;

    this.isOpenAboutUs = false;
    this.isOpenAccountSettings = false;
  };

  toggleAccountSettings = () => {
    this.isOpenAccountSettings = !this.isOpenAccountSettings;

    this.isOpenAboutUs = false;
    this.isOpenMutualAid = false;
  };
}
