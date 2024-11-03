import { Technologies, Social } from './enums';

declare global {
  namespace PortfolioData {
    interface Name {}
    interface Location {
      city: string;
      country: string;
    }
    interface SocialLink {
      platform: EnumTypes.SocialPlatform;
      url: string;
    }
    interface Anchor {
      sequence: number;
      id: string;
      title: string;
      showInHeader: boolean;
    }
    interface PreferredTechnologies {
      heading: string;
      description: string[];
      technologies: EnumTypes.Technology[];
    }
    interface OtherTechnologies {
      heading: string;
      description: string[];
      tags: string[];
    }
    namespace PortfolioItem {
      interface Image {
        file: string;
        linkUrl: string;
      }
      interface Item {
        id: string;
        isActive: boolean;
        title: string;
        subtitle: string;
        images?: Image[];
        description: string;
        technologies: EnumTypes.Technology[];
        tags: string[];
        liveUrl?: string;
        sourceUrl?: string;
      }
    }
  }
}

export const myName: string = 'Peter Hinch';

export const myRole: string = 'Frontend Developer';

export const location: PortfolioData.Location = {
  city: 'Melbourne',
  country: 'Australia'
};

export const socialLinks: PortfolioData.SocialLink[] = [
  {
    platform: Social.GITHUB,
    url: 'https://github.com/peter-hinch'
  },
  {
    platform: Social.LINKEDIN,
    url: 'https://www.linkedin.com/in/peter-hinch-dev/'
  }
];

export const anchors = {
  header: { sequence: 0, id: 'top', title: 'Home', showInHeader: false },
  aboutMe: {
    sequence: 1,
    id: 'about-me',
    title: 'About Me',
    showInHeader: true
  },
  technologies: {
    sequence: 2,
    id: 'technologies',
    title: 'Technologies',
    showInHeader: true
  },
  portfolio: {
    sequence: 3,
    id: 'portfolio',
    title: 'Portfolio',
    showInHeader: true
  },
  contact: { sequence: 4, id: 'contact', title: 'Contact', showInHeader: true }
};

export const aboutMe: string[] = [
  'My primary focus is on JavaScript / TypeScript and React. Please check out my GitHub profile and portfolio below to see examples of my work and personal projects.'
];

export const contact: string[] = [
  'If you have any enquiries regarding my portfolio or availabilty I would love to hear from you. Feel free to send me a message using the contact form below, or alternatively via my LinkedIn profile.'
];

export const preferredTechnologies: PortfolioData.PreferredTechnologies = {
  heading: 'My primary technology stack is..',
  description: [
    'Node.js, React, JavaScript, TypeScript. I am passionate about creating performant frontend applications that match your business requirements while looking great across all browsers and devices.'
  ],
  technologies: [
    Technologies.REACT,
    Technologies.NODEJS,
    Technologies.JAVASCRIPT,
    Technologies.TYPESCRIPT,
    Technologies.SASS,
    Technologies.HTML5,
    Technologies.CSS3
  ]
};

export const otherTechnologies: PortfolioData.OtherTechnologies = {
  heading: 'I also work with..',
  description: [
    "the technologies listed below. I am always interested in furthering my skillset - if you use technologies that I haven't listed, I'm keen to jump into some documentation and work within your preferred technology stack."
  ],
  tags: [
    'Adobe Creative Suite',
    'Agile Methodology',
    'Android OS',
    'Amazon Web Services',
    'API Integration',
    'Arduino',
    'Bootstrap',
    'C',
    'C#',
    'EJS',
    'Figma',
    'Git',
    'GitHub',
    'Heroku',
    'Java',
    'JQuery',
    'Lucid Charts',
    'Material UI',
    'Microsoft Azure',
    'Microsoft SQL Server',
    'MongoDB',
    'MySQL',
    '.NET MVC',
    'React-three-fiber',
    'Styled-Components',
    'Tailwind CSS',
    'Trello'
  ]
};

