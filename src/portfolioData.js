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

export const aboutMe = [
  'I am a Frontend Developer with a focus on JavaScript and React.'
];

export const contact = [
  'If you have any enquiries regarding my portfolio I would love to hear from you.'
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
    'JavaScript, React and Node.js . My HTML and CSS skills are also sharp. I am passionate about writing code for the frontend that is not only performant but also looks great in all browsers. As a matter of fact this portfolio site was built with exactly these technologies.'
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
    'Styled-Components',
    'Taliwind CSS',
    'Trello'
  ],
  heading: 'As well as..',
  description: [
    "the technologies listed below. I always relish the opportunity try something new, so if you use something in your stack that is not listed here I'll be glad to pick it up quickly!"
  ]
};

export const portfolioItems = [
  {
    title: 'Advent of CSS 2022 / Advent of JS 2022',
    subtitle: 'Participation in CSS and JS challenges',
    images: [
      'portfolio/advent-of-css-2022-01.png',
      'portfolio/advent-of-css-2022-02.png',
      'portfolio/advent-of-css-2022-03.png',
      'portfolio/advent-of-css-2022-04.png',
      'portfolio/advent-of-css-2022-05.png',
      'portfolio/advent-of-css-2022-06.png',
      'portfolio/advent-of-css-2022-07.png',
      'portfolio/advent-of-css-2022-08.png',
      'portfolio/advent-of-css-2022-09.png',
      'portfolio/advent-of-css-2022-10.png',
      'portfolio/advent-of-css-2022-11.png'
    ],
    description:
      'The Advent of CSS and Advent of JS are events put together by Amy Dutton and James Q Quick. Participants are challenged to create 24 applications, where the Advent of CSS is concerned with the accurate production of a layout from a Figma design, and in Advent of JS challenges you are required to produce functionality to a brief.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Figma', 'Semantic HTML', 'BEM Methodology', 'Styled Components'],
    liveUrl:
      'https://peter-hinch.github.io/advent-of-css-2022-01-pomodoro-timer/',
    sourceUrl:
      'https://github.com/peter-hinch/advent-of-css-2022-01-pomodoro-timer'
  },
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    images: [
      'portfolio/remote-spot-01.png',
      'portfolio/remote-spot-02.png',
      'portfolio/remote-spot-03.png'
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
    title: 'Todo List',
    subtitle: 'Note taking application in React',
    images: ['portfolio/todo-list-01.png'],
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
    title: 'Piano',
    subtitle: 'An exercise in using the Web Audio API',
    images: ['portfolio/piano-01.png'],
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
