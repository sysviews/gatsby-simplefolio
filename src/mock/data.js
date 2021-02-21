import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prasanth | Data Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Prasanth',
  subtitle: 'Assistant Consultant @ TCS',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ProfilePrasanth.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Data Management Platform',
    info: 'Build Framework to automate the processes of Data Ingestion, Processing and Metric Generation. Reduce the Time on Data Engineering',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Channel Data Management',
    info: 'Simplify the process of Field Sales Invoices and identify ways for accurate reporting,bridging gap between Sales and Finance Teams.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Devices And Insights',
    info: 'Analyse usage pattern of applications,devices by end-users in an Digital First Organization.',
    info2: ' Provide Insights to provide safe on-boarding and ',
    url: 'https://www.microsoft.com/en-us/itshowcase/reducing-friction-throughout-the-device-lifecycle-at-microsoft',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bot Experiences',
    info: 'Automating End User Queries using technologies like BotFramework,Microsoft LUIS.Build Self-Service ChatBuilder with capabilities to build ChatBots without IT Support by End User',
    info2: '',
    url: 
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'prasanth7@live.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/prashanth010',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prasanth-perumalla-89001b49/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
