import { Job, FilterType } from './types';

export const TRELLO_LINK = 'https://trello.com/b/f8i39h6l/radassist-ai-nigeria-hub';
export const APPLY_LINK = 'https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/viewform?edit_requested=true';
export const SUBMIT_CV_LINK = 'https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/viewform?edit_requested=true';

export const FILTER_OPTIONS: FilterType[] = ['All', 'Full-time', 'Contract', 'Internship'];

export const JOB_ROLES: Job[] = [
  {
    id: 1,
    title: 'AI/ML Engineer',
    location: 'Lagos, Nigeria (Remote)',
    type: 'Full-time',
    description: 'Design and implement machine learning models for healthcare applications, focusing on predictive analytics and medical imaging.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Medical Imaging'],
  },
  {
    id: 2,
    title: 'Data Scientist (Healthcare)',
    location: 'Abuja, Nigeria (Hybrid)',
    type: 'Full-time',
    description: 'Analyze complex medical datasets to extract actionable insights and improve patient outcomes. Strong experience with clinical data.',
    tags: ['R', 'SQL', 'HL7/FHIR', 'Statistics'],
  },
   {
    id: 3,
    title: 'Clinical Informatics Specialist',
    location: 'Remote',
    type: 'Contract',
    description: 'Bridge the gap between clinical practice and information technology. Work on EHR integration and data standardization.',
    tags: ['EHR', 'Informatics', 'Healthcare IT', 'Interoperability'],
  },
  {
    id: 4,
    title: 'Senior Backend Engineer (HealthTech)',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Build secure and scalable backend systems compliant with healthcare regulations like HIPAA. Expertise in Node.js and cloud services.',
    tags: ['Node.js', 'PostgreSQL', 'HIPAA', 'GCP/AWS'],
  },
  {
    id: 5,
    title: 'Frontend Engineer (HealthTech)',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop accessible and intuitive user interfaces for clinicians and patients. Experience with React and data visualization.',
    tags: ['React', 'TypeScript', 'D3.js', 'Accessibility'],
  },
  {
    id: 6,
    title: 'Product Manager (AI Health)',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Drive the product strategy for our AI-powered healthcare solutions. Collaborate with stakeholders to define and deliver features.',
    tags: ['Agile', 'Roadmapping', 'Healthcare', 'AI Products'],
  },
  {
    id: 7,
    title: 'Healthcare Data Analyst Intern',
    location: 'Remote',
    type: 'Internship',
    description: 'Support our data science team with data cleaning, analysis, and visualization tasks. A great opportunity to learn about HealthTech.',
    tags: ['SQL', 'Excel', 'Tableau', 'Learning'],
  },
];