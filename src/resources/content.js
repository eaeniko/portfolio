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

const live = {
  path: "/live",
  label: "Live",
  title: `${person.name} - Live Stream`,
  description: `Watch what's ${person.name} is doing right now `,
}
const learning = {
  path: "/learning",
  label: "Learning",
  title: `A little bit of what I have learned`,
  description: `Personal learning by ${person.name}`,
}
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
    link: "https://www.github.com/eaeniko",
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
        timeframe: "04-2025 - Present (Volunteer Work)",
        role: "Project Manager & Full Stack Designer",
        achievements: [
          <>
            Redesigned the UI/UX for the GID platform and deployed the MVP PWA for users for the first time
          </>,
          <>
            The new improved design make the user experience journey more intuitive for both users and professionals .
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/gid-project/cover-01.jpg",
            alt: "GID Figma Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Personal Projects",
        timeframe: "2016 - present",
        role: "Content Creator",
        achievements: [
          <>
            Multi-content creator with a focus on livestreaming, gaming, design, and technology.
          </>,
          <>
            Started as a hobby in 2016 as a League of legends streamer, now it is a passion that I try to make it as a job.
            Already created more than 10000+ hours of content on Twitch and YouTube over the past 10 years. 
          </>,
          <>
            Did some work for companies and big creators like; Diggo (Youtuber), Banco Santander/CNB eSports, Beyond the Summit brasil (Betway) and more.
            Always trying to improve my skills (design, video editing, streaming, etc) and to learn and create cool new things.
          </>,
          <>
            I have a clothing store where I sell my own designs and custom T-shirt prints and other cloths.
          </>,
          <>
            I try to be a enterpeneur and to create new things, like my own clothing store, a game, a usefull gamefication app, etc. 
          </>
        ],
        images: [{
          src: "/images/projects/content-creator/cover-01.png",
          alt: "Print of a reels with a lot of views and likes",
          width: 10,
          height: 9,
          },
          {
            src: "/images/projects/content-creator/cover-02.png",
            alt: "Print of a youtube videos with a lot of views",
            width: 10,
            height: 9,
          },
          {
            src: "/images/projects/content-creator/cover-03.png",
            alt: "Print of a youtube videos with a lot of views and likes",
            width: 10,
            height: 9,
          }
        ],
      },
      {
        company: "CNB eSports / Banco Santander",
        timeframe: "06/2024 - 09/2024",
        role: "Content Creator",
        achievements: [
          <>In partnership with Santander Games Pro and CNB Academy, I was responsible for:
          </>,
          <> Creating viral vertical videos for posting on social media </>,
          <> Scripting, recording, and editing were my responsibility</>,
          <> Content aimed at gamers and League of Legends players.</>,
          <> There were more than 10 vertical videos (TikTok, Instagram, etc.) that got over 150,000 views in total.</>

        ],
        images: [],
      },
      {
      company: "Mundo 42 - Personal Brand (Clothing Store, Podcast, etc)",
        timeframe: "04/2025 - Present",
        role: "Content Creator",
        achievements: [
          <>This is my personal nerd brand (nerd/geek culture) somethings about this brand:
          </>,
          <> Clothing Store with custom print </>,
          <> Podcast about books, series, anime etc</>,

        ],
        images: [{
          src: "/images/projects/mundo-42/shirt-1.png",
          alt: "Photo of a T-shirt with a custom print",
          width: 10,
          height: 9,
          },
          {
          src: "/images/projects/mundo-42/shirt-2.png",
          alt: "Photo of a T-shirt with a custom print",
          width: 10,
          height: 9,
          },
          {
          src: "/images/projects/mundo-42/shirt-3.png",
          alt: "Photo of a T-shirt with a custom print",
          width: 10,
          height: 9,
          },
          {
          src: "/images/projects/mundo-42/shirt-4.png",
          alt: "Photo of a T-shirt with a custom print",
          width: 10,
          height: 9,
          },
        ],
      }
      {
        company: "Beyond the Summit Brasil (BetWay)",
        timeframe: "07/2020 - 10/2020",
        role: "Content Creator",
        achievements: [
          <>
          At first, I was responsible for the live production of the LCK and LPL League of Legends championship broadcasts on Betway's official channel (which meant rebroadcasting the official live streams). A few weeks later, I also had the chance to work as a commentator for the same channel's championships.
          </>,
          <> I was in charge of all the tech stuff for the broadcasts, making sure they were running smoothly. </>,
          <> Making changes to layouts and editing.</>,
          <> The commentator's job is to keep the audience hooked.</>,
          <> We had over 250 people watching at the same time.</>,
          <> I'm responsible for the drawings that are shown to viewers.</>,

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
        description: 
        <>
          6 Months Intensive Front-end Bootcamp (+750 hours) 
          <br /> Trybe's first module covers content related to Web Development Fundamentals, applying practical content such as:
          <br />- Unix & Bash, Git,
          <br />- Basic JS & DOM,
          <br />- HTML, CSS, JS ES6,
          <br />- Higher Order Functions and Unit Testing,
          <br />- As well as agile methodologies and soft skills.,
          <br /><br />Trybe's second module, which covers content related to development
          <br />- Front-end
          <br />- React, including Components, State and Events, Controlled Components, Lifecycle, Router, Testing with RTL, Redux with React, Context API, React Hooks,
          <br />- More agile methodologies and soft skills.
          <br /><a href="https://github.com/eaeniko/Trybe/tree/main" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github Link</a>
        </>
      },
      {
        name: "Alura",
        description: <>+40 courses about tech, dev, content creator done in the plataform.
        <br /><a href="https://cursos.alura.com.br/user/eaeniko" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Alura Profile with all certificates</a></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Static websites / Landing pages",
        description: <>Simple but elegant static websites with modern HTML, CSS, Javascript (ES6+ / TypeScript).</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/wip.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React / Next.js",
        description: <>Able to create components, use hooks, redux and other things to create a responsive SSR / SSG.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        description: <>Able to prototype, micro interation, wireframes and low fidelity prototype in Figma.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/wip.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/wip.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js and others frameworks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/wip.jpg",
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

export { live, learning, person, social, newsletter, home, about, blog, work, gallery };
