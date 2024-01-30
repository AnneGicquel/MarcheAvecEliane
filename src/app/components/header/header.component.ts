import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OutSideClickDirective } from '../../directives/outside-click.directive';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, OutSideClickDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // TOGGLE MOBILE MENU
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const menuBurger = this.el.nativeElement.querySelector('.menuBurger');
    const navbarToSidebar = this.el.nativeElement.querySelector('.navbarToSidebar');

    this.renderer.listen(menuBurger, 'click', () => {
      const hasMobileMenuClass = navbarToSidebar.classList.contains('mobileMenu');

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



