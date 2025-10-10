import { Job, FilterType } from './types';

export const TRELLO_LINK = 'https://trello.com/b/f8i39h6l/radassist-ai-nigeria-hub';
export const APPLY_LINK = 'https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/viewform?edit_requested=true';
export const SUBMIT_CV_LINK = 'https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/viewform?edit_requested=true';

export const FILTER_OPTIONS: FilterType[] = ['All', 'Full-time', 'Contract', 'Internship'];

export const JOB_ROLES: Job[] = [
  {
    id: 1,
    title: 'AI/Data Intern',
    location: 'Remote',
    type: 'Internship',
    description: 'Key tasks include collecting and cleaning datasets, running ML experiments, and annotating medical images.',
    tags: ['Python', 'ML Libraries', 'Data Viz'],
  },
  {
    id: 2,
    title: 'Frontend/Backend Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Key tasks include building dashboard mockups, creating NHS interfaces, and performing website updates.',
    tags: ['React', 'TypeScript', 'APIs', 'GitHub'],
  },
   {
    id: 3,
    title: 'Research & Writing Assistant',
    location: 'Remote',
    type: 'Contract',
    description: 'Key tasks include researching NHS challenges, writing reports, and supporting grant applications.',
    tags: ['Writing', 'Research', 'Healthcare'],
  },
  {
    id: 4,
    title: 'Content Creator & Social Media',
    location: 'Remote',
    type: 'Contract',
    description: 'Key tasks include creating viral content, managing social channels, and growing engagement.',
    tags: ['Copywriting', 'Social Media', 'AI Tools'],
  },
  {
    id: 5,
    title: 'Azure Cloud Intern',
    location: 'Remote',
    type: 'Internship',
    description: 'Key tasks include setting up Azure resources, supporting deployments, and configuring CI/CD.',
    tags: ['Azure', 'DevOps', 'CI/CD'],
  },
  {
    id: 6,
    title: 'Graphic Designer',
    location: 'Remote',
    type: 'Contract',
    description: 'Key tasks include designing engaging visuals, creating infographics, and supporting presentations.',
    tags: ['Canva', 'Figma', 'AI Design'],
  },
  {
    id: 7,
    title: 'Nigeria Hub Representative',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Key tasks include identifying radiology clinics, presenting pilot programs, and coordinating with the UK team.',
    tags: ['Healthcare', 'Networking', 'Business Dev'],
  },
];