// "Interface heroPicture" => contenu d'une image
export interface IheroPicture {
  src: string;
  alt: string;
}

export interface IaccordionItem {
  heading: string;
  content: string;
  isActive?: boolean;
}

// "Interface pagesData" => contenu d'une page
export interface IpagesData {
  id: number; // id associé
  category: string; // nom de la page; cat : mutualAid
  subtitle?: string; // facultatif; nom du sous titre (sous-nav) as children page
  heroPicture: IheroPicture; // image : src, alt
  intro?: string; // facultatif; avant accordion
  accordionItem?: IaccordionItem[]; // facultatif; avec elements de chaque item : heading, content, isActive
}

export const PAGESDATA: IpagesData[] = [
  // MUTUAL AID "s CHILDREN
  {
    id: 1,
    category: "mutualAid",
    subtitle: "communication",
    heroPicture: {
      src: "assets/images/pictures/MutualAid2/communication.jpg",
      alt: "test",
    },
    intro:"Ces conseils visent à créer une expérience d'accompagnement enrichissante, centrée sur le respect mutuel et la compréhension. \nLa communication ouverte, la flexibilité et la sensibilité aux besoins individuels sont des éléments clés pour établir des relations positives entre les bénévoles et les personnes âgées.",
    accordionItem: [
      {
        heading:
          "Comment établir une communication efficace avec la personne âgée?",
        content:
          "Conseils : \n • Parlez clairement et à un rythme adapté.\n • Posez des questions ouvertes pour encourager la discussion.\n • Soyez attentif aux signaux non verbaux et répondez de manière empathique.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comment créer une expérience positive pour la personne âgée?",
        content:
          "Conseils : \n • Soyez positif et encourageant.\n • Choisissez des activités qui suscitent des souvenirs heureux.\n • Créez un environnement chaleureux et détendu.\n\n",
        isActive: false,
      },

      {
        heading:
          "Comment favoriser l'inclusion et la participation active de la personne âgée?",
        content:
          "Conseils :\n • Encouragez la personne à donner son avis et à prendre des décisions. \n • Créez un sentiment d'appartenance en intégrant ses intérêts. \n • Assurez-vous qu'elle se sent impliquée dans le choix des activités.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comment gérer les différences culturelles ou générationnelles?",
        content:"Conseils : \n • Informez-vous sur les préférences culturelles de la personne. \n • Respectez les traditions et les normes culturelles. \n • Soyez ouvert à l'apprentissage et à l'échange intergénérationnel.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comment maintenir une relation de confiance avec la personne âgée?",
        content:"Conseils : \n • Soyez fiable et respectez les engagements. \n • Écoutez activement et montrez de l'empathie. \n • Communiquez de manière transparente sur les plans et les activités.\n\n",
        isActive: false,
      },
      {
        heading:
          "Que faire si la personne âgée ne vous laisse pas repartir après la sortie?",
        content:"Conseils : \n • Restez calme et rassurant. \n • Expliquez poliment que vous avez d'autres engagements. \n • Proposez de planifier une autre sortie à l'avenir.\n\n",
        isActive: false,
      },
      {
        heading:
          "Que faire si la personne âgée pleure pendant la sortie?",
        content:"Conseils : \n • Soyez empathique et à l'écoute. \n • Proposez un endroit calme pour discuter. \n • Respectez la confidentialité et la pudeur. \n\n",
        isActive: false,
      },
      {
        heading:
          "Comment réagir face à des signes de détresse émotionnelle?",
        content:"Conseils : \n • Soyez compréhensif et attentionné. \n • Encouragez la communication ouverte. \n • Signalez toute préoccupation à l'association.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comment gérer des comportements difficiles ou agressifs?",
        content:"Conseils : \n • Restez calme et évitez la confrontation. \n • Essayez de comprendre les raisons du comportement. \n • Signalez toute situation problématique à l'association.\n\n",
        isActive: false,
      },
    ],
  },

  {
    id: 2,
    category: "mutualAid",
    subtitle: "santé & sécurité",
    heroPicture: {
      src: "assets/images/pictures/MutualAid2/sante.png",
      alt: "test",
    },
    intro:
      "L'objectif de cette section est de fournir des conseils pratiques aux bénévoles pour les aider à gérer diverses situations tout en garantissant la sécurité et le bien-être des personnes âgées accompagnées.",
    accordionItem: [
      {
        heading:
          "Que faire si la personne âgée montre des signes de détresse physique?",
        content:
          "Conseils : \n • Identifiez rapidement les signes de détresse physique, tels que des difficultés respiratoires ou des douleurs. \n • Appelez immédiatement les services d'urgence si la situation semble grave. \n • Restez calme et assurez à la personne que de l'aide est en route. \n \n",
        isActive: false,
      },
      {
        heading:
          "Comment gérer une situation d'urgence médicale?",
        content:
          "Conseils : \n • Ayez toujours sur vous une liste des contacts d'urgence de la personne accompagnée. \n • En cas d'urgence médicale, appelez les services d'urgence et informez-les de la situation. \n • Restez avec la personne jusqu'à l'arrivée des secours. \n \n",
        isActive: false,
      },

      {
        heading:
          "Protéger contre les conditions météorologiques extrêmes lors des sorties:",
        content:"Conseils :  \n • Vérifiez les prévisions météorologiques avant chaque sortie. \n • En cas de conditions météorologiques extrêmes (chaleur, froid, pluie), adaptez les activités en conséquence. \n • Assurez-vous que la personne est habillée de manière appropriée. \n \n",
        isActive: false,
      },
      {
        heading:
          "Assurer le confort physique de la personne âgée pendant les sorties:",
        content:
          "Conseils : \n • Prévoyez des pauses régulières pour permettre à la personne de se reposer. \n • Portez une attention particulière aux besoins de confort tels que la chaleur ou le froid. \n • Consultez la personne sur son niveau de confort tout au long de l'activité. \n \n",
        isActive: false,
      },
      {
        heading:
          "Que faire si la personne âgée tombe pendant la sortie?",
        content:
          "Conseils :  \n • Appelez immédiatement les services d'urgence si nécessaire.  \n • Restez avec la personne et essayez de la rassurer.  \n • Aidez-la à se relever si cela est sécuritaire, sinon attendez les secours. \n \n",
        isActive: false,
      },
      {
        heading:
          "Que faire en cas de malaise de la personne âgée pendant la sortie?",
        content:
          "Conseils :  \n • Trouvez un endroit sûr pour s'asseoir.  \n • Demandez si la personne a des médicaments sur elle. \n • Appelez les secours si le malaise persiste. \n \n",
        isActive: false,
      },
      {
        heading:
          "Comment garantir la sécurité lors des sorties?",
        content:
          "Conseils :  \n • Choisissez des itinéraires sécurisés et bien éclairés.  \n • Soyez attentif à l'environnement et évitez les zones potentiellement dangereuses.\n • Signalez tout incident ou problème de sécurité. \n \n",
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    category: "mutualAid",
    subtitle: "comportement",
    heroPicture: {
      src: "assets/images/pictures/MutualAid2/comportement.jpg",
      alt: "test",
    },
    intro:
      "La gestion de ces situations nécessite une approche équilibrée, où l'empathie et la fermeté contribuent à maintenir une relation bénévole professionnelle et respectueuse. Les limites doivent être maintenues, mais les sentiments de la personne âgée doivent également être traités avec compassion.",
    accordionItem: [
      {
        heading:
          "Comportements INTOLÉRANTS - Réaffirmer les valeurs et les attentes :",
        content:"Action : \n • Rappeler clairement les valeurs de l'association en matière de respect, d'inclusion et de non-discrimination.\n\nObjectif : \n • Établir des attentes claires quant au comportement respectueux et inclusif.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements INTOLÉRANTS - Intervenir de manière respectueuse :",
        content:
          "Action : \n • Si vous observez un comportement discriminatoire, intervenez calmement mais fermement. \n \n Objectif : \n • Stopper le comportement inapproprié tout en respectant la dignité de chacun.\n\n",
        isActive: false,
      },

      {
        heading:
          "Comportements INTOLÉRANTS - Impliquer les responsables :",
        content:
          "Action : \n • Si nécessaire, impliquez les responsables de l'association pour prendre des mesures appropriées. \n \nObjectif : \n • Assurer une réponse cohérente avec les politiques de l'association.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements INTOLÉRANTS - Communiquer de manière transparente :",
        content:
          "Action :\n • Communiquez ouvertement sur la manière dont l'association aborde ces situations.\n \nObjectif :  \n • Fournir une transparence et démontrer l'engagement envers l'inclusion. \n • Il est crucial de s'assurer que toutes les parties impliquées comprennent les attentes en matière de comportement et que des mesures appropriées sont prises pour maintenir un environnement respectueux et inclusif.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements AFFECTIFS DÉPLACÉS - Maintenir des limites claires :",
        content:
          "Action : \n • Établir et maintenir des limites claires dès le début de l'interaction. \n \nObjectif : \n • Prévenir des situations inconfortables en instaurant des frontières respectueuses.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements AFFECTIFS DÉPLACÉS - Réaffirmer le caractère bénévole de l'interaction :",
        content:
          "Action : \n • Rappeler régulièrement que l'interaction est basée sur le bénévolat et le soutien. \n \nObjectif : \n • Éviter toute confusion sur la nature de la relation.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements AFFECTIFS DÉPLACÉS - Intervenir avec respect et empathie :",
        content:
          "Action : \n • En cas d'avances non désirées, intervenir avec respect et empathie.\n \nObjectif : \n • Clarifier les attentes tout en préservant la dignité de la personne âgée.\n\n",
        isActive: false,
      },
      {
        heading:
          "Comportements AFFECTIFS DÉPLACÉS - Considérer les causes sous-jacentes :",
        content:
          "Action : \n • Évaluer si ces comportements sont liés à des facteurs tels que la solitude ou la confusion mentale. \n\nObjectif : \n • Comprendre la situation dans son contexte pour adapter la réponse.\n\n",
        isActive: false,
      },
      {
        heading:
          "Situations de FLOTTEMENT - Établissez une communication non-verbale rassurante :",
        content:
          "Action : \n • Utilisez des gestes doux, une expression faciale positive et un langage corporel rassurant.\n \nObjectif : \n • Favoriser la compréhension et la sécurité par des signaux non verbaux.\n\n",
        isActive: false,
      },
      {
        heading:
          "Situations de FLOTTEMENT - Utilisez un langage simple et positif :",
        content:
          "Action : \n • Utilisez un langage simple et positif pour communiquer. \n\nObjectif : \n • Faciliter la compréhension et éviter toute confusion due à un langage complexe.\n\n",
        isActive: false,
      },
      {
        heading:
          "Situations de FLOTTEMENT - Orientez la personne dans le temps et l'espace :",
        content:
          "Action : \n • Orientez la personne en lui fournissant des informations sur le temps et l'espace. \n \nObjectif : \n • Aider à situer la personne dans le contexte actuel.\n\n",
        isActive: false,
      },
      {
        heading:
          "Situations de FLOTTEMENT - Évitez de contrarier ou de corriger :",
        content:
          "Action : \n • Évitez de contredire ou de corriger la personne de manière trop directe. \n\nObjectif :  • \nPrévenir la frustration et l'agitation en adoptant une approche douce.\n\n",
        isActive: false,
      },
      {
        heading:
          "Situations de FLOTTEMENT - Engagez des conversations réconfortantes :",
        content:
          "Action : \n • Engagez des conversations sur des sujets familiers et réconfortants. \n\nObjectif : \n • Créer une connexion émotionnelle et prévenir l'isolement.\n\n",
        isActive: false,
      }
    ],
  },

  {
    id: 4,
    category: "mutualAid",
    subtitle: "besoin d'aide",
    heroPicture: {
      src: "assets/images/pictures/MutualAid2/aide.jpg",
      alt: "besoin d'aide test",
    },
    accordionItem: [
      {
        heading:
          "Besoin d'Aide Supplémentaire ?  \n\nTrouvez ici quelqu'un à qui s'adresser en cas de difficultés non couvertes sur la page \"Entraides\". \n\nVoici le Point de Contact Bienveillance, votre canal direct pour obtenir une aide personnalisée en cas de besoin.\n\n Cliquez pour en savoir plus :",
        content:
          " ● Nom de la personne référente : Sophie Gicquel \n\n ● Numéro de téléphone : 01.42.25.14.29 \n\n ● Adresse e-mail : sophie.gicquel@mae.fr \n\n ● Disponibilité :\nLes lundis, mardis, jeudis. \nDe 09:00 à 13:00 - de 14:00 à 18:00.\n\n● Instructions :\n N'hésitez pas à utiliser les informations ci-dessus pour toute question, préoccupation ou besoin de soutien. \nNous sommes là pour vous accompagner dans chaque étape. \nQue vous ayez des interrogations sur nos activités, des préoccupations spécifiques à adresser, ou simplement besoin de discuter,\nnotre Point de Contact Bienveillance est là pour vous offrir une assistance personnalisée.\n\nMerci de faire partie de notre communauté bienveillante ♡ \n\n",
        isActive: false,
      }
    ],
  },

  // ABOUT US"s CHILDREN
  {
    id: 5,
    category: "aboutUs",
    subtitle: "à propos",
    heroPicture: {
      src: "assets/images/pictures/homePage 2/asian-senior-man-sitting-wheelchair-japanese-men-field-31264463.jpeg",
      alt: "à propos test",
    },
  },
  {
    id: 6,
    category: "aboutUs",
    subtitle: "charte de bienveillance",
    heroPicture: {
      src: "assets/images/pictures/homePage 2/asian-senior-man-sitting-wheelchair-japanese-men-field-31264463.jpeg",
      alt: "charte de bienveillance test",
    },
  },
];
