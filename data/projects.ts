import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'payments-core',
    title: 'Payments Core Platform',
    summary: 'Designed resilient payments infrastructure handling 10k TPS for hospitality POS integrations. PCI-DSS compliant, multi-region failover, automated recoveries.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Go', 'Postgres'],
    github: '',
    demo: ''
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Automation',
    summary: 'Led migration of on-prem infrastructure to cloud with IaC, zero-downtime cutovers and automated testing pipelines.',
    tech: ['Azure', 'Terraform', 'Ansible', 'Jenkins'],
    github: '',
    demo: ''
  }
];
