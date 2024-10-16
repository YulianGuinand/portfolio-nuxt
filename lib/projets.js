export const projets = [
  {
    title: "Yotion,",
    description: "Clone de Notion",
    detail:
      "Yotion est un projet visant à créer un clone de Notion, une application collaborative qui permet de gérer des notes, bases de données et tâches dans une interface unifiée. Pour Yotion, j'ai utilisé Next.js et TypeScript, ce qui m'a permis de construire une application rapide, robuste et performante, en reproduisant les principales fonctionnalités de Notion.",
    detail2:
      "Le développement de Yotion m'a confronté à divers défis techniques, notamment en matière de performance et d'interactions collaboratives. ",
    detail3:
      "L’utilisation de Next.js et TypeScript a permis de garantir une application fluide et évolutive, tout en renforçant mes compétences en développement full-stack. ",
    link: "https://yotion-ten.vercel.app/",
    imagePreview: "/img/yotion_2.png",
    imgsLinks: [
      {
        imgLink: ["/img/yotionImages/image1.png"],
        title: "Next.js avec Clerk pour l'authentification",
        description:
          "Concernant l'authentification, j'ai intégré <strong>Clerk</strong>, une solution <strong>moderne et sécurisée</strong> qui facilite l'inscription et la connexion des utilisateurs via <strong>Google</strong>, <strong>GitHub</strong> ou <strong>email</strong>. Cette approche offre une expérience <strong>utilisateur simplifiée</strong>, tout en garantissant la <strong>sécurité</strong> des données personnelles.",
      },
      {
        imgLink: ["/img/yotionImages/image2.png"],
        title: "Barre latéral",
        description:
          "Une fois connectés, les utilisateurs accèdent à une barre latérale qui facilite la navigation à travers les pages de l'application. Cette barre propose des options telles que la <strong>recherche de notes</strong> par titre, la <strong>personnalisation du thème</strong>, et la <strong>création de nouvelles notes</strong>. Chaque note peut être <strong>modifiée ou supprimée</strong> directement depuis la barre latérale. Les utilisateurs peuvent également accéder à une <strong>poubelle</strong> pour voir les notes supprimées, avec la possibilité de les <strong>restaurer</strong> ou de les <strong>supprimer définitivement</strong>.",
      },
      {
        imgLink: ["/img/yotionImages/image3.png"],
        title: "Fonctionnalité avancée : gestion des sous-notes",
        description:
          "Une des fonctionnalités clés de Yotion est la possibilité de <strong>créer des sous-notes de manière récursive</strong>, offrant une grande flexibilité dans l'organisation des informations. Les utilisateurs peuvent sélectionner une note principale et y ajouter des sous-pages pour mieux structurer leurs idées. Cette fonctionnalité permet de diviser une tâche ou un projet en plusieurs niveaux de détail, facilitant ainsi la gestion de données complexes ou d'idées en cours d'élaboration. Chaque sous-note peut être modifiée ou supprimée de manière indépendante, tout en restant intégrée dans la hiérarchie de la note principale.",
      },
      {
        imgLink: ["/img/yotionImages/image4.png"],
        title: "Rédaction de notes : une expérience Notion-like",
        description:
          "Pour offrir une expérience de rédaction fluide et interactive semblable à celle de Notion, j'ai intégré <strong>Editor.js</strong> dans Yotion. Grâce à cet outil, les utilisateurs peuvent créer et organiser leurs contenus avec une grande flexibilité en utilisant des commandes contextuelles. Par exemple, en tapant '/' dans l'éditeur, ils peuvent insérer des éléments tels qu'une <strong>table</strong>, une <strong>image</strong>, ou des titres de différents niveaux (comme <strong>/heading1</strong>).<br/><br/>Afin de gérer efficacement les fichiers et les images, j'ai couplé Editor.js avec Convex, une solution back-end qui facilite l'upload et le stockage de fichiers. Cette combinaison me permet de proposer une gestion intuitive des médias tout en assurant une synchronisation rapide et fluide des données, directement au sein de l'éditeur.",
      },
      {
        imgLink: ["/img/yotionImages/image5.png"],
        title: "Recherche rapide de notes via raccourci clavier",
        description:
          "Pour améliorer la productivité et la navigation au sein de Yotion, j'ai mis en place un <strong>raccourci clavier</strong> intuitif, similaire à celui que l'on trouve dans des outils comme Notion. En appuyant sur <strong>Ctrl + K</strong>, les utilisateurs peuvent faire apparaître une <strong>fenêtre modale</strong> qui leur permet de rechercher des notes par titre. Cette fonctionnalité rend la navigation plus fluide et rapide, surtout lorsque l'on travaille sur de nombreuses notes à la fois. Une fois la note recherchée, il suffit de la sélectionner dans les résultats pour y accéder directement.",
      },
      {
        imgLink: ["/img/yotionImages/image8.png"],
        title: "Fonctionnalité de publication des notes avec mode Preview",
        description:
          "Dans Yotion, j'ai implémenté une fonctionnalité permettant de <strong>publier des notes</strong> afin que les utilisateurs puissent partager leur contenu avec d'autres, même à l'extérieur de l'application. Chaque note dispose d'un <strong>mode Preview</strong>, où la modification du contenu est désactivée, permettant ainsi une consultation en lecture seule.<br/><br/> Pour cela, un <strong>lien unique</strong> est généré pour chaque note publiée, contenant l'ID de la note ainsi qu'un paramètre indiquant le mode Preview. Lorsque ce lien est accédé, l'application vérifie si l'utilisateur est <strong>connecté</strong> et, si oui, si c'est bien l'auteur de la note. Si l'utilisateur est l'auteur, il pourra <strong>modifier</strong> la note, sinon il aura accès uniquement à la version en lecture seule. De plus, même si un utilisateur n'est pas connecté, il peut toujours visualiser la note en mode Preview, ce qui permet de <strong>partager du contenu librement</strong> sans nécessiter de compte.",
      },
    ],
    tags: ["NextJs", "TailwindCSS", "ConvexBDD", "API"],
  },
];
