import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const MY_EMAIL = "dev.sunilbarewar@gmail.com";
export const RESUME_URL =
  "https://drive.google.com/drive/folders/1jZRLDjkmFVdr57QxmQOYmwOQcM9nP2Qj";

export const DATA = {
  name: "Sunil Barewar",
  initials: "SB",
  url: RESUME_URL,
  location: "",
  locationLink: "",
  description:
    "Software Engineer & Mentor. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "In mid 2023, I joined [Sharpener](https://sharpener.tech) to learn to code. Later build — real features, fast systems, and better experiences. From student to engineer & mentor, my journey has been all about growth, curiosity, and helping others find their path in tech",
  avatarUrl: "/profile-photo.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "React Router",
    "Redux",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "GraphQL",
    "Redis",
    "Material UI",
    "AWS (EC2, S3, Lambda, SQS, API Gateway)",
    "Kafka",
    "React Native",
    "Problem Solving",
    "Googling",
    "Shadcn UI",
    "NestJS",
    "CI/CD (Github Actions)",
    "Git",
    "GitHub",
    "Googling",
    "Prompt Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: MY_EMAIL,
    tel: "+917030567706",
    social: {
      Resume: {
        name: "Resume",
        url: RESUME_URL,
        icon: NotebookIcon,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SunilBarewar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sunil-barewar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: `mailto:${MY_EMAIL}`,
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sharpener Tech",
      href: "https://sharpener.tech",
      badges: [],
      location: "Bangalore",
      title: "Software Development Engineer",
      logoUrl: "/sharpenerLogo.webp",
      start: "August 2024",
      end: "Present",
      description: "",
      achievements: [
        "🔹 **Optimized Database Performance**: Indexed the entire database, reducing API response time by 90% and improving overall system performance and saved $600 per month.",
        "🔹 **Scalable Event Tracking System**: Designed and implemented a data tracking system using AWS API Gateway, AWS Lambda, and SQS, capable of handling 9,000+ requests per second.",
        "🔹 **Code Assistant**: Developed an AI-powered Code Assistant feature that helps users understand and resolve issues in their code using Google Gemini and OpenAI.",
        "🔹 **Cloud Migration**: Led the migration of all servers from OVH Cloud to Microsoft Azure, enhancing reliability and scalability.",
        "🔹 **Dynamic Layout System**: Designed and implemented a flexible layout system for both web and mobile dashboards, allowing admins to set layout for user based on conditions.",
        "🔹 **Referral System**: Developed both frontend and backend for a comprehensive referral program, increasing referral-based sign-ups by 10% within the first 3 months.",
        "🔹 **Task Page Redesign**: Revamped the task page UI/UX, reducing page load time by 45% and increasing user retention by 60%.",
        "🔹 **Dynamic Portfolio Generator**: Developed and deployed a fully customizable portfolio generator on Snapit.tech.",
      ],
    },
    {
      company: "Sharpener Tech",
      badges: [],
      href: "https://sharpener.tech",
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/sharpenerLogo.webp",
      start: "January 2024",
      end: "July 2024",
      description: "",
      achievements: [
        "🔹 **Revamped Landing Pages**: Redesigned and developed landing pages for Snapit and Evalit using Next.js and React.js, improving page speed by 50%.",
        "🔹 **Automated Meeting Scheduling**: Integrated Google Calendar and Google Meet APIs, enabling seamless meeting scheduling automation, reducing manual scheduling time.",
        "🔹 **Enhanced Mobile UX**: Redesigned the entire mobile dashboard using Tailwind CSS, reducing first contentful paint (FCP) time by 40% and improving mobile user engagement.",
        "🔹 **Integrated Chat Service**: Implemented Sceyt Chat into the web app, enabling group chats and direct messaging with mentors.",
        "🔹 **Enhanced Learning Experience**: Refactored the Assignments and Task backend structure, introducing a section-based structure to improve the user learning experience and engagement.",
      ],
    },
    {
      company: "Cling Multi Solutions",
      badges: [],
      href: "https://drive.google.com/file/d/1zoNmPWrEPGh9WM2Zdsrc_o6C85Rk0F_0/view?usp=sharing",
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/cling.jpg",
      start: "December 2022",
      end: "March 2023",
      description: "",
      achievements: [
        "🔹 Worked with MERN stack technologies.",
        "🔹 Developed REST APIs for backend services.",
        "🔹 Participated in team meetings and provided status updates on project progress.",
        "🔹 Developed websites using React.js & Next.js.",
      ],
    },
  ],
  education: [
    {
      school: "Sharpener",
      href: "https://sharpener.tech",
      degree: "MERN Stack Training",
      logoUrl: "/sharpenerLogo.webp",
      start: "Aug 2023",
      end: "Dec 2024",
    },
    {
      school: "Rashtrasant Tukadoji Maharaj Nagpur University",
      href: "https://nagpuruniversity.ac.in/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/rtmnu-logo.png",
      start: "Aug 2020",
      end: "May 2023",
    },
    {
      school: "Dhote Bandhu Science College, Gondiya",
      href: "https://www.dbscience.org/",
      degree: "Higher Secondary",
      logoUrl: "/db.png",
      start: "June 2018",
      end: "Feb 2020",
    },
  ],
  projects: [
    {
      title: "Exclusive",
      href: "",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Exclusive is a e-commerce application with the features of a modern online store. It allows users to browse products, add them to their cart, and securely checkout using Stripe. The application is built with a focus on performance and user experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Chakra UI",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SunilBarewar?tab=repositories&q=ecommerce&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project_ecom.png",
      video: "",
    },
    {
      title: "Cook Hub",
      href: "https://cook-io-react.vercel.app/",
      dates: "June 2023 - August 2023",
      active: true,
      description:
        "Cook Hub is a recipe exploring application built with React.js and Typescript. It allows users to search for recipes, view details, and save their favorite recipes. The application uses the Edamam API to fetch recipe data and provides a clean and modern user interface.",
      technologies: [
        "React.js",
        "Typescript",
        "Context API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://cook-io-react.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SunilBarewar/cook-io-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project_cookhub.png",
      video: "",
    },
    {
      title: "Movie Flix",
      href: "https://llm.report",
      dates: "April 2023 - May 2023",
      active: true,
      description:
        "Movie Flix is a movie discovery application built with Pure HTML, CSS and Javascript. It allows users to search there favorite movies and explore the statics of movie",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://movieflix2.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SunilBarewar/Tvflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project_movieflix.png",
      video: "",
    },
    {
      title: "PixStock",
      href: "https://picsstock.netlify.app/",
      dates: "Jan 2023 - Feb 2024",
      active: true,
      description:
        "PixStock is a Platform to explore and find high quality videos and photos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://picsstock.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project_picstock.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
