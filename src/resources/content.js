import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nikolai",
  lastName: "Cinotti",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Content Creator, Full Stack Designer, Gamer & Tech Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "eaenikolai@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese - Native", "English - B2", "Italian - A1"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about livestreaming, design, technology, and share thoughts on the intersection of
      creativity and code.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "My Clothing Store",
    icon: "shop",
    link: "https://www.instagram.com/mundo42_",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/eaeniko",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/eaeniko",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/eaeniko"
  },
  {
    name: "Twitch",
    icon: "twitch",
    link: "https://www.twitch.tv/eaeniko",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/eaeniko"
  },
  {
    name: "X (Twitter)",
    icon: "x",
    link: "https://www.x.com/eaeniko",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@eaeniko",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/n9yEFyMVTz",
  },
  {
    name: "Spotify",
    icon: "spotify",
    link: "https://open.spotify.com/user/225fxzliesyi4gy5gzsgmnoqa?si=f9c4965329c84127",
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link: "https://www.tiktok.com/eaeniko",
  },
  {
    name: "Figma",
    icon: "figma",
    link: "https://www.figma.com/design/ljyEi1RRCWTXkEwiHub4ik/Aplicativo-para-condominio?t=Lj6UNWx8ePRcX1t5-0",
  },
  {
    name: "Steam",
    icon: "steam",
    link: "https://steamcommunity.com/id/eaeniko/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://www.telegram.com/eaeniko",
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/11998948309",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];
//<Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/> change to my logo in subline
const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Solving real-world problems through gamification</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Gendrify ID</strong></>,
    href: "/work/GID-Gendrify-ID-new-PWA",
  },
  subline: (
    <>
    
      I'm Nikolai, a multi content creator that loves Tech and to
      do everything on stream. I try to craft innovative ideias
      <br />with intuitive user experiences. After hours, I take care of my cats.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nikolai is a Brazilian streamer with a passion for transforming real life problems challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive experiences,
        and the convergence of design and technology.
        He loves creating innovative online ideas for streaming and online content.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GID - Gendrify ID",
        timeframe: "04-2025 - Present",
        role: "Project Manager & Full Stack Designer",
        achievements: [
          <>
            Redesigned the UI/UX for the GID platform and deployed the PWA for users for the first time
          </>,
          <>
            The new improved design make the user experience journey more intuitive.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/gid-project/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Myself",
        timeframe: "2016 - present",
        role: "Content Creator",
        achievements: [
          <>
            Multi-content creator with a focus on livestreaming, gaming, design, and technology.
          </>,
          <>
            Started as a hobby in 2016 as a League of legends streamer, now it a passion that I try to make it as a job.
            Already created more than 10000+ hours of content on Twitch and YouTube. Did some work for companies and big creators like; Diggo, Banco Santander, Riot Games, CNB eSports, Beyond the Summit brasil (Betway) and more.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Trybe",
        description: <>Intensive Front-end Bootcamp - Html, css, js and react.</>,
      },
      {
        name: "Alura",
        description: <>+40 courses about tech, dev, content creator done in the plataform.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype, micro interation, wireframes and low fidelity prototype in Figma.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/gid-project/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/gid-project/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/gid-project/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about things I love to learn...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
