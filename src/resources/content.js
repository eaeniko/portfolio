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
  languages: ["Brazilian Portuguese - Native", "English - B2", "Italian - A1"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about livestreaming, design, technology, and share thoughts on the intersection of
      creativity and code.
      (This feature isnt working right now 😭)
    </>
    
  ),
};

const live = {
  path: "/live",
  label: "Live",
  title: `${person.name} - Live Stream`,
  description: `Watch what's ${person.name} is doing right now `,
}

const stream = {
  path: "/stream",
  label: "Stream Commands",
  title: "All about my stream",
  description: `Check out all the commands you can use in my stream chat!`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};


const learning = {
  path: "/learning",
  label: "Learning",
  title: `A little bit of what I have learned`,
  description: `Personal learning by ${person.name}`,
}

const bio = {
  name: "Nikolai Cinotti", // optional
  avatar: "/images/avatar.jpg", // optional
  label: "Bio",
  cover: "/images/cover.png", // optional
  bio: "Self-taught knowledge hunger", // optional
  links: [ // optional array
    //title, description and image are generated based on the link (if available) and not provided explicitly
    {
      title: "Stream World Record", // optional
      description: "+600h of livestream in a single month in 2021. I know nowdays everyone do subathons, but not a hardcore one like I did in those days.", // optional\
      url: "https://maisesports.com.br/nikolai-streamer-brasileiro-quebra-recorde-de-horas-streamadas-unico-mes/", // required if link object exists
      favicon: true
    },
    {
      title: "Mundo 42 - Store", // optional
      description: "My online custom printed t-shirt (help a little enterpenour lol)", // optional\
      //media: "/images/general/noping.png",
      url: "https://www.mundo42.com.br", // required if link object exists
      favicon: true
    },
    {
      title: "NoPing - 3 days free", // optional
      description: "For gamers that need low pings in your online games", // optional\
      media: "/images/general/noping.png",
      url: "https://nopi.ng/EfafIUitPx", // required if link object exists
      favicon: true
    },
    {
      title: "Mundo 42 ", // optional
      description: "My podcast about books, animes, series and geek stuff..", // optional\
      media: "/images/general/mundo-42.png",
      url: "https://open.spotify.com/show/6IxjbVdOLelYroh1Wx16xf?si=40803a496c344d39", // required if link object exists
      favicon: true
    },
    {
      title: "Tiktok", // optional
      description: "Funny shorts videos I create and best livestream moments.",
      url: "https://tiktok.com/@eaeniko", // required if link object exists
      favicon: true
    },
    {
      title: "X or Twitter?", // optional
      media: "/images/general/x.png",
      url: "https://x.com/eaeniko", // required if link object exists
      favicon: true
    },
  ],
  };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "My Clothing Store",
    icon: "shop",
    link: "https://www.mundo42.com.br",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/eaeniko",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/eaeniko"
  },
  {
    name: "Twitch",
    icon: "twitch",
    link: "https://www.twitch.tv/eaeniko"
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/eaeniko"
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const bioLinks = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "My Clothing Store",
    icon: "shop",
    link: "https://www.mundo42.com.br",
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
    name: "My Spotify",
    icon: "spotify",
    link: "https://open.spotify.com/user/225fxzliesyi4gy5gzsgmnoqa?si=bd789c2951ad4c07",
  },
  {
    name: "Podcast Mundo 42",
    icon: "spotify",
    link: "https://open.spotify.com/show/6IxjbVdOLelYroh1Wx16xf?si=40803a496c344d39",
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link: "https://www.tiktok.com/eaeniko",
  },
  // {
  //   name: "Figma",
  //   icon: "figma",
  //   link: "https://www.figma.com/design/ljyEi1RRCWTXkEwiHub4ik/Aplicativo-para-condominio?t=Lj6UNWx8ePRcX1t5-0",
  // },
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
    
      I&apos;m Nikolai, a multi content creator that loves Tech and to
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
          <>I was responsible for the entire re-design process, from wireframing to prototyping and user testing/user journey.
          </>
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
            About Numbers on Social Media plataforms: 
            <br/>+40k Followers
            <br/>+1 milion views
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
        images: [
          {
            src: "/images/projects/content-creator/cover-02.png",
            alt: "Print of a youtube videos with a lot of views",
            width: 10,
            height: 9,
          },
        ],
      },
      {
      company: "Mundo 42 - Personal Brand (Clothing Store, Podcast, etc)",
        timeframe: "04/2025 - Present",
        role: "Owner",
        achievements: [
          <>This is my personal brand (nerd/geek culture). Where somethings I do here:
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
          src: "/images/projects/mundo-42/shirt-3.mp4",
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
        images: [
          {
          src: "/images/projects/content-creator/cover-01.png",
          alt: "Print of a reels with a lot of views and likes",
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
        company: "Beyond the Summit Brasil (BetWay)",
        timeframe: "07/2020 - 10/2020",
        role: "Livestream Technician & Commentator",
        achievements: [
          <>
          At first, I was responsible for the live production of the LCK and LPL League of Legends championship broadcasts on Betway's official channel (which meant rebroadcasting the official live streams). A few weeks later, I also had the chance to work as a commentator for the same channel's championships.
          </>,
          <> I was in charge of all the tech stuff for the broadcasts, making sure they were running smoothly. </>,
          <> Making changes to layouts and editing.</>,
          <> The caster's job is to keep the audience hooked.</>,
          <> We had over 250 people watching at the same time.</>,
          <> Im responsible for the drawings that are shown to viewers.</>,

        ],
        images: [],
      },
      {
        company: "Alura - Online Courses",
        timeframe: "08/2017 - 12/2017",
        role: "Web Writer",
        achievements: [
          <>
          First I started as a student at Alura (2016), where I took several courses in Design, Programming, and Content Creation. 
          <br/>Then I turned into a Volunteer Moderator in the Alura community, where I helped students with their doubts and questions. My reply to the students doubts was marked as the best answer in +100 topics(questions).
          
          <br/> After that, I was invited to be do a Intership as Web Writer for the Alura blog.
          </>,
          <>
          Created and developed posts for Alura's blog focused on Design and Programming.
          </>,
          <>
          Created about 7 articles in total, 4 of which are still included in the UX & Design training as extra content in the articles section, making them the only articles in the entire training.
          </>,
          <>
          Researched recurring topics and questions from students.
          </>,
          <>
          Applied didactic explanations of the topic with real-life examples.
          </>,
          <>
          Daily and Weekly with agile practices using Scrum.
          </>,
          <>
          Post's links:
          <br />
          <a className="text-blue-500 hover:underline" href="https://www.alura.com.br/artigos/aplicando-mascaras-na-sua-imagem-com-o-photoshop" target="_blank" rel="noopener noreferrer"> How to apply mask in your photoshop image </a>
          <br />
          <a className="text-blue-500 hover:underline" href="https://www.alura.com.br/artigos/fazendo-recortes-na-imagem-com-crop-tool-no-photoshop" target="_blank" rel="noopener noreferrer"> How to use Crop Tool in photoshop </a>
          <br />
          <a className="text-blue-500 hover:underline" href="https://www.alura.com.br/artigos/o-que-sao-imagens-vetoriais-e-por-que-utiliza-las" target="_blank" rel="noopener noreferrer"> What is a Vector Image </a>
          <br />
          <a className="text-blue-500 hover:underline" href="https://www.alura.com.br/artigos/melhorando-capa-de-um-canal-no-youtube" target="_blank" rel="noopener noreferrer"> How to make a better Youtube Cover art </a>
          <br />
          <a className="text-blue-500 hover:underline" href="https://www.alura.com.br/artigos/utilizando-decupagem-nos-seus-projetos-de-video" target="_blank" rel="noopener noreferrer"> How to decupate a video </a>
          </>


        ],
        images: [
          {
            src: "/images/projects/alura/alura-profile.png",
            alt: "my profile image",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Credit Cash Assessoria Financeira",
        timeframe: "01/2015 - 08/2015",
        role: "Telemarketer - overdue bills collection",
        achievements: [
          <>
          Receive and make calls using CallFlex
          </>,
          <>
          Update/complete/change customer records
          </>,
          <>
          Collect overdue bills
          </>,
          <>
          Create spreadsheets for self-management of goals
          </>
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
            src: "/learning/first-html-website/imagens/cover1.png",
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

export { live, learning, person, bio, bioLinks, stream, social, newsletter, home, about, blog, work, gallery };
