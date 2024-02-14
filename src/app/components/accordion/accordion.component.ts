import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  items: { title: string; content: string; active?: boolean }[] = [
    {
      title:
        'Comment établir une communication efficace avec la personne âgée?',
      content:
        "Conseils : \n\n●  Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.\n\n",
    },
    {
      title: 'Comment créer une expérience positive pour la personne âgée?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title:
        "Comment favoriser l'inclusion et la participation active de la personne âgée?",
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title: 'Comment gérer les différences culturelles ou générationnelles?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title:
        'Comment maintenir une relation de confiance avec la personne âgée?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title:
        'Que faire si la personne âgée ne vous laisse pas repartir après la sortie?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title: 'Que faire si la personne âgée pleure pendant la sortie?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title: 'Comment réagir face à des signes de détresse émotionnelle?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
    {
      title: 'Comment gérer des comportements difficiles ou agressifs?',
      content:
        "Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.Conseils : \n● Restez calme et évitez la confrontation. \n● Essayez de comprendre les raisons du comportement. \n● Signalez toute situation problématique à l'association.",
    },
  ];

  itemClicked($index: number) {
    // if item TRUE => FALSE
    if (this.items[$index].active) {
      this.items[$index].active = false;
    } else {
      // if FALSE item => TRUE & all others => FALSE
      this.items.forEach((item, index) => {
        item.active = index === $index;
      });
    }
  }

}
