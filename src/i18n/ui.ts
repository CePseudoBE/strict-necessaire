const fr = {
  meta: {
    title: "Le Strict Nécessaire · Outils IA sur mesure pour PME, Bruxelles",
    description:
      "Studio IA à deux, à Bruxelles. On construit des outils qui font à votre place le travail long, répétitif et vérifiable. Si un tableur suffit, on vous le dit.",
    locale: "fr_BE",
    ogImageAlt:
      "Bureau en bois vu du dessus : pile de procès-verbaux surlignés, tampon, encreur violet et surligneur jaune.",
    city: "Bruxelles",
  },
  skipLink: "Aller au contenu",
  nav: {
    label: "Navigation principale",
    refus: "Ce qu'on refuse",
    artemis: "Artemis",
    duo: "Nous deux",
    contact: "Contact",
    switchLabel: "English version",
    switchText: "EN",
  },
  hero: {
    label: "Studio IA à deux · Bruxelles",
    titleBefore: "L'IA, mais",
    titleMark: "seulement",
    titleAfter: "là où il en faut.",
    lead: "On construit des outils qui font à votre place le travail long, répétitif et vérifiable. Si un tableur suffit, on vous le dit et on ne vous facture pas d'IA.",
    cta: "Montrez-nous votre tâche pénible",
    demoLabel: "Démonstration : une demande client analysée contre des PV",
    from: "De : bureau d'études",
    subject: "Objet : demande de prix, 14 blocs-portes",
    greeting: "Bonjour, pour le chantier de l'école, il nous faudrait :",
    requirements: [
      {
        text: "résistance au feu EI1 30",
        verdict: "Couvert · PV 114",
        status: "ok",
      },
      {
        text: "vantail de 1030 x 2315 mm",
        verdict: "Couvert · PV 114",
        status: "ok",
      },
      {
        text: "oculus vitré 400 x 600 mm",
        verdict: "Une question au spécialiste",
        status: "warn",
      },
      {
        text: "ferme-porte encastré",
        verdict: "Hors PV choisis",
        status: "no",
      },
      {
        text: "finition stratifiée chêne",
        verdict: "Sans incidence",
        status: "ok",
      },
    ],
    stamp: "Analysé · 5 exigences · 1 question",
    disclaimer: "Exemple inventé pour la démonstration.",
    replay: "Rejouer",
  },
  refus: {
    label: "Ce qu'on refuse de construire",
    title: "Trois projets qu'on vous déconseillera.",
    items: [
      {
        title: "Un chatbot sur votre page d'accueil",
        text: "Vos clients veulent une réponse, pas une conversation. On préfère un outil interne qui aide votre équipe à répondre plus vite et juste.",
      },
      {
        title: "Une IA qui décide toute seule",
        text: "Dans un métier technique, quelqu'un signe. Nos outils préparent le dossier, posent les bonnes questions à votre spécialiste, et lui laissent le dernier mot.",
      },
      {
        title: "De l'IA pour dire qu'on en fait",
        text: "Si le problème se règle avec une règle métier, un formulaire ou un script, c'est ce qu'on livre. C'est moins cher et ça ne se trompe pas.",
      },
    ],
  },
  artemis: {
    label: "Ce qu'on a construit",
    title: "Artemis vérifie une demande client contre vos PV.",
    intro:
      "Chaque demande doit être comparée, ligne par ligne, aux procès-verbaux qui disent ce que vous avez le droit de vendre. À la main, c'est long et rébarbatif. Artemis fait la lecture, votre spécialiste garde la décision.",
    steps: [
      {
        title: "Le mail arrive",
        text: "On part du message du client, tel qu'il est.",
        alt: "Enveloppe ouverte posée sur un bureau, une lettre dépasse.",
      },
      {
        title: "On joint les pièces",
        text: "Plans, métrés, cahier des charges : tout ce qui accompagne la demande.",
        alt: "Plans de bâtiment réunis par un trombone.",
      },
      {
        title: "On choisit les PV",
        text: "Vous sélectionnez les procès-verbaux à comparer.",
        alt: "Cinq classeurs verts alignés, l'un d'eux tiré vers le bas.",
      },
      {
        title: "Quelques questions",
        text: "L'IA analyse, puis demande au spécialiste ce qu'elle ne peut pas trancher.",
        alt: "Trois notes adhésives jaunes et un stylo.",
      },
      {
        title: "Le PDF technique",
        text: "Un document prêt à relire et à envoyer.",
        alt: "Dossier vert marqué d'un tampon violet.",
      },
    ],
    viewpointLabel: "Choisir votre point de vue",
    viewpoints: [
      {
        id: "dir",
        label: "Vous dirigez",
        args: [
          {
            title: "Vous répondez à plus d'offres",
            text: "Aujourd'hui, on trie et on ne répond qu'à certaines demandes, faute de temps. Avec la vérification préparée, vous pouvez toutes les traiter.",
          },
          {
            title: "Des heures d'expert rendues",
            text: "Le temps de vos profils les plus chers passe de la lecture de PV à la décision et à la relation client.",
          },
          {
            title: "Une réponse défendable",
            text: "Chaque conclusion renvoie au PV qui la justifie. On sait pourquoi on a dit oui ou non.",
          },
        ],
      },
      {
        id: "met",
        label: "Vous traitez les demandes",
        args: [
          {
            title: "Fini la relecture ligne par ligne",
            text: "L'outil repère les exigences dans le mail et les pièces, et les confronte aux PV choisis.",
          },
          {
            title: "On vous demande l'essentiel",
            text: "Quelques questions courtes, sur les points où votre jugement compte vraiment.",
          },
          {
            title: "Le document est déjà rédigé",
            text: "Vous relisez et corrigez un PDF technique au lieu de partir d'une page blanche.",
          },
        ],
      },
    ],
  },
  duo: {
    label: "Nous deux",
    title: "Deux personnes, et vous parlez à celles qui codent.",
    intro:
      "Pas de commercial, pas de sous-traitance. On vient voir comment vous travaillez, on construit un premier outil sur un vrai cas, et vous jugez sur pièce.",
    people: [
      {
        role: "Backend et infrastructure",
        name: "Axel Hoffmann",
        bio: "Ingénieur backend. Rust et TypeScript en production, hébergement et sécurité compris. Il fait en sorte que l'outil tourne, tienne la charge et garde vos documents chez vous.",
      },
      {
        role: "Intelligence artificielle",
        name: "Ilias Ibishev",
        bio: "Ingénieur informatique, spécialisé en intelligence artificielle. Il conçoit la partie IA de nos outils et la garde là où elle est vraiment utile.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Envoyez-nous la tâche que personne ne veut faire.",
    text: "Décrivez-la en trois lignes. On vous répond si l'IA y est nécessaire, et sinon, ce qu'on ferait à la place.",
    copy: "Copier l'adresse",
    copied: "Adresse copiée",
    selected: "Adresse sélectionnée",
  },
  footer: "Le Strict Nécessaire · Bruxelles · première version du site",
  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas, ou plus.",
    back: "Retour à l'accueil",
  },
};

const en: typeof fr = {
  meta: {
    title: "Le Strict Nécessaire · Custom AI tools for SMEs, Brussels",
    description:
      "A two-person AI studio in Brussels. We build tools that do the long, repetitive, verifiable work for you. If a spreadsheet will do, we'll tell you.",
    locale: "en_GB",
    ogImageAlt:
      "Wooden desk seen from above: a stack of highlighted reports, a rubber stamp, a purple ink pad and a yellow highlighter.",
    city: "Brussels",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Main navigation",
    refus: "What we refuse",
    artemis: "Artemis",
    duo: "The duo",
    contact: "Contact",
    switchLabel: "Version française",
    switchText: "FR",
  },
  hero: {
    label: "Two-person AI studio · Brussels",
    titleBefore: "AI, but",
    titleMark: "only",
    titleAfter: "where it's needed.",
    lead: "We build tools that do the long, repetitive, verifiable work for you. If a spreadsheet will do, we say so and we don't bill you for AI.",
    cta: "Show us your most tedious task",
    demoLabel: "Demo: a customer request checked against test reports",
    from: "From: engineering office",
    subject: "Subject: quote request, 14 door sets",
    greeting: "Hello, for the school project, we need:",
    requirements: [
      {
        text: "fire resistance EI1 30",
        verdict: "Covered · Report 114",
        status: "ok",
      },
      {
        text: "1030 x 2315 mm door leaf",
        verdict: "Covered · Report 114",
        status: "ok",
      },
      {
        text: "400 x 600 mm vision panel",
        verdict: "One question for the specialist",
        status: "warn",
      },
      {
        text: "concealed door closer",
        verdict: "Outside the selected reports",
        status: "no",
      },
      { text: "oak laminate finish", verdict: "No impact", status: "ok" },
    ],
    stamp: "Checked · 5 requirements · 1 question",
    disclaimer: "Made-up example for the demo.",
    replay: "Replay",
  },
  refus: {
    label: "What we refuse to build",
    title: "Three projects we'll talk you out of.",
    items: [
      {
        title: "A chatbot on your homepage",
        text: "Your customers want an answer, not a conversation. We'd rather build an internal tool that helps your team answer faster and get it right.",
      },
      {
        title: "An AI that decides on its own",
        text: "In a technical trade, someone signs off. Our tools prepare the file, ask your specialist the right questions, and leave them the final say.",
      },
      {
        title: "AI just to say you use AI",
        text: "If a business rule, a form or a script solves the problem, that's what we deliver. It costs less and it doesn't make mistakes.",
      },
    ],
  },
  artemis: {
    label: "What we built",
    title: "Artemis checks a customer request against your test reports.",
    intro:
      "Every request has to be compared, line by line, with the test reports that say what you're allowed to sell. By hand, it's slow and tedious. Artemis does the reading. Your specialist keeps the decision.",
    steps: [
      {
        title: "The email arrives",
        text: "We start from the customer's message, as it is.",
        alt: "Open envelope on a desk, a letter sticking out.",
      },
      {
        title: "We attach the documents",
        text: "Drawings, quantities, specifications: everything that comes with the request.",
        alt: "Building plans held together by a paperclip.",
      },
      {
        title: "We pick the reports",
        text: "You select the test reports to compare against.",
        alt: "Five green binders in a row, one of them pulled down.",
      },
      {
        title: "A few questions",
        text: "The AI analyses, then asks the specialist what it can't settle.",
        alt: "Three yellow sticky notes and a pen.",
      },
      {
        title: "The technical PDF",
        text: "A document ready to review and send.",
        alt: "Green folder marked with a purple stamp.",
      },
    ],
    viewpointLabel: "Choose your point of view",
    viewpoints: [
      {
        id: "dir",
        label: "You run the company",
        args: [
          {
            title: "You answer more requests",
            text: "Today, you sort requests and only answer some of them, for lack of time. With the check prepared for you, you can handle them all.",
          },
          {
            title: "Expert hours given back",
            text: "Your most expensive people move from reading reports to making decisions and talking to customers.",
          },
          {
            title: "An answer you can defend",
            text: "Every conclusion points to the report that justifies it. You know why you said yes or no.",
          },
        ],
      },
      {
        id: "met",
        label: "You handle the requests",
        args: [
          {
            title: "No more line-by-line rereading",
            text: "The tool finds the requirements in the email and the attachments, and checks them against the selected reports.",
          },
          {
            title: "We only ask what matters",
            text: "A few short questions, on the points where your judgement really counts.",
          },
          {
            title: "The document is already written",
            text: "You review and correct a technical PDF instead of starting from a blank page.",
          },
        ],
      },
    ],
  },
  duo: {
    label: "The two of us",
    title: "Two people, and you talk to the ones who write the code.",
    intro:
      "No salespeople, no subcontracting. We come and see how you work, build a first tool on a real case, and you judge the result.",
    people: [
      {
        role: "Backend and infrastructure",
        name: "Axel Hoffmann",
        bio: "Backend engineer. Rust and TypeScript in production, hosting and security included. Makes sure the tool runs, handles the load and keeps your documents on your side.",
      },
      {
        role: "Artificial intelligence",
        name: "Ilias Ibishev",
        bio: "Computer engineer specialised in artificial intelligence. Designs the AI side of our tools and keeps it where it actually helps.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Send us the task nobody wants to do.",
    text: "Describe it in three lines. We'll tell you whether it needs AI, and if not, what we'd do instead.",
    copy: "Copy address",
    copied: "Address copied",
    selected: "Address selected",
  },
  footer: "Le Strict Nécessaire · Brussels · first version of the site",
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist, or no longer does.",
    back: "Back to the home page",
  },
};

export const ui = { fr, en };
export type Locale = keyof typeof ui;

export function translations(locale: string | undefined) {
  return ui[locale === "en" ? "en" : "fr"];
}
