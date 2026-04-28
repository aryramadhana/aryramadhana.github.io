/**
 * Portfolio project data.
 * Extracted from the original HTML's PROJECTS constant.
 * Edit this file to add, remove, or update projects.
 */

export const PROJECTS = [
  {
    id: 1,
    title: 'Real-time E-Commerce Pipeline',
    category: 'pipeline',
    emoji: '⚡',
    bg: '#DCFCE7',
    tools: ['kafka', 'spark', 'sql', 'python'],
    toolsLabel: ['Kafka', 'Spark Streaming', 'Snowflake', 'dbt', 'Airflow', 'Python'],
    desc: 'End-to-end streaming pipeline ingesting 500K events/day from 12 sources into a unified Snowflake warehouse.',
    fullDesc:
      'Designed and deployed a real-time data pipeline processing 500,000+ events per day from 12 disparate sources. Built using Kafka for message brokering, Spark Streaming for transformations, and Snowflake as the central warehouse. Implemented dbt models for analytics-ready tables and Airflow for orchestration.',
    highlights: [
      'Reduced reporting latency from 24h to sub-30 minutes',
      'Scaled to handle 3× traffic spikes without degradation',
      'CI/CD pipeline for dbt models via GitHub Actions',
      'Cost savings of ~40% vs previous batch architecture',
    ],
  },
  {
    id: 2,
    title: 'Customer Churn Prediction',
    category: 'ml',
    emoji: '🔮',
    bg: '#EDE9FE',
    tools: ['python', 'sql'],
    toolsLabel: ['Python', 'XGBoost', 'BigQuery ML', 'Scikit-learn', 'Pandas', 'SQL'],
    desc: 'ML-powered churn prediction integrated into the data warehouse, reducing churn by 18%.',
    fullDesc:
      'Built a full churn prediction system from feature engineering in BigQuery to model training with XGBoost. Predictions are published weekly to Salesforce CRM, enabling targeted retention campaigns. Model retraining is automated via Airflow on a monthly cadence.',
    highlights: [
      '18% reduction in customer churn over 6 months',
      'AUC-ROC of 0.89 on holdout validation set',
      'Integrated directly into CRM via API',
      'Automated monthly retraining pipeline',
    ],
  },
  {
    id: 3,
    title: 'Supply Chain Dashboard Suite',
    category: 'dashboard',
    emoji: '📦',
    bg: '#FEF9C3',
    tools: ['tableau', 'sql'],
    toolsLabel: ['Tableau', 'SQL', 'Redshift', 'Python'],
    desc: 'Interactive Tableau dashboards for C-suite visibility into procurement and logistics KPIs across 6 ASEAN markets.',
    fullDesc:
      'Developed a suite of 8 executive dashboards covering procurement, logistics, inventory, and supplier performance. Data is sourced from a Redshift warehouse refreshed hourly. Dashboards serve 200+ daily users across 6 countries.',
    highlights: [
      '200+ daily active users across 6 markets',
      'Reduced manual reporting effort by 70%',
      'Real-time inventory alerts via Slack integration',
      'Mobile-responsive views for field teams',
    ],
  },
  {
    id: 4,
    title: 'Data Lakehouse Migration',
    category: 'pipeline',
    emoji: '🏗️',
    bg: '#DCFCE7',
    tools: ['spark', 'python', 'sql', 'dbt'],
    toolsLabel: ['Apache Spark', 'Delta Lake', 'Python', 'dbt', 'Terraform', 'GCP'],
    desc: 'Migrated legacy on-prem warehouse to a modern GCP-based lakehouse architecture for a fintech client.',
    fullDesc:
      'Led a 6-month migration project moving 5TB of legacy Oracle data to a Delta Lake on GCP. Built migration scripts, validation frameworks, and new dbt models. Zero data loss achieved with full audit trail.',
    highlights: [
      '5TB data migrated with zero data loss',
      '60% reduction in query costs post-migration',
      'Full data lineage and audit trail implemented',
      'Completed 2 weeks ahead of schedule',
    ],
  },
  {
    id: 5,
    title: 'Marketing Attribution Model',
    category: 'analytics',
    emoji: '📈',
    bg: '#FEE2E2',
    tools: ['python', 'sql'],
    toolsLabel: ['Python', 'SQL', 'BigQuery', 'Looker', 'Pandas'],
    desc: 'Multi-touch attribution model assigning revenue credit across 15 marketing channels for a D2C brand.',
    fullDesc:
      'Built a data-driven multi-touch attribution model using Markov chains. Integrated 15 marketing channels including paid search, organic, email, and social. Results exposed via Looker dashboards for the marketing team.',
    highlights: [
      '15 marketing channels modeled',
      'Reallocated $200K budget based on insights',
      'Increased ROAS by 23% in first quarter',
      'Weekly automated reporting to Slack',
    ],
  },
  {
    id: 6,
    title: 'HR Analytics Platform',
    category: 'dashboard',
    emoji: '👥',
    bg: '#E0F2FE',
    tools: ['tableau', 'sql', 'python'],
    toolsLabel: ['Python', 'SQL', 'Tableau', 'Postgres', 'dbt'],
    desc: 'Self-serve analytics platform for the HR team covering headcount, attrition, hiring velocity, and DEI metrics.',
    fullDesc:
      'Designed a comprehensive HR analytics platform for a 2,000-person company. Built dimensional models for headcount, attrition, and hiring funnel. Delivered self-serve Tableau dashboards with row-level security by department.',
    highlights: [
      'Row-level security by department and manager',
      'Attrition prediction model integrated',
      'Reduced HR reporting cycle from weekly to daily',
      '98% adoption rate among HR team',
    ],
  },
]

/** Filter categories derived from PROJECTS */
export const CATEGORIES = ['all', 'pipeline', 'ml', 'dashboard', 'analytics']

/** Filter tools derived from PROJECTS */
export const TOOLS = ['all', 'python', 'sql', 'spark', 'kafka', 'tableau', 'dbt']
