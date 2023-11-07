import { Technologies, Social } from './enums';

export const myName = 'Peter Hinch';

export const myRole = 'Frontend Developer';

export const location = {
  city: 'Melbourne',
  country: 'Australia'
};

export const socialLinks = [
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
  header: { sequence: 0, id: 'top', title: 'Home' },
  aboutMe: { sequence: 1, id: 'about-me', title: 'About Me' },
  technologies: { sequence: 2, id: 'technologies', title: 'Technologies' },
  portfolio: { sequence: 3, id: 'portfolio', title: 'Portfolio' },
  contact: { sequence: 4, id: 'contact', title: 'Contact' }
};

export const aboutMe = [
  'My primary focus is on JavaScript / TypeScript and React. Please check out my GitHub profile and portfolio below to see examples of my work and personal projects.'
];

export const contact = [
  'If you have any enquiries regarding my portfolio or availabilty I would love to hear from you. Feel free to send me a message using the contact form below, or alternatively via my LinkedIn profile.'
];

export const preferredTechnologies = {
  technologies: [
    Technologies.REACT,
    Technologies.NODEJS,
    Technologies.JAVASCRIPT,
    Technologies.TYPESCRIPT,
    Technologies.SASS,
    Technologies.HTML5,
    Technologies.CSS3
  ],
  heading: 'I enjoy working with..',
  description: [
    'Node.js, React and JavaScript / TypeScript. I am passionate about writing code for the frontend that performs well, while looking great across all devices and browsers.'
  ]
};

export const otherTechnologies = {
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
    'Taliwind CSS',
    'Trello'
  ],
  heading: 'As well as..',
  description: [
    "the technologies listed below. I always relish the opportunity try something new, so if you use something in your stack that is not listed here I'd be glad to jump into the documentation and pick it up quickly!"
  ]
};

export const portfolioItems = [
  {
    id: 'advent-of-css-js',
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
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    images: [
      { file: 'portfolio/remote-spot-01.png', linkUrl: '' },
      { file: 'portfolio/remote-spot-02.png', linkUrl: '' },
      { file: 'portfolio/remote-spot-03.png', linkUrl: '' }
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
