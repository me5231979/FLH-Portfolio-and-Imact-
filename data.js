/* =====================================================================
   FLH PORTFOLIO DATA
   Source: FLH_Programs.csv (Futures Learning Hub — Program Portfolio).
   Metrics are partial; repopulate `volume` / `nps` as measurement matures.
   ===================================================================== */

window.FLH = {

  stages: [
    { id: 'foundations', name: 'Foundations',  blurb: 'Every staff member, met where they are — language, compliance, a weekly seat at the table.' },
    { id: 'capability',  name: 'Capability',   blurb: 'Skills that compound — AI fluency, certifications, coaching and a trained facilitator bench.' },
    { id: 'mobility',    name: 'Mobility',     blurb: 'Skills become movement — visible opportunity, internal-first searches, retention before resignation.' },
    { id: 'leadership',  name: 'Leadership',   blurb: 'Movement becomes leadership — a pipeline from first-time manager to the senior ranks and beyond.' },
    { id: 'governance',  name: 'Governance',   blurb: 'The system stays coherent — executive stewardship of strategy, products and investment.' }
  ],

  audiences: [
    { id: 'all',      name: 'All staff' },
    { id: 'leaders',  name: 'Managers & leaders' },
    { id: 'targeted', name: 'Targeted groups' },
    { id: 'exec',     name: 'Executive stakeholders' }
  ],

  partners: [
    { id: 'inhouse',  name: 'FLH in-house' },
    { id: 'oracle',   name: 'Oracle' },
    { id: 'edassist', name: 'EdAssist' },
    { id: 'vuit',     name: 'VUIT' },
    { id: 'abroad',   name: 'Abroad' }
  ],

  programs: [
    { id: 'chart', name: 'CHART', stage: 'capability', audience: 'all', partner: 'vuit', status: 'in-development',
      what: 'FLH’s AI fluency program — a self-paced platform, a 4-week intensive and an ongoing workshop series with VUIT.',
      who: 'All staff',
      value: 'Builds baseline AI capability across the workforce and drives AI enablement, including a manager workstream that translates AI exposure into workforce actions.' },

    { id: 'lr', name: 'Leadership Redefined', stage: 'leadership', audience: 'leaders', partner: 'inhouse', status: 'live',
      what: 'Vanderbilt’s premier chancellor-sponsored development program for senior leaders: six leadership modules, a capstone innovation project, three personalized coaching sessions and weekly synthesis sessions. The LR Symposium is one delivery vehicle for a cohort, not the program itself.',
      who: 'M1–E1 leaders',
      value: 'Prepares leaders to move with clarity, agility and conviction in service of the institution’s ambition to define the great research university for the 21st century.',
      volume: { n: 113, label: 'M1–E1 leaders completed' },
      nps: { score: 4.67, responses: 227 } },

    { id: 'voyage', name: 'Manager Voyage', stage: 'leadership', audience: 'leaders', partner: 'inhouse', status: 'pilot',
      what: 'Leadership program for new and newly promoted people managers.',
      who: 'Managers',
      value: 'Establishes a consistent management baseline early in the manager lifecycle.',
      volume: { n: 15, label: 'pilot participants' },
      nps: { score: 4.31, responses: 48 } },

    { id: 'speak', name: 'SPEAK', stage: 'foundations', audience: 'targeted', partner: 'edassist', status: 'live',
      what: 'Language literacy program powered via EdAssist.',
      who: 'Staff with low English proficiency, ESL or who do not speak English',
      value: 'Removes language barriers to participation and advancement, widening the growth path for underserved staff.',
      volume: { n: 9, label: 'staff enrolled' },
      stat: { n: '9', label: 'completed' } },

    { id: 'anchors', name: 'Anchors Edge', stage: 'foundations', audience: 'all', partner: 'inhouse', status: 'live',
      what: 'A different 45-minute virtual course every week — an all-staff series built to drive growth and development, from career tools to communication to leading well.',
      who: 'All staff',
      value: 'Provides a low-barrier, recurring touchpoint for continuous learning across the enterprise.',
      volume: { n: 1000, label: 'employees registered for at least one session' },
      nps: { score: 4.75, responses: 497 } },

    { id: 'marketplace', name: 'Talent Marketplace', stage: 'mobility', audience: 'all', partner: 'oracle', status: 'live',
      what: 'Oracle Grow–based staff talent platform.',
      who: 'All staff',
      value: 'Connects staff to growth opportunities and surfaces internal talent for development and mobility.',
      volume: { n: 3982, label: 'employees using the platform, of 4,440 staff' },
      stat: { n: '90%', label: 'utilization' } },

    { id: 'vault', name: 'VAULT', stage: 'governance', audience: 'exec', partner: 'inhouse', status: 'in-development',
      what: 'Bi-monthly community of practice and enterprise governance council.',
      who: 'Executive stakeholders',
      value: 'Guides talent and learning strategy at the executive level, keeping enterprise capability-building aligned and governed.' },

    { id: 'summit', name: 'Summit', stage: 'mobility', audience: 'all', partner: 'oracle', status: 'in-development',
      what: 'Structured program for retaining, developing and moving staff, built on four interdependent components: Oracle, change management, a mandatory five-business-day internal search process and deliberate people practices. Transfer Portal is the employee front door; Workforce Intelligence is the leader-facing view.',
      who: 'All staff',
      value: 'Gives committed staff a visible path forward and gives leaders tools to act before a vacancy or resignation forces the conversation.' },

    { id: 'navigators', name: 'Dore to Dore Navigators', stage: 'capability', audience: 'all', partner: 'inhouse', status: 'live',
      what: 'The Dore to Dore Navigator Program trains and certifies Vanderbilt staff as facilitators of Vanderbilt Voyage and People, Culture and Belonging programming, through a blended Train the Trainer certification.',
      who: 'All staff — facilitators and aspiring facilitators',
      value: 'Builds internal facilitation capability, extending FLH’s reach through a trained, certified network — with a sustainable engagement model that keeps Navigators active and connected throughout the year.',
      next: 'Re-engage Cohorts 1 and 2, launch Cohort 3 in September 2026 and deliver the blended Train the Trainer certification.',
      volume: { n: 27, label: 'staff through the program; Cohort 3 launches September 2026' },
      stat: { n: '75', label: 'facilitations delivered — 93% of graduates (25 of 27) still active employees' } },

    { id: 'compliance', name: 'Compliance', stage: 'foundations', audience: 'all', partner: 'inhouse', status: 'live',
      what: 'Ongoing and annual compliance education and delivery, with role-dependent content where needed.',
      who: 'All staff',
      value: 'Keeps the workforce current on required compliance and manages institutional risk.',
      volume: { n: 4526, label: 'enrolled across 36 compliance courses' },
      stat: { n: '71%', label: 'completion rate for 2026 — 3,212 of 4,526 completed' } },

    { id: 'cohort', name: 'Cohort Certification Program', stage: 'capability', audience: 'all', partner: 'edassist', status: 'live',
      what: 'Non-degree certification programs funded through the tuition reimbursement benefit, run as cohorts in partnership with EdAssist.',
      who: 'All staff',
      value: 'Reduces cost and builds community by having staff move through certification programs together rather than solo.',
      volume: { n: 926, label: 'participants' },
      stat: { n: '92.8%', label: 'employee retention among participants' } },

    { id: 'products', name: 'Product Governance & Oversight', stage: 'governance', audience: 'exec', partner: 'inhouse', status: 'live',
      what: 'Oversight and management of all the products FLH uses, delivers and subleases.',
      who: 'Product users',
      value: 'Economies of skill and standardization across the enterprise.',
      volume: { n: 9, label: 'product uses across five products, excluding Oracle' },
      stat: { n: '200', label: 'course assets generated' } },

    { id: 'coaching', name: 'Coaching', stage: 'capability', audience: 'all', partner: 'abroad', status: 'in-development',
      what: 'Professional coaching in partnership with Abroad (carries an additional cost).',
      who: 'All staff',
      value: 'Extends individualized development support across the workforce.' },

    { id: 'alumni', name: 'LR Alumni', stage: 'leadership', audience: 'leaders', partner: 'inhouse', status: 'live',
      what: 'Ongoing series for graduates of the Leadership Redefined program.',
      who: 'Leadership Redefined graduates',
      value: 'Keeps LR alumni informed on topics and trends impacting Vanderbilt and ways of work.',
      volume: { n: '50+', label: 'attendees across four sessions' },
      nps: { score: 4.75, responses: 8 } }
  ],

  /* The connective tissue: each edge is a real dependency or hand-off. */
  edges: [
    { a: 'lr',        b: 'alumni',      why: 'Every LR graduate flows into the alumni series — the program doesn’t end at the capstone.' },
    { a: 'voyage',    b: 'lr',          why: 'Manager Voyage sets the management baseline that feeds the senior-leader pipeline into LR.' },
    { a: 'lr',        b: 'coaching',    why: 'Three personalized coaching sessions are built into LR — the coaching practice extends that model to all staff.' },
    { a: 'chart',     b: 'summit',      why: 'CHART’s manager workstream translates AI exposure into the workforce actions Summit operationalizes.' },
    { a: 'chart',     b: 'navigators',  why: 'CHART’s workshop series is a delivery lane for the trained facilitator network.' },
    { a: 'chart',     b: 'voyage',      why: 'CHART’s manager workstream feeds Manager Voyage — AI fluency becomes part of the management baseline.' },
    { a: 'navigators',b: 'anchors',     why: 'Navigators-trained facilitators extend FLH’s reach through recurring sessions like Anchors Edge.' },
    { a: 'anchors',   b: 'marketplace', why: 'Weekly sessions spotlight the Talent Marketplace — Navigate sessions turn awareness into the platform’s 90% adoption.' },
    { a: 'anchors',   b: 'summit',      why: 'Weekly growth and development topics ready staff for the paths Summit opens.' },
    { a: 'anchors',   b: 'voyage',      why: 'Manager-focused sessions extend Voyage’s management baseline between cohorts.' },
    { a: 'navigators',b: 'voyage',      why: 'Certified Navigators facilitate Vanderbilt Voyage programming — the facilitator bench powers the manager program.' },
    { a: 'speak',     b: 'cohort',      why: 'Both run on the EdAssist partnership — one benefit infrastructure, two doors.' },
    { a: 'speak',     b: 'summit',      why: 'SPEAK removes the language barrier so more staff can actually use Summit’s path forward.' },
    { a: 'marketplace', b: 'summit',    why: 'Both run on Oracle — Summit’s Transfer Portal opens into the marketplace’s opportunity feed.' },
    { a: 'products',  b: 'marketplace', why: 'Oracle Grow is one of the governed products — oversight keeps the platform coherent.' },
    { a: 'products',  b: 'chart',       why: 'CHART’s self-paced platform sits inside the governed product portfolio.' },
    { a: 'vault',     b: 'products',    why: 'Enterprise governance and product oversight are two halves of the same stewardship.' },
    { a: 'vault',     b: 'summit',      why: 'VAULT keeps the talent strategy Summit executes aligned and governed at the executive level.' },
    { a: 'vault',     b: 'lr',          why: 'VAULT’s executive stakeholders are LR’s population — governance and development share a table.' },
    { a: 'voyage',    b: 'summit',      why: 'New managers learn the deliberate people practices Summit depends on.' },
    { a: 'compliance',b: 'vault',       why: 'Compliance manages institutional risk; VAULT governs it at the enterprise level.' },
    { a: 'cohort',    b: 'marketplace', why: 'Certifications earned in cohorts surface as skills and readiness in the talent platform.' }
  ]
,
  /* 2025 learner consumption — one row per item consumption in the LMS.
     Themes are keyword-classified; SBJA figures count items whose names match
     a named skill in the 4,410-skill Skills Library. */
  /* 2025 learning activity. A "course taken" = one enrollment recorded in the
     LMS. The export covers everyone trained on campus — staff, student leaders
     and affiliates — and carries no person identifier, so counts are
     enrollments, not unique people. Themes and competency alignment are
     keyword-classified from item names. */
  consumption: {
    year: 2025,
    total: 318530,
    uniqueItems: 3136,
    sbja: { items: 808, consumptions: 43558 },
    coreAligned: 114032,
    themes: [
      { theme: 'Compliance & safety', n: 192090, share: 60, program: 'Compliance',
        top: 'Active Assailant Training · Protection of Minors · lab and workplace safety' },
      { theme: 'Personal & professional growth', n: 33390, share: 10, program: 'Anchors Edge',
        top: 'Invest in You · Communicating with Transparency · TED talks on listening' },
      { theme: 'Enterprise systems', n: 31484, share: 10, program: 'Summit · Talent Marketplace (Oracle backbone)',
        top: 'UKG timecards · Oracle Cloud Expenses · Vanderbilt One Card' },
      { theme: 'Role & department specific', n: 31226, share: 10, program: '',
        top: 'Student-org leader training · departmental onboarding · trade-specific modules' },
      { theme: 'AI fluency', n: 11374, share: 4, program: 'CHART',
        top: 'Using AI to Boost Your Creative Potential · VU AI Policy · ChatGPT 101 and 102' },
      { theme: 'Career & talent marketplace', n: 10186, share: 3, program: 'Talent Marketplace · Summit',
        top: 'Navigate: Using the Talent Marketplace · LinkedIn profile and resume courses' },
      { theme: 'Leadership & management', n: 8780, share: 3, program: 'Manager Voyage · Leadership Redefined',
        top: 'Be the Manager People Won\u2019t Leave · HRVU New Leader Orientation · delegation and coaching' }
    ],
    topSkills: [
      { skill: 'Oracle Cloud', cat: 'Technology Use, Monitoring and Control', n: 7466 },
      { skill: 'Procurement', cat: 'Supply Chain Management', n: 7072 },
      { skill: 'Compliance Training', cat: 'Legal, Regulation and Compliance', n: 3628 },
      { skill: 'First Aid', cat: 'Healthcare', n: 2516 },
      { skill: 'Bloodborne Pathogens', cat: 'Healthcare', n: 1996 },
      { skill: 'Safety Training', cat: 'Legal, Regulation and Compliance', n: 1672 },
      { skill: 'Arc Flash', cat: 'Engineering Design and Development', n: 1620 },
      { skill: 'Fire Safety', cat: 'Administrative Services', n: 1202 },
      { skill: 'Hygiene', cat: 'Healthcare', n: 1184 },
      { skill: 'Fire Prevention', cat: 'Administrative Services', n: 1178 },
      { skill: 'Laboratory Safety', cat: 'Research and Development', n: 1132 },
      { skill: 'Injury Prevention', cat: 'Legal, Regulation and Compliance', n: 992 }
    ],
    core: [
      { name: 'Radically collaborates and cultivates belonging', n: 37466,
        top: 'Communicating with Transparency · Psychological Safety · listening skills' },
      { name: 'Embodies an entrepreneurial spirit and leverages data and technology', n: 34580,
        top: 'UKG and Oracle systems · Using AI to Boost Your Creative Potential' },
      { name: 'Grows self and others', n: 21510,
        top: 'Navigate: Using the Talent Marketplace · Invest in You · coaching' },
      { name: 'Makes effective and ethical decisions for the University', n: 9916,
        top: 'Institutional Neutrality Essentials · Conflict of Interest training' },
      { name: 'Leads and inspires teams', n: 8800,
        top: 'Be the Manager People Won\u2019t Leave · HRVU New Leader Orientation' },
      { name: 'Develops and implements University strategy', n: 1040,
        top: 'Event planning · crisis management' },
      { name: 'Continuously strives for excellence', n: 720,
        top: 'Customer service · time management' }
    ]
  },

  /* FY27 performance goals — People, Culture and Belonging.
     Progress values arrive later; scale milestones are fixed. */
  /* Products overseen by Product Governance & Oversight.
     assets / timeSaved populate as measurement comes online. */
  /* Time saved = units produced × (traditional build time − AI-enabled build time).
     Multipliers are conservative industry benchmarks — replace with measured values. */
  products_overseen: [
    { name: 'Synthesia',       users: 6, ai: 'Yes',         assets: '150 finished minutes of learning video',
      timeSaved: '≈ 375 hr', formula: '150 min × (3 hr − 0.5 hr) per finished minute' },
    { name: 'Articulate Rise', users: 7, ai: 'AI-assisted', assets: '10 courses built',
      timeSaved: '≈ 240 hr', formula: '10 courses × (36 hr − 12 hr) per course' },
    { name: 'ChatThing',       users: 1, ai: 'Yes',         assets: '5 chat agents built',
      timeSaved: '≈ 90 hr',  formula: '5 agents × (20 hr − 2 hr) per agent' },
    { name: 'Yoodli',          users: 3, ai: 'Yes',         assets: '4 interactive scenarios built',
      timeSaved: '≈ 77 hr',  formula: '4 scenarios × (20 hr − 45 min) per scenario' },
    { name: 'SparkWise',       users: 3, ai: 'Yes',         assets: '5 courses delivered',
      timeSaved: '≈ 50 hr',  formula: '5 deliveries × (12 hr − 2 hr) per delivery' },
    { name: 'Guidee',          users: 1, ai: 'Yes',         assets: 'In development',
      timeSaved: null, formula: '' }
  ],

  goals: [
    { num: 1,
      title: 'Create Vanderbilt Workforce Intelligence and Transfer Portal',
      desc: 'By Q4, launch an AI-enabled system that helps leaders see talent needs, retain top talent, strengthen succession and connect employees to internal opportunities across the university.',
      unit: 'of business units live on the system',
      scale: [
        { label: 'Base value', n: '6%',  detail: '2 of 39 business units' },
        { label: 'Threshold',  n: '50%', detail: '20 of 39' },
        { label: 'Target',     n: '85%', detail: '33 of 39' },
        { label: 'Reach',      n: '100%', detail: '39 of 39' }
      ] },
    { num: 2,
      title: 'Increase manager effectiveness, measurable at scale',
      desc: 'By Q4, implement a Vanderbilt manager standard that measures demonstrated leader behavior.',
      unit: 'of managers meeting or aligned to the standard',
      scale: [
        { label: 'Base value', n: '15%', detail: '' },
        { label: 'Threshold',  n: '50%', detail: '' },
        { label: 'Target',     n: '80%', detail: '' },
        { label: 'Reach',      n: '90%', detail: '' }
      ] },
    { num: 3,
      title: 'Build workforce readiness for AI-enabled work',
      desc: 'By Q4, equip managers to identify AI-exposed work, critical skills and emerging talent needs on their teams, and translate those insights into practical workforce actions.',
      unit: 'of managers or teams assessed, with actions implemented',
      scale: [
        { label: 'Base value', n: '15%', detail: '' },
        { label: 'Threshold',  n: '15%', detail: '' },
        { label: 'Target',     n: '25%', detail: '' },
        { label: 'Reach',      n: '40%', detail: '' }
      ] }
  ]
};