export const portfolioItems: PortfolioData.PortfolioItem.Item[] = [
  {
    id: 'type3-configurator',
    isActive: true,
    title: 'Type 3 Configurator',
    subtitle: 'Product configurator using React Three Fiber',
    images: [
      {
        file: 'portfolio/type3-configurator.png',
        linkUrl: 'https://type3-configurator.netlify.app'
      }
    ],
    description:
      'The Volkswagen Type 3 is a vehicle that is near to my heart. As a personal project and a fun way to learn some more about Three JS, I have been building this product configurator.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.THREEJS,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['React-three-fiber', 'Drei', 'Netlify', 'Blender'],
    liveUrl: 'https://type3-configurator.netlify.app',
    sourceUrl: 'https://github.com/peter-hinch/personal-type3-configurator'
  },
  {
    id: 'advent-of-css-js',
    isActive: true,
    title: 'Advent of CSS / Advent of JS',
    subtitle: 'Participation in CSS and JS challenges',
    images: [
      {
        file: 'portfolio/advent-of-css-2022-01.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-js-2022-day-01-pomodoro-timer'
      },
      {
        file: 'portfolio/advent-of-css-2022-02.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-js-2022-day-02-ecommerce-component'
      },
      {
        file: 'portfolio/advent-of-css-2022-03.png',
        linkUrl: 'https://github.com/peter-hinch/advent-of-js-2022-day-03-piano'
      },
      {
        file: 'portfolio/advent-of-css-2022-04.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-js-2022-day-04-computer-keyboard'
      },
      {
        file: 'portfolio/advent-of-css-2022-05.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-05-multiselect'
      },
      {
        file: 'portfolio/advent-of-css-2022-06.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-06-range-slider'
      },
      {
        file: 'portfolio/advent-of-css-2022-07.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-07-tip-calculator'
      },
      {
        file: 'portfolio/advent-of-css-2022-08.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-08-weather-api'
      },
      {
        file: 'portfolio/advent-of-css-2022-09.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-09-image-carousel'
      },
      {
        file: 'portfolio/advent-of-css-2022-10.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-10-verification-code'
      },
      {
        file: 'portfolio/advent-of-css-2022-11.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-11-expander-collapser'
      },
      {
        file: 'portfolio/advent-of-css-2022-12.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-12-rock-paper-scissors'
      },
      {
        file: 'portfolio/advent-of-css-2022-13.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-2022-day-13-custom-modal'
      },
      {
        file: 'portfolio/advent-of-css-2022-14.png',
        linkUrl:
          'https://github.com/peter-hinch/advent-of-css-day-14-calendar-picker'
      }
    ],
    description:
      'The Advent of CSS and Advent of JS are coding challenges put together by Amy Dutton and James Q Quick. Participants are challenged to create 24 applications, where the Advent of CSS is concerned with the accurate production of a layout from a Figma design, and in Advent of JS challenges you are required to produce functionality to a brief.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Figma', 'Semantic HTML', 'BEM Methodology', 'Styled Components']
  },
  {
    id: 'remotespot',
    isActive: true,
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    images: [
      {
        file: 'portfolio/remote-spot-01.png',
        linkUrl: 'https://remotespot.herokuapp.com/'
      },
      {
        file: 'portfolio/remote-spot-02.png',
        linkUrl: 'https://remotespot.herokuapp.com/'
      },
      {
        file: 'portfolio/remote-spot-03.png',
        linkUrl: 'https://remotespot.herokuapp.com/'
      }
    ],
    description:
      'For the final project in my React Development course, I have chosen to create an application that allows users to rate businesses and venues aginst their suitability as a remote working venue. Basic information about each venue is retrieved from the Google Places API and users are able to add their remote work specific review information within the application.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.HTML5,
      Technologies.CSS3,
      Technologies.FIGMA
    ],
    tags: [
      'Custom Hooks',
      'Framer Motion',
      'Google Maps API',
      'Google Places API',
      'Heroku',
      'Local Storage API',
      'Styled Components'
    ],
    liveUrl: 'https://remotespot.herokuapp.com/',
    sourceUrl:
      'https://github.com/peter-hinch/general-assembly-react-final-project'
  },
  {
    id: 'todo-list',
    isActive: false,
    title: 'Todo List',
    subtitle: 'Note taking application in React',
    images: [{ file: 'portfolio/todo-list-01.png', linkUrl: '' }],
    description:
      'In our React Development course at General Assembly we were tasked with creating a Todo list in React. I wanted to create a skeumorphic interpretation of a physical notebook page, so I took photos of paper and an eraser to incorporate them into the design. The font used is Sriracha from Google Fonts, the accompanying UI elements I created SVGs from hand-drawn images to match the look and feel of the Sriracha font.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Custom Hooks', 'Local Storage API', 'Styled Components'],
    liveUrl: 'https://peter-hinch.github.io/general-assembly-react-todo-list/',
    sourceUrl: 'https://github.com/peter-hinch/general-assembly-react-todo-list'
  },
  {
    id: 'piano',
    isActive: false,
    title: 'Piano',
    subtitle: 'An exercise in using the Web Audio API',
    images: [{ file: 'portfolio/piano-01.png', linkUrl: '' }],
    description:
      'I set myself the task of creating a piano keyboard using CSS with the requirement that it retains realistic proportions and keys overlap as they would on a real piano. I am also interested in learning about how to synthesize sounds in the browser, and this was my introduction to the Web Audio API - something I hope to continue learning more about in future.',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Web Audio API'],
    liveUrl: 'https://peter-hinch.github.io/personal-web-audio-api-piano/',
    sourceUrl: 'https://github.com/peter-hinch/personal-web-audio-api-piano'
  },
  {
    id: 'sd-perfumery',
    isActive: false,
    title: 'SD Perfumery',
    subtitle: 'Storefront developed using .NET MVC',
    description:
      'Our capstone project for Diploma of Software Development. This project was developed in .NET using the MVC design pattern and utilises the Stripe payments API. My responsibilities in this project included project management (Trello, TeamGANTT) and database design and integration (Microsoft SQL Server).',
    technologies: [
      Technologies.CSHARP,
      Technologies.DOT_NET,
      Technologies.MICROSOFTSQLSERVER,
      Technologies.AZURE,
      Technologies.BOOTSTRAP,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Lucid Charts', '.NET MVC', 'Stripe API', 'TeamGANTT', 'Trello'],
    sourceUrl: 'https://github.com/SD-Perfumery-DevTeam/SDP_MVC'
  }
];
