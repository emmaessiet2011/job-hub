
export type JobType = 'Full-time' | 'Contract' | 'Internship';

export type FilterType = JobType | 'All';

export interface Job {
  id: number;
  title: string;
  location: string;
  type: JobType;
  description: string;
  tags: string[];
}