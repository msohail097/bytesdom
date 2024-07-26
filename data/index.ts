export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiasts with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
  id: 6,
  title: "Do you want to start a project together?",
  description: "",
  className: "lg:col-span-2 lg:col-start-4 md:col-span-4 md:col-start-4 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "",
  spareImg: "",
}

];

export const projects = [
  {
    id: 1,
    title: "truverifi",
    des: "The website features an SMS application interface allowing users to view and manage their SMS messages. It includes functionalities such as composing new messages, viewing message threads, and sending messages. The interface is built with Vite and ShadCN, providing a clean and responsive user experience.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://sms-app-vite-shadcn.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Medical Care System",
    des: "The Modern Medical Care website offers a wide range of healthcare services, including primary care, ultrasound diagnostics, allergy testing, laboratory services, IV vitamin shots, physicals for work and school, PRP hair restoration, medical weight loss, podiatry, skin condition treatments, disease management, pre-operative clearances, vaccinations, testosterone boosting, IV infusion therapy, asthma relief, and comprehensive home care and cosmetic aesthetics programs. The site also features testimonials, professional doctor profiles, and contact information for multiple locations.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://medical-care-nine.vercel.app/",
  },
  {
    id: 3,
    title: "goat",
    des: "The GOAT website offers a fintech platform providing electronic payment solutions and virtual wallets. Key features include secure payment gateways, international transactions, interoperable QR 3.0 transfers, digital accounts, API for business with white-label options, BIN sponsorship for fast card issuance, and robust security and compliance measures. The platform aims to enhance financial management efficiency with a focus on cost-effective solutions and dedicated support.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://goat-83iz.vercel.app/",
  },
  {
    id: 4,
    title: "Laundry & Swift Dry Cleaning",
    des: "The Laundry Service website offers an online platform for managing laundry services. Key features include scheduling laundry pickups and deliveries, choosing service types (e.g., wash, dry, fold), tracking order status, and making payments. The interface is user-friendly, providing convenience for customers to handle their laundry needs efficiently from home.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://laundry-frontend-blond.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "The team has done an excellent job, providing quick responses and addressing all questions and issues effectively. We are very pleased with their performance and look forward to further collaboration in the future.",
    name: "Kevin Droll",
    title: "Client",
    img:"/germany.svg"
  },
  {
    quote:
      "I had a very positive experience with your company. Everything was handled professionally, and the responsiveness and creativity were outstanding. Thank you! ",
    name: "Sasakutzki",
    title: "Client",
      img:"/germany.svg"
  },
  {
    quote:
      "Working with your company was a fantastic experience. Communication was seamless, and there was a strong understanding of the project. They were consistently available to address any questions. Their teamwork skills were impressive.",
    name: "Sarahfinni",
    title: "Client",
      img:"/australia.svg"
  },
  {
    quote:
      "The company was highly cooperative and delivered excellent results. Their work was impressive, and they demonstrated great professionalism throughout the project.",
    name: "Pranav",
    title: "CLient",
      img:"/usa.svg"
  },
  {
    quote:
      "The company ensured clear communication at every step and effectively brought ideas to reality. They were consistently available to answer questions and make necessary adjustments. The project is now completed and live, and I am excited about the results.",
    name: "Kelly Morgan",
    title: "Client",
      img:"/uk.svg"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
