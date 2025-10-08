import { Job, FilterType } from './types';

export const TRELLO_LINK = 'https://trello.com/c/K7XpnGsO/2-developer-frontend-backend';
export const APPLY_LINK = 'https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/viewform?edit_requested=true';

export const FILTER_OPTIONS: FilterType[] = ['All', 'Full-time', 'Contract', 'Internship'];

export const JOB_ROLES: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    location: 'Lagos, Nigeria (Remote)',
    type: 'Full-time',
    description: 'Lead the development of our next-gen user interfaces with React and TypeScript, focusing on performance and user experience.',
    tags: ['React', 'TypeScript', 'Next.js', 'Web Vitals'],
  },
  {
    id: 2,
    title: 'Lead Backend Engineer',
    location: 'Abuja, Nigeria (Hybrid)',
    type: 'Full-time',
    description: 'Architect and maintain scalable backend services. Expertise in Node.js, PostgreSQL, and cloud infrastructure is required.',
    tags: ['Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
  },
   {
    id: 3,
    title: 'Full-Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Work across the entire stack to build and ship new features. Proficient in both frontend and backend technologies.',
    tags: ['React', 'Node.js', 'GraphQL', 'Docker'],
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    location: 'Lagos, Nigeria (Contract)',
    type: 'Contract',
    description: 'Craft intuitive and beautiful user experiences. Create wireframes, prototypes, and high-fidelity designs for web and mobile.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    id: 5,
    title: 'Product Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Define product vision, strategy, and roadmap. Work closely with engineering and design to deliver impactful products.',
    tags: ['Agile', 'Roadmapping', 'Product Strategy', 'Jira'],
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Automate and streamline our operations and processes. Build and maintain tools for CI/CD, deployment, and monitoring.',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    id: 7,
    title: 'Software Engineering Intern',
    location: 'Remote',
    type: 'Internship',
    description: 'Join our team as an intern and gain hands-on experience in software development. Work on real projects and learn from experienced mentors.',
    tags: ['Learning', 'Mentorship', 'Web Dev'],
  },
];
