import { Technologies, Social } from './enums';

export const name = 'Peter Hinch';

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
  'I am a Frontend Developer with professional experience in the construction and manufacturing industries, with a great capability in the JavaScript scripting language, HTML and CSS.',
  'Passionate about designing user-friendly content and with a knack for taking a lateral approach - blending technical and creative aspects and proven ability to produce engaging user-facing experiences.'
];

export const contact = [
  'If you have any enquiries regarding my portfolio I would love to hear from you.'
];

export const preferredTechnologies = {
  technologies: [
    Technologies.JAVASCRIPT,
    Technologies.REACT,
    Technologies.NODEJS,
    Technologies.HTML5,
    Technologies.CSS3
  ],
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
    'Figma',
    'Git',
    'GitHub',
    'Heroku',
    'Java',
    'JQuery',
    'Lucid Charts',
    'Microsoft Azure',
    'Microsoft SQL Server',
    'MongoDB',
    'MySQL',
    '.NET MVC',
    'Trello',
    'TypeScript'
  ],
  description: [
    'a host of other technologies listed below. Beyond these, there are many programming languages, libraries, frameworks and services that I have not yet used - I always relish the opportunity try something new.'
  ]
};

export const portfolioItems = [
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    images: ['portfolio/remote-spot-01.png'],
    description:
      'For the final project in my React Development course, I have chosen to create an application that allows users to rate businesses and venues aginst their suitability as a remote working venue. Basic information about each venue is retrieved from the Google Places API and users are able to add their remote work specific review information within the application.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: [
      'Custom Hooks',
      'Figma',
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
      'In our React Development course at General Assembly we were tasked with creating a Todo list in React. I wanted to create a skeumorphic interpretation of a real notebook page, so I took photos of paper and an eraser to incorporate them into the design. The font used is Sriracha from Google Fonts, the accompanying UI elements I created SVGs from hand-drawn images to match the look and feel of the Sriracha font.',
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
