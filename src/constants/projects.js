/**
 * Portfolio project data.
 * Extracted from the original HTML's PROJECTS constant.
 * Edit this file to add, remove, or update projects.
 */

export const PROJECTS = [
  {
    id: 1,
    title: 'SAMBA E-Commerce CEO Dashboard',
    category: 'dashboard',
    image: './foto/dashboard2.png',
    bg: '#DCFCE7',
    tools: ['tableau', 'python'],
    toolsLabel: ['Tableau', 'Python'],
    desc: 'My initial analysis using Tableau as a business intelligence tool occurred during a Data Analyst training bootcamp.',
    fullDesc:
      'This dashboard presents a summary of key performance metrics (KPIs) and operational trends of the SAMBA E-Commerce platform. Cumulatively, the platform facilitated 49,544 orders involving 48,022 customers and 1,771 sellers',
    highlights: [
      'Out of 44,585 orders, about 90% had only 1 item each',
      'Peak transactions happened during the holiday season (Nov 2021 - Jan 2022)',
      'Individual purchases heavily dominate the user transaction profile',
      'There a significant gap among the top 10 sellers',
    ],
    link: 'https://public.tableau.com/views/AssignmetRevou/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  },
  {
    id: 2,
    title: 'Cluster Churn Dashboard',
    category: 'dashboard',
    image: './foto/dashboard3.png',
    bg: '#EDE9FE',
    tools: ['tableau', 'python'],
    toolsLabel: ['Tableau', 'Python'],
    desc: 'Create Cluster Chun Dashboard for my first competition at Data Science Weekend by Telkomsel',
    fullDesc:
      'Built a full churn prediction system from feature engineering in BigQuery to model training with XGBoost. Predictions are published weekly to Salesforce CRM, enabling targeted retention campaigns. Model retraining is automated via Airflow on a monthly cadence.',
    highlights: [
      'Customers who have been with us for 0 to 1 year have the highest churn rate',
      'Total number of subscribers: 2,636',
      '568 customer churns led to a churn rate of 21.55%',
    ],
    link: 'https://public.tableau.com/views/V2_ChurnCustomer/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: 3,
    title: 'Aquaculture Opportunity Dashboard',
    category: 'dashboard',
    image: './foto/Dashboard1.png',
    bg: '#FEF9C3',
    tools: ['tableau', 'python'],
    toolsLabel: ['Tableau', 'Python'],
    desc: 'This dashboard displays a comparative analysis between aquaculture production, with a focus on the Asian continent covering 45 countries as of 2018',
    fullDesc:
      'Developed for riset and personal project dashboard and report about Aquaculture production in Indonesia to get to know opportunity Indonesia in aquaculture industry.',
    highlights: [
      'Extreme Trend Changes in Aquaculture',
      'Capture fisheries (1.785 million tons)',
      'China is the largest producer',
      'Indonesia Ranks Second in the cultivation sector',
    ],
    link: 'https://public.tableau.com/views/AquaculturevsCaptureFish/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: 4,
    title: 'Churn Bank Customer',
    category: 'analytics',
    image: './foto/dashboard4.png',
    bg: '#DCFCE7',
    tools: ['python', 'tableau', 'excel'],
    toolsLabel: ['Python', 'Tableau', 'Excel'],
    desc: 'Conduct a thorough analysis of customer churn at a bank, taking an end-to-end approach to uncover insights and develop effective strategies.',
    fullDesc:
      'In this project, we will accurately identify the number of customer churns, develop distinct clusters, and confidently recommend targeted improvements for each cluster.',
    highlights: [
      'Analytical Thinking',
      'Clustering',
      'Suggest by Cluster Customers',
    ],
    link: 'https://drive.google.com/file/d/1xsjxf06yub6JPjtXz6fclhG2fZ-2v2aI/view?usp=sharing'
  },
  // {
  //   id: 5,
  //   title: 'Marketing Attribution Model',
  //   category: 'analytics',
  //   image: '📈',
  //   bg: '#FEE2E2',
  //   tools: ['python', 'sql'],
  //   toolsLabel: ['Python', 'SQL', 'BigQuery', 'Looker', 'Pandas'],
  //   desc: 'Multi-touch attribution model assigning revenue credit across 15 marketing channels for a D2C brand.',
  //   fullDesc:
  //     'Built a data-driven multi-touch attribution model using Markov chains. Integrated 15 marketing channels including paid search, organic, email, and social. Results exposed via Looker dashboards for the marketing team.',
  //   highlights: [
  //     '15 marketing channels modeled',
  //     'Reallocated $200K budget based on insights',
  //     'Increased ROAS by 23% in first quarter',
  //     'Weekly automated reporting to Slack',
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'HR Analytics Platform',
  //   category: 'dashboard',
  //   image: '👥',
  //   bg: '#E0F2FE',
  //   tools: ['tableau', 'sql', 'python'],
  //   toolsLabel: ['Python', 'SQL', 'Tableau', 'Postgres', 'dbt'],
  //   desc: 'Self-serve analytics platform for the HR team covering headcount, attrition, hiring velocity, and DEI metrics.',
  //   fullDesc:
  //     'Designed a comprehensive HR analytics platform for a 2,000-person company. Built dimensional models for headcount, attrition, and hiring funnel. Delivered self-serve Tableau dashboards with row-level security by department.',
  //   highlights: [
  //     'Row-level security by department and manager',
  //     'Attrition prediction model integrated',
  //     'Reduced HR reporting cycle from weekly to daily',
  //     '98% adoption rate among HR team',
  //   ],
  // },
]

/** Filter categories derived from PROJECTS */
export const CATEGORIES = ['all', 'pipeline', 'ml', 'dashboard', 'analytics']

/** Filter tools derived from PROJECTS */
export const TOOLS = ['all', 'python', 'sql', 'spark', 'kafka', 'tableau', 'dbt']
