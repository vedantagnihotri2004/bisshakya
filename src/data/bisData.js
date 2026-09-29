export const standards = [
  {
    code: 'IS 14500',
    name: 'Electrical Safety of Household and Similar Appliances',
    description:
      'Covers safety and performance requirements for electrical appliances used in residential and commercial settings.',
    applicableTo: 'Electrical appliances',
    certification: 'Required',
    relevance: 'High',
    category: 'appliance',
  },
  {
    code: 'IS 1786',
    name: 'High Strength Deformed Steel Bars',
    description:
      'Sets material, strength and testing requirements for reinforced steel bars used in structural applications.',
    applicableTo: 'Construction reinforcement',
    certification: 'Required',
    relevance: 'High',
    category: 'construction',
  },
  {
    code: 'IS 1077',
    name: 'Common Burnt Clay Building Bricks',
    description:
      'Specifies dimensions, strength, water absorption and durability for burnt clay bricks used in construction.',
    applicableTo: 'Brick and masonry products',
    certification: 'Required',
    relevance: 'Medium',
    category: 'construction',
  },
  {
    code: 'IS 10617',
    name: 'Plastic Pipes for Potable Water Supply',
    description:
      'Defines requirements for plastic piping systems for safe distribution of potable water.',
    applicableTo: 'Water and plumbing components',
    certification: 'Required',
    relevance: 'High',
    category: 'plumbing',
  },
  {
    code: 'IS 12433',
    name: 'Packaging Materials for Food Products',
    description:
      'Covers compliant packaging materials for food contact and shelf-life safety.',
    applicableTo: 'Food packaging',
    certification: 'Recommended',
    relevance: 'Medium',
    category: 'food',
  },
];

export const certifications = [
  {
    title: 'ISI Certification',
    short: 'Standard mark for product conformity',
    description:
      'Used when a product must conform to an Indian Standard and bear a visible certification mark.',
    steps: ['Identify product', 'Confirm standard', 'Sample testing', 'Application filing'],
  },
  {
    title: 'Hallmarking / Quality Certification',
    short: 'For gold, silver and precious metal products',
    description:
      'Applies to regulated precious metal trades where purity and hallmark compliance are essential.',
    steps: ['Product classification', 'Testing and assay', 'License application', 'Marking'],
  },
  {
    title: 'Domestic Manufacture Certification',
    short: 'Manufacturing compliance under BIS',
    description:
      'For domestic manufacturers seeking certification for standardised production and consumer safety.',
    steps: ['Factory inspection', 'Document review', 'Product testing', 'Grant'],
  },
];

export const laboratories = [
  {
    name: 'National Test House – Delhi',
    location: 'Delhi',
    testingServices: ['Material testing', 'Electrical safety', 'Mechanical tests'],
    supportedStandards: ['IS 14500', 'IS 1786', 'IS 1077'],
    contact: '+91 11 2345 6789',
  },
  {
    name: 'BIS Approved Lab – Ahmedabad',
    location: 'Ahmedabad',
    testingServices: ['Plastic pipe testing', 'Water quality checks'],
    supportedStandards: ['IS 10617', 'IS 12433'],
    contact: '+91 79 2233 1456',
  },
  {
    name: 'Regional Testing Centre – Bengaluru',
    location: 'Bengaluru',
    testingServices: ['Structural testing', 'Civil materials', 'Packaging validation'],
    supportedStandards: ['IS 1786', 'IS 12433', 'IS 1077'],
    contact: '+91 80 3344 2211',
  },
  {
    name: 'Quality Assurance Lab – Mumbai',
    location: 'Mumbai',
    testingServices: ['Electrical safety', 'Product performance'],
    supportedStandards: ['IS 14500', 'IS 12433'],
    contact: '+91 22 4455 9900',
  },
];

export const queryExamples = [
  'What BIS standard applies to this product?',
  'How can I get BIS certification?',
  'Find a testing laboratory.',
  'What does IS 14500 cover?',
];

export const certificationSteps = [
  {
    id: 'product',
    title: 'Product',
    detail: 'Identify the product category, use case and risk profile before applying for compliance.',
  },
  {
    id: 'standard',
    title: 'Applicable Standard',
    detail: 'Match the product with the relevant Indian Standard and relevant clauses for safety or quality.',
  },
  {
    id: 'testing',
    title: 'Testing',
    detail: 'Use an approved laboratory for sample testing and performance verification.',
  },
  {
    id: 'laboratory',
    title: 'Laboratory',
    detail: 'Select a recognised BIS or accredited laboratory to evaluate product conformity.',
  },
  {
    id: 'application',
    title: 'Application',
    detail: 'Prepare documentation, evidence and product details for BIS submission.',
  },
  {
    id: 'certification',
    title: 'Certification',
    detail: 'Receive the certification decision and comply with ongoing monitoring and renewal needs.',
  },
];

export const evidenceLibrary = [
  {
    id: 'e1',
    document: 'IS 14500',
    standard: 'Electrical Safety of Household Appliances',
    section: 'Product Requirements',
    clause: '4.2',
    source: 'BIS Knowledge Base',
    lastUpdated: '2026-02-14',
    relevance: 'High',
  },
  {
    id: 'e2',
    document: 'IS 1786',
    standard: 'High Strength Deformed Steel Bars',
    section: 'Mechanical properties',
    clause: '5.3',
    source: 'BIS Knowledge Base',
    lastUpdated: '2025-11-11',
    relevance: 'High',
  },
  {
    id: 'e3',
    document: 'IS 10617',
    standard: 'Plastic Pipes for Potable Water Supply',
    section: 'Material and performance',
    clause: '6.1',
    source: 'BIS Knowledge Base',
    lastUpdated: '2026-01-30',
    relevance: 'High',
  },
  {
    id: 'e4',
    document: 'IS 12433',
    standard: 'Packaging Materials for Food Products',
    section: 'Safety criteria',
    clause: '3.4',
    source: 'BIS Knowledge Base',
    lastUpdated: '2025-10-19',
    relevance: 'Medium',
  },
];

export const dashboardStats = {
  queriesAsked: 128,
  standardsFound: 42,
  certificationsViewed: 19,
  laboratoriesFound: 11,
};
