import { Technologies } from './enums';

export const portfolioItems = [
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    description:
      'For the final project in my React Development course, I have chosen to create an application that allows users to rate businesses and venues aginst their suitability as a remote working venue. Basic information about each venue is retrieved from the Google Places API and users are able to add their remote work specific review information within the application.',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'Todo List',
    subtitle: 'Notetaking application in React',
    description:
      'In our React Development course at General Assembly we were tasked with creating a Todo list in React. I wanted to create a skeumorphic interpretation of a real notebook page, so I took photos of paper and an eraser to incorporate them into the design. The font used is Sriracha from Google Fonts, the accompanying UI elements I created SVGs from hand-drawn images to match the look and feel of the Sriracha font.',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'Piano',
    subtitle: 'An exercise in using the Web Audio API',
    description:
      'I set myself the task of creating a piano keyboard using CSS with the requirement that it retains realistic proportions and keys overlap as they would on a real piano. I am also interested in learning about how to synthesize sounds in the browser, and this was my introduction to the Web Audio API - something I hope to continue learning more about in future.',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'SD Perfumery',
    subtitle: 'Storefront developed using .NET MVC',
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
    ]
  }
];
