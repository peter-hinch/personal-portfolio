import { Technologies, Social } from './enums';

export const name = 'Peter Hinch';

export const preferredTechnologies = {
  technologies: [
    Technologies.REACT,
    Technologies.NODEJS,
    Technologies.JAVASCRIPT,
    Technologies.HTML5,
    Technologies.CSS3
  ],
  preferred: '',
  other: ''
};

export const portfolioItems = [
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    images: ['', ''],
    description:
      'For the final project in my React Development course, I have chosen to create an application that allows users to rate businesses and venues aginst their suitability as a remote working venue. Basic information about each venue is retrieved from the Google Places API and users are able to add their remote work specific review information within the application.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Google Maps API', 'Google Places API', 'Styled Components'],
    liveUrl: 'https://remotespot.herokuapp.com/',
    sourceUrl:
      'https://github.com/peter-hinch/general-assembly-react-final-project'
  },
  {
    title: 'Todo List',
    subtitle: 'Notetaking application in React',
    images: [],
    description:
      'In our React Development course at General Assembly we were tasked with creating a Todo list in React. I wanted to create a skeumorphic interpretation of a real notebook page, so I took photos of paper and an eraser to incorporate them into the design. The font used is Sriracha from Google Fonts, the accompanying UI elements I created SVGs from hand-drawn images to match the look and feel of the Sriracha font.',
    technologies: [
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Styled Components'],
    liveUrl: 'https://peter-hinch.github.io/general-assembly-react-todo-list/',
    sourceUrl: 'https://github.com/peter-hinch/general-assembly-react-todo-list'
  },
  {
    title: 'Piano',
    subtitle: 'An exercise in using the Web Audio API',
    images: [],
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
    images: [],
    description:
      'Our capstone project for Diploma of Software Development. This project was developed in .NET using the MVC design pattern and utilises the Stripe payments API. My responsibilities in this project included project management (Trello, TeamGANNT) and database design and integration (Microsoft SQL Server).',
    technologies: [
      Technologies.CSHARP,
      Technologies.DOT_NET,
      Technologies.MICROSOFTSQLSERVER,
      Technologies.AZURE,
      Technologies.BOOTSTRAP,
      Technologies.HTML5,
      Technologies.CSS3
    ],
    tags: ['Stripe API', '.NET MVC'],
    sourceUrl: 'https://github.com/SD-Perfumery-DevTeam/SDP_MVC'
  }
];

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
