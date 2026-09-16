import { PolicySection } from '../types';

export const POLICIES_DATA: Record<string, PolicySection> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    badge: 'Client Data Protection',
    effectiveDate: '30 August 2026',
    subtitle: 'Our standards for handling client data, project credentials, and confidential business information.',
    sections: [
      {
        heading: '1. Information We Collect',
        content: 'We may collect information you provide when requesting a quote, consultation, website service, marketing service, or support, including your name, business details, contact information (phone number, email address), project requirements, design preferences, and communication history.'
      },
      {
        heading: '2. How We Use Information',
        content: 'Information is used strictly to prepare proposals, deliver contracted digital services, communicate about project milestones, provide post-launch support, process invoicing, and improve our customer workflows. We never sell, rent, or trade client information to third-party data brokers.'
      },
      {
        heading: '3. Third-Party Services & Integrations',
        content: 'Client projects may utilize third-party hosting providers (e.g., AWS, Cloudflare, Vercel), analytics platforms (Google Analytics 4), payment processors (Razorpay, Stripe), advertising networks (Google Ads, Meta), and communication tools. These providers are governed by their respective privacy terms.'
      },
      {
        heading: '4. Data Security & Credential Handling',
        content: 'We implement industry-standard administrative, physical, and technical safeguards to protect all project source code, database access keys, server credentials, and client information. Sensitive credentials shared during development are stored in encrypted vaults and securely revoked or handed over upon project sign-off.'
      },
      {
        heading: '5. Contact & Privacy Inquiries',
        content: 'For any privacy-related questions or data deletion requests, you can reach out directly to Hinton Evolution Tech at hintonevolutiontechdgp@gmail.com or via phone at +91 9832727520.'
      }
    ],
    cards: [
      {
        title: 'Data Security Standards',
        desc: 'We take rigorous administrative and technical measures to protect business and contact information. Access is strictly limited to team members assigned to communication, project delivery, billing, or technical maintenance.'
      },
      {
        title: 'Client Rights & Transparency',
        desc: 'Clients may request clarification regarding any information shared for a project and may contact us at any time regarding updates, export requests, or legitimate data privacy inquiries.'
      }
    ]
  },

  refund: {
    id: 'refund',
    title: 'Refund Policy',
    badge: 'Fair & Transparent Terms',
    subtitle: 'Clear terms for project payments, reserved engineering capacity, and deliverable milestones.',
    sections: [
      {
        heading: '1. Project & Service Payments',
        content: 'Because our services involve reserved engineering and design production capacity, custom architecture planning, bespoke code authoring, and dedicated labor performed specifically for a client, payments are generally non-refundable once the corresponding work or discovery phase has commenced.'
      },
      {
        heading: '2. Project Deposit',
        content: 'The initial project deposit confirms the booking, allocates dedicated developer and designer hours, and initiates the discovery and wireframe phase. It is treated as an advance against the agreed project scope and is non-refundable once work has started.'
      },
      {
        heading: '3. Unused & Recurring Services',
        content: 'Where a recurring monthly service (e.g., monthly SEO, maintenance retainers, ad management) has not yet commenced for an upcoming billing cycle, any refund or credit will be evaluated based on written notice, work completed to date, and committed third-party costs.'
      },
      {
        heading: '4. Approved Exceptions & Service Guarantees',
        content: 'If Hinton Evolution Tech is unable to commence an agreed project for reasons entirely within our internal control, we will promptly offer a rescheduling priority, service credit, or full refund of the unperformed portion.'
      }
    ],
    cards: [
      {
        title: 'Work Already Performed',
        desc: 'Design systems, wireframes, custom source code, cloud infrastructure setup, consultations, and other completed labor will be accounted for according to the agreed project milestone schedule.'
      },
      {
        title: 'Third-Party Non-Refundable Costs',
        desc: 'Domain registrations, server hosting provisions, premium WordPress/Shopify licenses, third-party API tokens, and live advertising ad spend paid directly to platforms are non-refundable once committed.'
      },
      {
        title: 'Structured Exception Review',
        desc: 'Any exceptional refund request is reviewed in good faith against the signed proposal, deliverable status logs, and non-recoverable operational costs.'
      }
    ]
  },

  cancellation: {
    id: 'cancellation',
    title: 'Cancellation Policy',
    badge: 'Commitment & Order Rules',
    subtitle: 'Designed to keep project commitments, scheduling allocations, and milestone delivery fair and clear.',
    sections: [
      {
        heading: '1. Cancellation Before Production Commences',
        content: 'A cancellation request submitted before design, architecture, or research work begins may be considered subject to the terms of the proposal, minus any incurred transactional or non-recoverable third-party reservation costs.'
      },
      {
        heading: '2. Cancellation After Production Starts',
        content: 'Once wireframing, UI/UX design, custom coding, content structuring, or advertising setup has commenced, cancellation does not generate a full refund. Charges will apply for all milestone stages completed and production capacity utilized.'
      },
      {
        heading: '3. Client-Initiated Inactivity & Project Pauses',
        content: 'If a project is paused due to delays in supplying required assets, copy, feedback, access credentials, or milestone payments exceeding 30 calendar days, the project may be archived and rescheduled into the next open production queue upon resumption.'
      },
      {
        heading: '4. Formal Written Notice Requirement',
        content: 'All cancellation requests must be submitted in writing via email to hintonevolutiontechdgp@gmail.com to ensure official documentation of completed work, asset delivery, and final billing reconciliations.'
      }
    ],
    cards: [
      {
        title: 'Client Cancellation Terms',
        desc: 'Written notice is required to initiate a cancellation. Final reconciliation accounts for all delivered modules, source code assets, and reserved engineering slots.'
      },
      {
        title: 'Project Pausing Rules',
        desc: 'Inactivity caused by missing feedback or content may result in the project moving into a secondary production slot once the client is ready to resume.'
      },
      {
        title: 'Restarting Archived Projects',
        desc: 'Projects paused for more than 60 days may require a brief re-scoping review to confirm server compatibility, library versions, and updated technical requirements.'
      }
    ]
  },

  duration: {
    id: 'duration',
    title: 'Project Timeline & Duration',
    badge: 'Standard Delivery Framework',
    subtitle: 'Every project receives a realistic delivery schedule, clear milestones, and progress transparency.',
    sections: [
      {
        heading: 'Indicative Project Timelines',
        content: [
          '• Starter Website: Typically 10 to 15 working days from asset receipt',
          '• Business Website: Typically 15 to 25 working days from asset receipt',
          '• Premium Corporate Platform: Typically 25 to 45 working days depending on portal complexity',
          '• Custom Web Applications & MVPs: Duration confirmed after technical architecture scoping'
        ]
      },
      {
        heading: 'When the Production Clock Starts',
        content: 'The official production timeline begins once the initial milestone payment is confirmed and all critical project prerequisites (brand guidelines, raw text/images, third-party API credentials, domain access) have been supplied by the client.'
      },
      {
        heading: 'Scope Revisions & Additional Requests',
        content: 'Any features, pages, integrations, or complex animations requested outside of the agreed scope matrix will be documented as a Change Request, with timeline and pricing adjustments agreed before execution.'
      }
    ],
    cards: [
      {
        title: 'Standard Delivery Windows',
        desc: 'Our delivery schedules are built on proven milestone pacing to ensure clean code, thorough testing, and polished aesthetics without cutting corners.'
      },
      {
        title: 'Factors Affecting Duration',
        desc: 'Content readiness, prompt design feedback, third-party API stability, complex custom calculations, and multi-round revisions directly influence final delivery dates.'
      }
    ]
  },

  late: {
    id: 'late',
    title: 'Late Delivery Policy',
    badge: 'Accountability Commitment',
    subtitle: 'A fair, accountable framework for managing unforeseen production challenges and unexpected delays.',
    sections: [
      {
        heading: '1. Our Professional Delivery Commitment',
        content: 'We take deadlines seriously and aim to deploy every website on or ahead of the target date specified in the proposal. If an internal development bottleneck or technical hurdle causes a material delay, we immediately inform the client with an updated completion date and daily status reports.'
      },
      {
        heading: '2. Client-Dependent Timeline Adjustments',
        content: 'Delivery timelines are automatically extended by the equivalent number of days when delays result from pending client approvals, delayed content or imagery, inaccessible server accounts, payment milestone delays, or fundamental scope revisions.'
      },
      {
        heading: '3. Third-Party Outages & Force Majeure',
        content: 'Unplanned disruptions caused by upstream hosting platforms, DNS propagation delays, cloud service outages, payment gateway verification reviews, or natural emergencies are excluded from internal delivery calculations.'
      },
      {
        heading: '4. Service Remedies & Good Faith Resolution',
        content: 'If an unexcused delay is solely attributable to Hinton Evolution Tech and exceeds the agreed grace period, we will offer compensatory service credits, complimentary support extensions, or priority deployment perks.'
      }
    ],
    cards: [
      {
        title: 'If We Experience a Delay',
        desc: 'Transparent communication is our ironclad policy. We never hide delays; we communicate revised estimates immediately with proactive solutions.'
      },
      {
        title: 'Dependency Management',
        desc: 'Ensuring your team provides feedback and required access within 48-72 hours keeps the project moving smoothly along the agreed critical path.'
      }
    ]
  },

  terms: {
    id: 'terms',
    title: 'Terms & Conditions',
    badge: 'Master Service Agreement',
    subtitle: 'Professional working standards, intellectual property rights, and mutual responsibilities.',
    sections: [
      {
        heading: '1. Scope of Work & Milestone Approvals',
        content: 'All development and marketing services are executed strictly according to the approved proposal, deliverable matrix, and milestones. Requests outside the agreed documentation will be quoted separately.'
      },
      {
        heading: '2. Payment Milestones & Production Continuity',
        content: 'Payment milestones are agreed prior to project kick-off. Work progresses sequentially through designated gates, and development may be temporarily paused if a milestone payment remains past due.'
      },
      {
        heading: '3. Client Responsibilities & Asset Provision',
        content: 'Clients agree to provide accurate business information, text content, logos, imagery, and necessary API credentials in a timely manner. The client warrants that all provided materials do not infringe third-party copyrights.'
      },
      {
        heading: '4. Third-Party Costs & Subscription Fees',
        content: 'Recurring fees for domain registrations, cloud hosting, third-party software plugins, payment gateway fees, and live advertising budgets are the responsibility of the client unless explicitly bundled into the proposal.'
      },
      {
        heading: '5. Intellectual Property & Asset Transfer',
        content: 'Upon receipt of 100% full payment, the client receives full ownership rights to the final bespoke website source code, database structures, graphics, and associated creative assets crafted specifically for the project.'
      },
      {
        heading: '6. Post-Launch Warranty & Maintenance',
        content: 'Each website package includes a designated complimentary support period (1 to 6 months) covering bug fixes, browser compatibility patches, and operational guidance.'
      }
    ],
    cards: [
      {
        title: 'IP Transfer & Ownership',
        desc: 'You own 100% of your website code, database schemas, and media assets upon final milestone settlement. No vendor lock-in, ever.'
      },
      {
        title: 'Revisions & Iteration Scope',
        desc: 'Design phases include structured feedback cycles. Minor refinements are always accommodated, while radical structural shifts are managed as scoped change orders.'
      },
      {
        title: 'Ongoing Support Guarantee',
        desc: 'Every launch comes backed by our post-deployment warranty to guarantee that all forms, scripts, and mobile layouts operate flawlessly in production.'
      },
      {
        title: 'Acceptance & Agreement',
        desc: 'Commencing a project or paying a milestone invoice confirms mutual agreement to these transparent operational standards.'
      }
    ]
  }
};
