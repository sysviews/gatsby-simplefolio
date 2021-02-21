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
  subtitle: 'Data Engineer,Digital Plumber,Assistant Consultant @ TCS',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ProfilePrasanth.jpg',
  paragraphOne: 'Data Engineer with Seven Years of IT Experience in building, maintaining Data Driven Insights Projects',
  paragraphTwo: 'Have Experiences across the Azure Data Engineering Stack including but not limited to Azure Databricks, DataFactory, PowerBI, Functions',
  paragraphThree: 'Involved in early stage beta developments of vNext projects, demonstrating tangible value,early ROI for Business.I love to learn about how things work, whether that be studying coding practices, engineering techniques, or data engineering methods.Much of my experience revolves around building early stage Digital Transformation Projects on latest Microsoft Azure Stack.I work on Projects adopting Technology to solve tedious business processes. Most of the projects I worked are in Data Analytics and Insights domain.I also strive to gain a deeper understanding of the world which helps for maturing ones conscience.',
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
    img: 'FrictionLessDevices.png',
    title: 'Devices And Insights',
    info: 'Analyse usage pattern of applications,devices by end-users in an Digital First Organization.',
    info2: ' Provide Insights to provide frictionless usage of IT Devices and Application, accelerating the Digital Transformation ',
    url: 'https://www.microsoft.com/en-us/itshowcase/reducing-friction-throughout-the-device-lifecycle-at-microsoft',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bot Experiences',
    info: 'Automating End User Queries using technologies like BotFramework,Microsoft LUIS.Build Self-Service ChatBuilder with capabilities to build ChatBots without IT Support by End User',
    info2: '',
    url: '',
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
      url: 'https://github.com/preshi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
