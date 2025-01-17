export const navItems = [
  { name: "O mnie", link: "#about" },
  { name: "Projekty", link: "#projects" },
  { name: "Opinie", link: "#testimonials" },
  { name: "Kontakt", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Valuing close collaboration with clients",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Out-of-this-world solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Creating by",
    description: "connecting technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "lg:justify-end  md:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Communication is clear and open",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Solving the most advanced problems",
    description: "with me",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like me to create a website or project for you?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Task Management Tool",
    des: "A web application that enables users to create and manage workspaces, projects, and tasks collaboratively. It features calendar views, drag-and-drop status updates, and comprehensive analytics, with authentication and database management handled by Appwrite.",
    img: "/projekt1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/app.svg"],
    link: "https://task-manager-phi-khaki.vercel.app",
  },
  {
    id: 2,
    title: "Expense Tracker",
    des: "A web application for managing personal finances, allowing users to track income and expenses linked to bank accounts. It supports CSV imports for transaction history and provides financial insights through visualizations and analytics.",
    img: "/projekt2.png",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/c.svg",
      "hono.svg",
    ],
    link: "https://saas-golon.vercel.app",
  },
  {
    id: 3,
    title: "AI Design Webpage",
    des: "A website showcasing AI-powered tools for generating creative and functional design solutions, featuring an intuitive interface.",
    img: "/projekt3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://ai-design-mocha.vercel.app/",
  },
  {
    id: 4,
    title: "Car Explorer",
    des: "A web application for exploring and comparing cars, offering detailed specifications, reviews, and advanced filters for informed decision-making.",
    img: "/projekt4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://car-platform.vercel.app/",
  },
  {
    id: 5,
    title: "Learning Management System Platform",
    des: "A fullstack web application for managing digital learning content, with role-based access for teachers and users. Teachers can create courses by adding chapters, videos, and descriptions, with authentication via Clerk and payment processing through Stripe.",
    img: "/projekt5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "stripe.svg"],
    link: "https://golon-lms.vercel.app/sign-in",
  },
  {
    id: 6,
    title: "E-commerce managed by CMS",
    des: "A scalable e-commerce solution integrated with a CMS, enabling seamless content display and management. It features product filtering, secure payments via Stripe, and dynamic data fetching from the CMS for a smooth and user-friendly shopping experience.",
    img: "/projekt6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "stripe.svg"],
    link: "https://store-store.vercel.app/",
  },
  {
    id: 7,
    title: "Content Management System for E-commerce",
    des: "A robust platform for managing multiple e-commerce stores, built with Next.js for performance and scalability. It allows users to create and manage stores with features like billboards, categories, products, and more, with support for filtering, archiving, and dark/light mode customization.",
    img: "/projekt7.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://store-admin-two-sigma.vercel.app/sign-in",
  },
  {
    id: 8,
    title: "Physiotherapy Booking Platform",
    des: "A user-friendly platform that enables patients to schedule appointments with a physiotherapist. Features include real-time availability, appointment management, and reminders to streamline the booking process.",
    img: "/projekt8.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "c.svg"],
    link: "https://tomasz-deput-fizjoterapia.vercel.app/",
  },
];

// export const testimonials = [
//   {
//     img: "/Mateo.jpg",
//     altImg: "Zdjęcie klienta Mateusz",
//     quote:
//       "Piotr przykłada szczególną uwagę do detali. Byłem naprawdę pod wrażeniem jego zaangażowania i dbałości o każdy szczegół. Trzy słowa, które szybko opisują współpracę z Piotrem: punktualność, precyzja, erudycja.",
//     name: "Mateusz Sobierski",
//     title: "Social Media Manager",
//   },
//   {
//     img: "/Kuba.jpg",
//     altImg: "Zdjęcie klienta Jakub",
//     quote:
//       "Piotr zawsze sumiennie wykonywał swoje obowiązki. Ten okres współpracy był owocny dla obu stron. Taki pracownik jest dziś na wagę złota.",
//     name: "Jakub Zaręba",
//     title: "Senior Frontend Developer",
//   },
//   {
//     img: "/Matthew.jpg",
//     altImg: "Zdjęcie klienta Matthew",
//     quote:
//       "Piotr konsekwentnie wykazuje niezwykłe zaangażowanie w dążeniu do doskonałości. Jego metodyczne podejście i głęboka wiedza gwarantują bezbłędne rezultaty. Opisując Piotra, powiedziałbym: niezawodny.",
//     name: "Mateusz Różański",
//     title: "Manager - Polbruk",
//   },
//   {
//     img: "/Nikodem.jpg",
//     altImg: "Zdjęcie klienta Nikodem",
//     quote:
//       "Jestem pod ogromnym wrażeniem zdolności Piotra do rozumienia potrzeb klientów oraz doskonałej komunikacji i wizualizacji projektów. Jego wsparcie przy tworzeniu naszej strony internetowej było kluczowe.",
//     name: "Nikodem Andrzejewski",
//     title: "Trener przygotowania motorycznego",
//   },
//   {
//     img: "/Marcin.jpg",
//     altImg: "Zdjęcie klienta Marcin",
//     quote:
//       "Praca z Piotrem nad rozwojem naszej strony internetowej była fantastycznym doświadczeniem. Zaprojektował przyjazną dla użytkownika, atrakcyjną stronę, która doskonale odzwierciedla naszą markę.",
//     name: "Marcin Florczak",
//     title: "Przedsiębiorca",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "React",
//     img: "/re.svg",
//     nameImg: "React",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/next.svg",
//     nameImg: "Next",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/ts.svg",
//     nameImg: "TypeScript",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/tail.svg",
//     nameImg: "Tailwind",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

// export const workExperience = [
//   {
//     id: 1,
//     title: "1. Wyrażasz chęć na podjęcie współpracy",
//     desc: "Skontaktuj się z nami, a ustalimy spotkanie online lub na żywo, gdzie przedstawimy Ci ofertę i podejdziemy indywidualnie do Twoich potrzeb.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "2. Po akceptacji oferty",
//     desc: "Zabieramy się do pracy i przygotowywujemu twoje zlecenie. Przeprowadzamy szerg działań, aby dostarczyć produkt najwyższej jakości, zgodny z Twoimi wytycznymi.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 3,
//     title: "3. Wdrażamy w życie",
//     desc: "Po twojej akceptacji wprowadzamy twoją stronę do sieci. Jeżeli projekt jest aplikacją, przeprowadzamy utrzymanie twojego produktu.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 4,
//     title: "4. Finalny efekt",
//     desc: "Inni użytkownicy mogą odwiedzać Twoją stronę lub aplikację w każym momencie, a Ty możesz się cieszyć, że w końcu masz swoją stronę lub produkt!",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//     link: "https://github.com/PiotrGolon?tab=repositories",
//   },
//   {
//     id: 2,
//     img: "/link.svg",
//     link: "https://www.linkedin.com/in/piotr-golon-477241271",
//   },
// ];
