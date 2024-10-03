// Technology and social icons are from Devicon.
// Reference: https://devicon.dev/

// Some icons are more readily identifiable with a wordmark, the 'iconSuffix'
// key for each enum indicates which icon to use for each technology.

declare global {
  namespace EnumTypes {
    interface Technology {
      simplename: string;
      fullname: string;
      iconSuffix: string;
    }
    var Technologies: { [key: string]: Technology };

    interface SocialPlatform {
      simplename: string;
      fullname: string;
      iconSuffix: string;
    }
    var SocialPlatforms: { [key: string]: SocialPlatform };
  }
}

export const devIconsCdnUrl: string =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

export const Technologies = {
  AMAZONWEBSERVICES: {
    simplename: 'amazonwebservices',
    fullname: 'Amazon Web Services',
    iconSuffix: '-original-wordmark'
  },
  ANDROID: {
    simplename: 'android',
    fullname: 'Android OS',
    iconSuffix: '-original'
  },
  AZURE: {
    simplename: 'azure',
    fullname: 'Microsoft Azure',
    iconSuffix: '-original-wordmark'
  },
  BLENDER: {
    simplename: 'blender',
    fullname: 'Blender',
    iconSuffix: '-original'
  },
  BOOTSTRAP: {
    simplename: 'bootstrap',
    fullname: 'Bootstrap',
    iconSuffix: '-original'
  },
  CSHARP: { simplename: 'csharp', fullname: 'C#', iconSuffix: '-original' },
  CSS3: {
    simplename: 'css3',
    fullname: 'CSS3',
    iconSuffix: '-original-wordmark'
  },
  DOT_NET: {
    simplename: 'dot-net',
    fullname: 'Microsoft .NET',
    iconSuffix: '-original-wordmark'
  },
  EXPRESS: {
    simplename: 'express',
    fullname: 'Express',
    iconSuffix: '-original'
  },
  FIGMA: { simplename: 'figma', fullname: 'Figma', iconSuffix: '-original' },
  FIREBASE: {
    simplename: 'firebase',
    fullname: 'Firebase',
    iconSuffix: '-plain'
  },
  HEROKU: {
    simplename: 'heroku',
    fullname: 'Heroku',
    iconSuffix: '-original'
  },
  HTML5: {
    simplename: 'html5',
    fullname: 'HTML5',
    iconSuffix: '-original-wordmark'
  },
  JAVA: {
    simplename: 'java',
    fullname: 'Java',
    iconSuffix: '-original-wordmark'
  },
  JAVASCRIPT: {
    simplename: 'javascript',
    fullname: 'JavaScript',
    iconSuffix: '-original'
  },
  MATERIALUI: {
    simplename: 'materialui',
    fullname: 'Material UI',
    iconSuffix: '-original'
  },
  MICROSOFTSQLSERVER: {
    simplename: 'microsoftsqlserver',
    fullname: 'Microsoft SQL Server',
    iconSuffix: '-plain-wordmark'
  },
  MONGODB: {
    simplename: 'mongodb',
    fullname: 'MongoDB',
    iconSuffix: '-original-wordmark'
  },
  MYSQL: {
    simplename: 'mysql',
    fullname: 'MySQL',
    iconSuffix: '-original-wordmark'
  },
  NETLIFY: {
    simplename: 'netlify',
    fullname: 'Netlify',
    iconSuffix: '-original'
  },
  NODEJS: {
    simplename: 'nodejs',
    fullname: 'Node.js',
    iconSuffix: '-original-wordmark'
  },
  REACT: { simplename: 'react', fullname: 'React.js', iconSuffix: '-original' },
  REDUX: { simplename: 'redux', fullname: 'Redux', iconSuffix: '-original' },
  SASS: { simplename: 'sass', fullname: 'Sass', iconSuffix: '-original' },
  SVELTE: { simplename: 'svelte', fullname: 'Svelte', iconSuffix: '-original' },
  THREEJS: {
    simplename: 'threejs',
    fullname: 'Three JS',
    iconSuffix: '-original-wordmark'
  },
  TYPESCRIPT: {
    simplename: 'typescript',
    fullname: 'TypeScript',
    iconSuffix: '-original'
  },
  WEBPACK: {
    simplename: 'webpack',
    fullname: 'Webpack',
    iconSuffix: '-original'
  }
};

export const Social = {
  GITHUB: { simplename: 'github', fullname: 'GitHub', iconSuffix: '-original' },
  LINKEDIN: {
    simplename: 'linkedin',
    fullname: 'LinkedIn',
    iconSuffix: '-plain'
  },
  TWITTER: {
    simplename: 'twitter',
    fullname: 'Twitter',
    iconSuffix: '-original'
  }
};
