export interface ServiceDetailItem {
  id: string;
  name: string;
  subtitle?: string;
  desc: string;
  fullDesc?: string;
  deliverables: string[];
  goal?: string;
  bestSuitedFor?: string;
  outcome?: string;
}

export interface CategoryGroup {
  id: string;
  eyebrowNumber: string;
  eyebrowColor: string;
  title: string;
  cardBorderClass?: string;
  items: ServiceDetailItem[];
}

export interface ApproachStep {
  step: string;
  title: string;
  desc: string;
}

export interface IntegratedPackage {
  name: string;
  formula: string[];
  summary: string;
}

export const DIRECTORY_CATEGORIES: CategoryGroup[] = [
  // 02 / WEB
  {
    id: '02',
    eyebrowNumber: '02 / WEB',
    eyebrowColor: 'text-blue-600',
    title: 'Additional Web Services',
    items: [
      {
        id: 'landing-page-design',
        name: 'Landing Page Design',
        subtitle: 'Campaign-Focused Landing Pages',
        desc: 'We design focused, high-converting landing pages for marketing campaigns, products, services, events and lead-generation initiatives.',
        fullDesc: 'We design focused, high-converting landing pages for marketing campaigns, products, services, events and lead-generation initiatives. Each page is structured around a specific objective, with clear messaging, strong calls-to-action and a user journey designed to encourage visitors to take the desired action.',
        deliverables: [
          'Conversion-focused page structure',
          'Hero section and value proposition',
          'Service or product presentation',
          'Call-to-action sections',
          'Lead forms or inquiry forms',
          'Mobile-responsive layouts',
          'Basic SEO-friendly page structure',
          'Integration with analytics and tracking tools',
          'Contact, WhatsApp or other conversion points where required'
        ],
        bestSuitedFor: 'advertising campaigns, product launches, service promotions, lead-generation campaigns and specific marketing offers.'
      },
      {
        id: 'website-redesign',
        name: 'Website Redesign',
        subtitle: 'Modern Website Transformation',
        desc: 'We redesign outdated or underperforming websites to create a modern, responsive and user-friendly digital experience.',
        fullDesc: 'We redesign outdated or underperforming websites to create a modern, responsive and user-friendly digital experience. The process focuses on improving visual presentation, information structure, usability, mobile responsiveness and conversion opportunities.',
        deliverables: [
          'Existing website review',
          'Website structure improvement',
          'Modern UI redesign',
          'Responsive design for desktop, tablet and mobile',
          'Navigation and menu improvements',
          'Content hierarchy improvements',
          'Calls-to-action optimization',
          'Contact and inquiry flow improvements',
          'Performance and usability recommendations',
          'Implementation of the approved redesign'
        ],
        goal: 'create a website that looks more professional, communicates clearly and makes it easier for visitors to become customers.'
      },
      {
        id: 'website-speed-optimization',
        name: 'Website Speed Optimization',
        subtitle: 'Faster, More Efficient Websites',
        desc: 'We improve website loading performance by identifying practical technical and front-end issues affecting speed and user experience.',
        fullDesc: 'We improve website loading performance by identifying practical technical and front-end issues affecting speed and user experience. The optimization process focuses on improving asset delivery, page rendering and responsive performance.',
        deliverables: [
          'Performance assessment',
          'Image optimization',
          'CSS and JavaScript optimization',
          'Asset loading improvements',
          'Browser caching recommendations',
          'Unnecessary plugin or script review',
          'Mobile performance improvements',
          'Page structure optimization',
          'Core Web Vitals-oriented improvements',
          'Performance testing before and after optimization'
        ],
        goal: 'improve loading speed, usability and overall website performance across devices and network conditions.'
      },
      {
        id: 'wordpress-website-development',
        name: 'WordPress Website Development',
        subtitle: 'Professional WordPress Websites',
        desc: 'We develop WordPress websites that combine professional design, manageable content structures and practical functionality.',
        fullDesc: 'We develop WordPress websites that combine professional design, manageable content structures and practical functionality. Websites can be built for businesses, agencies, professional services, organizations, campaigns and other use cases.',
        deliverables: [
          'WordPress installation and configuration',
          'Website architecture and page structure',
          'Custom or customized theme implementation',
          'Responsive layouts',
          'Contact and inquiry forms',
          'CMS configuration',
          'Plugin setup',
          'Basic SEO configuration',
          'Security and performance setup',
          'Third-party integrations',
          'Domain and hosting connection',
          'Website deployment'
        ],
        bestSuitedFor: 'corporate websites, service websites, portfolios, blogs, information portals and lead generation websites.'
      },
      {
        id: 'e-commerce-development',
        name: 'E-commerce Development',
        subtitle: 'Complete Online Store Development',
        desc: 'We build e-commerce websites designed to make product discovery, purchasing and customer management straightforward.',
        fullDesc: 'We build e-commerce websites designed to make product discovery, purchasing and customer management straightforward. The store structure is planned around the business model, catalogue size and customer journey.',
        deliverables: [
          'E-commerce platform setup',
          'Product catalogue structure',
          'Product pages',
          'Categories and filters',
          'Shopping cart',
          'Checkout flow',
          'Payment integration',
          'Shipping configuration',
          'Customer account functionality where required',
          'Order management setup',
          'Analytics and conversion tracking',
          'Mobile-first shopping experience',
          'Basic store SEO',
          'Deployment and testing'
        ],
        goal: 'create an online shopping environment that is easy to manage and convenient for customers to use.'
      },
      {
        id: 'shopify-development',
        name: 'Shopify Development',
        subtitle: 'Shopify Store Setup & Customization',
        desc: 'We create and customize Shopify storefronts for businesses looking for a flexible and scalable e-commerce environment.',
        fullDesc: 'We create and customize Shopify storefronts for businesses looking for a flexible and scalable e-commerce environment. From store configuration to theme customization and integrations, we help build a storefront aligned with the brand and sales strategy.',
        deliverables: [
          'Shopify store setup',
          'Theme installation and customization',
          'Homepage and collection structure',
          'Product organization',
          'Product-page optimization',
          'Navigation setup',
          'Checkout configuration',
          'Payment and shipping settings',
          'Apps and third-party integrations',
          'Tracking configuration',
          'Mobile optimization',
          'Conversion-focused improvements',
          'Store launch support'
        ],
        bestSuitedFor: 'new Shopify stores, store migrations, growing e-commerce businesses and brands seeking a more professional online storefront.'
      }
    ]
  },

  // 03 / BRAND
  {
    id: '03',
    eyebrowNumber: '03 / BRAND',
    eyebrowColor: 'text-violet-600',
    title: 'Branding & Creative',
    cardBorderClass: 'border-2 border-violet-400 shadow-lg shadow-violet-100/50 ring-4 ring-violet-50/50',
    items: [
      {
        id: 'logo-design',
        name: 'Logo Design',
        subtitle: 'Distinctive Logo Development',
        desc: 'We design professional logos that provide a recognizable foundation for your brand.',
        fullDesc: 'We design professional logos that provide a recognizable foundation for your brand. The process focuses on creating a visual mark that is appropriate for the business, audience and intended market position.',
        deliverables: [
          'Brand understanding and creative direction',
          'Logo concept development',
          'Multiple design directions where agreed',
          'Typography selection',
          'Symbol or icon development',
          'Primary logo version',
          'Alternate logo variations',
          'Light and dark versions',
          'Digital-ready files',
          'Print-ready files'
        ],
        goal: 'create a memorable and flexible logo that can be used consistently across digital and physical brand touchpoints.'
      },
      {
        id: 'brand-identity-design',
        name: 'Brand Identity Design',
        subtitle: 'Complete Visual Brand Identity',
        desc: 'We develop a coherent visual language around your logo so that the brand looks consistent across all customer touchpoints.',
        fullDesc: 'We develop a coherent visual language around your logo so that the brand looks consistent across websites, social media, documents, marketing materials and business communications.',
        deliverables: [
          'Brand positioning direction',
          'Logo usage guidance',
          'Color palette',
          'Typography system',
          'Font hierarchy',
          'Supporting graphic elements',
          'Icon and visual style direction',
          'Image style recommendations',
          'Social media visual direction',
          'Business communication styling',
          'Brand consistency guidelines'
        ],
        outcome: 'a unified identity that makes the business appear more professional, recognizable and consistent across every customer interaction.'
      },
      {
        id: 'business-card-design',
        name: 'Business Card Design',
        subtitle: 'Professional Business Cards',
        desc: 'We create clean and professionally structured business cards that communicate essential contact information with brand consistency.',
        fullDesc: 'We create clean and professionally structured business cards that communicate essential contact information while maintaining visual consistency with the brand identity.',
        deliverables: [
          'Front and back design',
          'Contact information layout',
          'Logo placement',
          'Brand colors and typography',
          'QR code placement where needed',
          'Print-ready artwork',
          'Digital sharing version where required'
        ]
      },
      {
        id: 'brochure-design',
        name: 'Brochure Design',
        subtitle: 'Marketing & Corporate Brochures',
        desc: 'We design brochures that organize information in a clear and visually engaging format for services and company presentations.',
        fullDesc: 'We design brochures that organize information in a clear and visually engaging format. Brochures can be used to present services, products, company information, solutions or promotional offers.',
        deliverables: [
          'Content structure',
          'Page layout',
          'Visual hierarchy',
          'Typography and spacing',
          'Images and graphic elements',
          'Tables or service sections where required',
          'Brand integration',
          'Print-ready PDF',
          'Digital-friendly version'
        ],
        bestSuitedFor: 'corporate profiles, service brochures, product brochures, sales presentations and promotional materials.'
      },
      {
        id: 'graphic-design',
        name: 'Graphic Design',
        subtitle: 'Custom Business & Marketing Graphics',
        desc: 'We provide custom graphic design support for businesses requiring professional visual content across digital and offline marketing channels.',
        fullDesc: 'We provide custom graphic design support for businesses requiring professional visual content across digital and offline marketing channels. All designs are developed around the brand\'s visual identity and communication objectives.',
        deliverables: [
          'Marketing creatives',
          'Promotional graphics',
          'Social media visuals',
          'Banners',
          'Website graphics',
          'Presentation graphics',
          'Digital advertisements',
          'Flyers',
          'Marketing materials',
          'Business communication graphics'
        ]
      }
    ]
  },

  // 04 / ENGINEERING
  {
    id: '04',
    eyebrowNumber: '04 / ENGINEERING',
    eyebrowColor: 'text-emerald-600',
    title: 'Development & Technical Services',
    items: [
      {
        id: 'custom-web-development',
        name: 'Custom Web Development',
        subtitle: 'Bespoke Websites & Web Systems',
        desc: 'We develop custom websites and web-based systems for businesses that require functionality beyond standard templates or CMS configurations.',
        fullDesc: 'We develop custom websites and web-based systems for businesses that require functionality beyond standard templates or CMS configurations.',
        deliverables: [
          'Custom front-end development',
          'Back-end development',
          'Database integration',
          'APIs and third-party integrations',
          'User authentication',
          'Business logic',
          'Custom forms',
          'Admin functionality',
          'Dashboards',
          'Automation workflows',
          'Performance optimization',
          'Responsive development',
          'Testing and deployment'
        ],
        bestSuitedFor: 'custom business platforms, portals, service systems, internal tools and advanced web applications.'
      },
      {
        id: 'application-development',
        name: 'Application Development',
        subtitle: 'Business Applications & Digital Platforms',
        desc: 'We develop custom applications designed around specific operational requirements for internal teams or customer portals.',
        fullDesc: 'We develop custom applications designed around specific operational requirements. Applications can be used internally by teams or externally by customers, partners or other stakeholders. The development process begins with understanding requirements, workflows, users and business objectives before building the appropriate solution.',
        deliverables: [
          'Business dashboards',
          'Customer portals',
          'Admin systems',
          'Booking systems',
          'Management platforms',
          'Workflow applications',
          'Reporting systems',
          'Internal business tools',
          'Custom operational software'
        ]
      },
      {
        id: 'mobile-app-development',
        name: 'Mobile App Development',
        subtitle: 'Customer & Business Mobile Applications',
        desc: 'We provide mobile application development for customer-facing products and internal business requirements.',
        fullDesc: 'We provide mobile application development for customer-facing products and internal business requirements. Applications are designed around the required user experience, functionality and business workflow.',
        deliverables: [
          'User registration and login',
          'Profiles',
          'Notifications',
          'Forms',
          'Search',
          'Payments',
          'Booking features',
          'Dashboards',
          'API integrations',
          'Location-related features',
          'Account management'
        ]
      },
      {
        id: 'uiux-design',
        name: 'UI/UX Design',
        subtitle: 'User Experience & Interface Design',
        desc: 'We design intuitive digital experiences that make websites and applications easier to understand and use.',
        fullDesc: 'We design intuitive digital experiences that make websites and applications easier to understand and use. The process connects business objectives with user needs to create practical interfaces.',
        deliverables: [
          'User-flow planning',
          'Information architecture',
          'Wireframes',
          'Page and screen layouts',
          'Navigation systems',
          'Responsive interface design',
          'Component systems',
          'Forms and interaction patterns',
          'Conversion-focused design',
          'Design handoff for development'
        ],
        goal: 'reduce friction, improve usability and create a consistent experience across devices and platforms.'
      },
      {
        id: 'payment-gateway-integration',
        name: 'Payment Gateway Integration',
        subtitle: 'Secure Online Payment Connectivity',
        desc: 'We integrate suitable payment gateways into websites, online stores and digital applications for reliable transactions.',
        fullDesc: 'We integrate suitable payment gateways into websites, online stores and digital applications so customers can complete transactions through the required payment methods. The exact gateway and implementation depend on the client\'s market, platform and payment requirements.',
        deliverables: [
          'Payment gateway configuration',
          'Checkout integration',
          'API integration',
          'Payment status handling',
          'Success and failure workflows',
          'Order/payment synchronization',
          'Testing and transaction-flow verification'
        ]
      },
      {
        id: 'content-management-setup',
        name: 'Content Management Setup',
        subtitle: 'Easier Website Content Management',
        desc: 'We configure content management systems so authorized users can update agreed website content without code edits.',
        fullDesc: 'We configure content management systems so authorized users can update agreed website content without relying on developers for every routine change.',
        deliverables: [
          'CMS configuration',
          'Page structure',
          'Content fields',
          'Media management',
          'User roles',
          'Editing workflows',
          'Basic content organization',
          'Required plugin or module setup'
        ]
      },
      {
        id: 'domain-registration-setup',
        name: 'Domain Registration & Setup',
        subtitle: 'Domain Configuration & Connection',
        desc: 'We assist with domain registration and technical configuration required to connect the domain to the website environment.',
        fullDesc: 'We assist with domain registration and technical configuration required to connect the domain to the website environment.',
        deliverables: [
          'Domain selection guidance',
          'Domain registration',
          'DNS configuration',
          'Website connection',
          'SSL-related configuration',
          'Redirect setup',
          'Basic domain troubleshooting'
        ]
      },
      {
        id: 'web-hosting',
        name: 'Web Hosting',
        subtitle: 'Website Hosting & Deployment',
        desc: 'We assist with selecting, configuring and deploying websites to an appropriate hosting environment.',
        fullDesc: 'We assist with selecting, configuring and deploying websites to an appropriate hosting environment.',
        deliverables: [
          'Hosting setup',
          'Server configuration',
          'Website deployment',
          'SSL setup',
          'Database configuration',
          'Email-related configuration where applicable',
          'Domain connection',
          'Backup configuration',
          'Basic server maintenance support'
        ]
      },
      {
        id: 'site-maintenance',
        name: 'Site Maintenance',
        subtitle: 'Ongoing Website Support',
        desc: 'We provide ongoing maintenance support to keep websites operational, updated and reliable after launch.',
        fullDesc: 'We provide ongoing maintenance support to keep websites operational, updated and reliable after launch. Maintenance can be structured as an ongoing support arrangement depending on the website\'s requirements.',
        deliverables: [
          'Content updates',
          'Plugin or system updates',
          'Technical fixes',
          'Broken-link checks',
          'Performance monitoring',
          'Security-related maintenance',
          'Backup checks',
          'Small design adjustments',
          'Troubleshooting',
          'Routine website support'
        ]
      }
    ]
  },

  // 05 / CONTENT
  {
    id: '05',
    eyebrowNumber: '05 / CONTENT',
    eyebrowColor: 'text-orange-600',
    title: 'Social Media & Content',
    items: [
      {
        id: 'social-media-post-design',
        name: 'Social Media Post Design',
        subtitle: 'Branded Social Media Creatives',
        desc: 'We design professional social media graphics that help businesses maintain a consistent and recognizable online presence.',
        fullDesc: 'We design professional social media graphics that help businesses maintain a consistent and recognizable online presence. Each creative can follow the brand\'s colors, typography, visual style and communication guidelines.',
        deliverables: [
          'Promotional posts',
          'Service highlights',
          'Product announcements',
          'Educational posts',
          'Company announcements',
          'Offers and campaigns',
          'Event promotions',
          'Quote graphics',
          'Brand awareness creatives',
          'Informational graphics'
        ]
      }
    ]
  },

  // 06 / PAID GROWTH
  {
    id: '06',
    eyebrowNumber: '06 / PAID GROWTH',
    eyebrowColor: 'text-rose-600',
    title: 'Advertising',
    items: [
      {
        id: 'google-ads-management',
        name: 'Google Ads Management',
        subtitle: 'Search & Google Advertising Management',
        desc: 'We manage Google advertising campaigns with the objective of reaching relevant audiences and generating qualified traffic.',
        fullDesc: 'We manage Google advertising campaigns with the objective of reaching relevant audiences and generating qualified traffic, inquiries or sales.',
        deliverables: [
          'Campaign strategy',
          'Account setup',
          'Campaign structure',
          'Keyword research',
          'Ad creation',
          'Audience targeting',
          'Conversion tracking',
          'Budget configuration',
          'Performance monitoring',
          'Search-term analysis',
          'Bid and campaign optimization',
          'Reporting'
        ],
        goal: 'improve campaign efficiency while aligning advertising activity with measurable business objectives.'
      },
      {
        id: 'meta-ads-management',
        name: 'Meta Ads Management',
        subtitle: 'Facebook & Instagram Advertising',
        desc: 'We create and manage advertising campaigns across Meta platforms with an emphasis on audience targeting and conversions.',
        fullDesc: 'We create and manage advertising campaigns across Meta platforms with an emphasis on audience targeting, creative performance and measurable conversions.',
        deliverables: [
          'Campaign planning',
          'Audience research',
          'Campaign setup',
          'Ad-set structure',
          'Creative coordination',
          'Lead-generation campaigns',
          'Website traffic campaigns',
          'Conversion campaigns',
          'Retargeting',
          'Tracking setup',
          'Performance monitoring',
          'Optimization'
        ]
      },
      {
        id: 'meta-campaign-management',
        name: 'Meta Campaign Management',
        subtitle: 'Structured Campaign Execution',
        desc: 'We provide end-to-end management of Meta campaigns from planning through ongoing optimization.',
        fullDesc: 'We provide end-to-end management of Meta campaigns from planning through ongoing optimization.',
        deliverables: [
          'Campaign objectives',
          'Audience segmentation',
          'Creative planning',
          'Ad-set organization',
          'Placement strategy',
          'Pixel/tracking coordination',
          'Budget management',
          'Performance analysis',
          'Testing',
          'Optimization and reporting'
        ]
      },
      {
        id: 'meta-business-suite-setup',
        name: 'Meta Business Suite Setup',
        subtitle: 'Meta Business Infrastructure',
        desc: 'We assist with configuring Meta Business Suite and related business assets for organized social management.',
        fullDesc: 'We assist with configuring Meta Business Suite and related business assets so organizations can manage their Facebook and Instagram operations more systematically.',
        deliverables: [
          'Business account configuration',
          'Page connection',
          'Instagram connection',
          'User access and permissions',
          'Business assets',
          'Ad-account coordination',
          'Basic account organization',
          'Business settings'
        ]
      }
    ]
  },

  // 07 / SEARCH
  {
    id: '07',
    eyebrowNumber: '07 / SEARCH',
    eyebrowColor: 'text-blue-600',
    title: 'SEO & Analytics',
    items: [
      {
        id: 'seo-audit',
        name: 'SEO Audit',
        subtitle: 'Search Visibility & Technical Review',
        desc: 'We conduct a structured SEO audit to identify technical, on-page and search visibility issues affecting organic performance.',
        fullDesc: 'We conduct a structured SEO audit to identify technical, on-page and search visibility issues that may affect organic performance. The result is a practical set of recommendations prioritized by importance.',
        deliverables: [
          'Website indexability',
          'Technical SEO',
          'Page titles',
          'Meta descriptions',
          'Heading structure',
          'Internal links',
          'Content quality',
          'URL structure',
          'Mobile readiness',
          'Website performance',
          'Sitemap and robots configuration',
          'Search visibility',
          'Basic competitive observations'
        ]
      },
      {
        id: 'website-audit',
        name: 'Website Audit',
        subtitle: 'Complete Website Performance Review',
        desc: 'We assess the website from technical, visual, usability, content and conversion perspectives.',
        fullDesc: 'We assess the website from technical, visual, usability, content and conversion perspectives.',
        deliverables: [
          'Website design',
          'Mobile responsiveness',
          'Navigation',
          'User experience',
          'Content clarity',
          'Page performance',
          'Technical setup',
          'Calls-to-action',
          'Forms',
          'Trust signals',
          'Conversion flow',
          'SEO foundations',
          'Analytics readiness'
        ],
        outcome: 'a clear understanding of what is working, what is limiting performance and what should be improved.'
      },
      {
        id: 'local-search-analysis',
        name: 'Local Search Analysis',
        subtitle: 'Local Visibility Assessment',
        desc: 'We examine opportunities for improving visibility in location-based searches and attracting local customers.',
        fullDesc: 'We examine opportunities for improving visibility in location-based searches and attracting customers within a specific geographic market.',
        deliverables: [
          'Local keyword opportunities',
          'Google Business Profile presence',
          'Local search competitors',
          'Business category relevance',
          'Location-specific landing pages',
          'Review presence',
          'Local citations and directories',
          'On-page local signals',
          'Local content opportunities'
        ]
      },
      {
        id: 'search-engine-optimization',
        name: 'Search Engine Optimization',
        subtitle: 'Ongoing SEO Growth',
        desc: 'We provide ongoing SEO support focused on building stronger organic search visibility over time.',
        fullDesc: 'We provide ongoing SEO support focused on building stronger search visibility over time. SEO is approached as a continuous process rather than a one-time website change.',
        deliverables: [
          'Technical SEO improvements',
          'On-page optimization',
          'Keyword research',
          'Content recommendations',
          'Internal linking',
          'Page optimization',
          'Search-performance monitoring',
          'Local SEO support',
          'Competitor analysis',
          'Search Console monitoring',
          'Ongoing recommendations'
        ]
      },
      {
        id: 'google-business-profile-setup',
        name: 'Google Business Profile Setup',
        subtitle: 'Local Business Profile Setup',
        desc: 'We assist businesses with establishing and organizing their Google Business Profile for local visibility.',
        fullDesc: 'We assist businesses with establishing and organizing their Google Business Profile to create a stronger foundation for local search visibility.',
        deliverables: [
          'Profile configuration',
          'Business information',
          'Categories',
          'Service information',
          'Business description',
          'Contact information',
          'Website connection',
          'Images and basic profile optimization',
          'Location information'
        ]
      },
      {
        id: 'search-console-setup',
        name: 'Search Console Setup',
        subtitle: 'Google Search Performance Monitoring',
        desc: 'We configure Google Search Console so website owners can monitor search visibility, indexing and search metrics.',
        fullDesc: 'We configure Google Search Console so website owners can monitor search visibility, indexing and important search-performance data.',
        deliverables: [
          'Property verification',
          'Domain configuration',
          'Sitemap submission',
          'Indexing checks',
          'Search-performance setup',
          'Basic reporting configuration'
        ]
      },
      {
        id: 'google-analytics-ga4-setup',
        name: 'Google Analytics (GA4) Setup',
        subtitle: 'Website Analytics & Measurement',
        desc: 'We configure Google Analytics 4 to help businesses understand traffic sources, visitor journeys and conversions.',
        fullDesc: 'We configure Google Analytics 4 to help businesses understand where visitors come from, how they interact with the website and which actions matter to the business.',
        deliverables: [
          'GA4 configuration',
          'Website connection',
          'Event tracking',
          'Conversion events',
          'Traffic-source tracking',
          'Basic reporting',
          'Marketing measurement',
          'Testing and verification'
        ]
      },
      {
        id: 'google-tag-manager-setup',
        name: 'Google Tag Manager Setup',
        subtitle: 'Centralized Tracking Management',
        desc: 'We configure Google Tag Manager to make website tracking and marketing tags easier to manage cleanly.',
        fullDesc: 'We configure Google Tag Manager to make website tracking and marketing tags easier to manage in an organized environment.',
        deliverables: [
          'GTM container configuration',
          'Analytics tags',
          'Conversion tags',
          'Event tracking',
          'Marketing tags',
          'Trigger configuration',
          'Testing',
          'Tracking validation'
        ]
      },
      {
        id: 'conversion-rate-optimization',
        name: 'Conversion Rate Optimization',
        subtitle: 'Turn More Visitors Into Customers',
        desc: 'We optimize website elements to turn higher proportions of visitors into leads, buyers, or inquiries.',
        fullDesc: 'Conversion Rate Optimization focuses on improving the percentage of website visitors who complete valuable actions such as submitting an inquiry, making a purchase, booking a service or contacting the business. The objective is to improve business outcomes from the traffic the website already receives.',
        deliverables: [
          'Headlines',
          'Value propositions',
          'Calls-to-action',
          'Page structure',
          'Forms',
          'Trust signals',
          'Content clarity',
          'Navigation',
          'User journeys',
          'Landing pages',
          'Checkout experience',
          'Mobile conversion flow'
        ]
      }
    ]
  },

  // 08 / GROWTH
  {
    id: '08',
    eyebrowNumber: '08 / GROWTH',
    eyebrowColor: 'text-cyan-600',
    title: 'Digital Marketing',
    items: [
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        subtitle: 'Integrated Digital Growth Support',
        desc: 'We provide coordinated digital marketing support across websites, advertising, social media, analytics and search.',
        fullDesc: 'We provide coordinated digital marketing support across websites, advertising, social media, analytics, search and lead-generation activities. The approach connects individual marketing channels to broader business objectives.',
        deliverables: [
          'Digital strategy',
          'Campaign planning',
          'Paid advertising',
          'Social media',
          'SEO',
          'Analytics',
          'Lead generation',
          'Conversion improvement',
          'Content direction',
          'Performance monitoring'
        ]
      },
      {
        id: 'social-media-marketing',
        name: 'Social Media Marketing',
        subtitle: 'Social Presence & Audience Growth',
        desc: 'We support businesses in building an organized and consistent social media presence through content planning and campaigns.',
        fullDesc: 'We support businesses in building an organized and consistent social media presence through content planning, publishing support, campaign coordination and performance analysis.',
        deliverables: [
          'Social media strategy',
          'Content planning',
          'Content calendars',
          'Post coordination',
          'Campaign support',
          'Audience engagement direction',
          'Platform optimization',
          'Performance monitoring',
          'Creative coordination'
        ]
      },
      {
        id: 'email-marketing',
        name: 'Email Marketing',
        subtitle: 'Customer Communication & Email Campaigns',
        desc: 'We help businesses use email as a structured channel for communication, lead nurturing and customer retention.',
        fullDesc: 'We help businesses use email as a structured channel for communication, lead nurturing and customer retention.',
        deliverables: [
          'Email strategy',
          'Campaign planning',
          'Email design',
          'Newsletter setup',
          'Contact-list organization',
          'Segmentation',
          'Automated sequences',
          'Promotional campaigns',
          'Customer follow-up',
          'Performance tracking'
        ]
      },
      {
        id: 'marketing-automation',
        name: 'Marketing Automation',
        subtitle: 'Automated Marketing Workflows',
        desc: 'We design marketing workflows that reduce repetitive manual tasks and streamline lead follow-up.',
        fullDesc: 'We design marketing workflows that reduce repetitive manual tasks and improve how leads and customers are followed up. Automation is designed around the existing business process and available technology.',
        deliverables: [
          'Lead follow-up',
          'Welcome emails',
          'Inquiry notifications',
          'Customer reminders',
          'Lead qualification',
          'Internal alerts',
          'Follow-up sequences',
          'Customer re-engagement'
        ]
      },
      {
        id: 'lead-generation',
        name: 'Lead Generation',
        subtitle: 'Generate More Qualified Business Enquiries',
        desc: 'We create and optimize marketing systems designed to attract potential customers and convert them into qualified leads.',
        fullDesc: 'We create and optimize marketing systems designed to attract potential customers and convert them into qualified business leads.',
        deliverables: [
          'Lead-generation strategy',
          'Landing pages',
          'Paid advertising',
          'Lead forms',
          'Conversion tracking',
          'Campaign optimization',
          'Lead qualification workflows',
          'CRM or communication integration',
          'Follow-up automation'
        ],
        goal: 'create a repeatable system for generating relevant business opportunities.'
      },
      {
        id: 'online-reputation-management',
        name: 'Online Reputation Management',
        subtitle: 'Protect & Strengthen Your Digital Presence',
        desc: 'We help businesses monitor and improve their online reputation across relevant digital touchpoints.',
        fullDesc: 'We help businesses monitor and improve their online reputation across relevant digital channels. The objective is to maintain a credible, professional and trustworthy public presence.',
        deliverables: [
          'Reputation monitoring',
          'Review visibility',
          'Profile consistency',
          'Response guidance',
          'Online presence assessment',
          'Brand perception review',
          'Reputation improvement recommendations'
        ]
      },
      {
        id: 'digital-marketing-consulting',
        name: 'Digital Marketing Consulting',
        subtitle: 'Strategic Digital Marketing Guidance',
        desc: 'We provide focused consulting for businesses that need an experienced perspective on digital strategy and growth priorities.',
        fullDesc: 'We provide focused consulting for businesses that need an experienced perspective on digital strategy, marketing channels or online growth opportunities. Consulting can be structured as a one-time strategy session, audit or ongoing advisory support.',
        deliverables: [
          'Digital positioning',
          'Website strategy',
          'SEO',
          'Paid advertising',
          'Social media',
          'Lead generation',
          'Analytics',
          'Conversion optimization',
          'Marketing funnels',
          'Budget allocation',
          'Channel selection',
          'Growth priorities'
        ]
      }
    ]
  },

  // 09 / BUSINESS
  {
    id: '09',
    eyebrowNumber: '09 / BUSINESS',
    eyebrowColor: 'text-purple-600',
    title: 'B2B Business Services',
    items: [
      {
        id: 'business-to-business-service',
        name: 'Business-to-Business Service',
        subtitle: 'Tailored B2B Digital & Business Support',
        desc: 'We provide digital and business support services tailored to organizations working in B2B environments.',
        fullDesc: 'We provide digital and business support services tailored to organizations working in B2B environments. The focus is on understanding business requirements and delivering practical solutions that support sales, operations and customer acquisition. Solutions are adapted to the organization\'s industry, target market and operating model.',
        deliverables: [
          'B2B website development',
          'Lead generation',
          'Digital marketing',
          'Business process support',
          'Corporate website strategy',
          'Marketing technology setup',
          'Customer acquisition support',
          'Digital transformation assistance'
        ]
      },
      {
        id: 'telemarketing',
        name: 'Telemarketing',
        subtitle: 'Structured B2B Outbound Calling',
        desc: 'We provide structured telemarketing support for businesses that need help identifying and qualifying prospects.',
        fullDesc: 'We provide structured telemarketing support for businesses that need help identifying prospects, initiating conversations and qualifying potential opportunities. Scripts and workflows can be adapted to the target market, service offering and qualification criteria.',
        deliverables: [
          'Prospect list preparation',
          'Outbound calling',
          'Lead introduction',
          'Appointment setting',
          'Requirement identification',
          'Lead qualification',
          'Follow-up calls',
          'Prospect status updates',
          'Reporting'
        ]
      },
      {
        id: 'e-commerce-consulting',
        name: 'E-commerce Consulting',
        subtitle: 'Strategic E-commerce Guidance',
        desc: 'We advise businesses on planning, improving or scaling online stores across technology and marketing.',
        fullDesc: 'We advise businesses on planning, improving or scaling online stores across technology, customer experience, operations and marketing. The goal is to build a practical e-commerce model aligned with the company\'s commercial objectives.',
        deliverables: [
          'E-commerce platform selection',
          'Store structure',
          'Product catalogue organization',
          'Customer journey',
          'Checkout experience',
          'Payment solutions',
          'Shipping setup',
          'Analytics',
          'Conversion optimization',
          'Digital marketing',
          'E-commerce growth opportunities'
        ]
      },
      {
        id: 'corporate-website-consultation',
        name: 'Corporate Website Consultation',
        subtitle: 'Website Strategy Before Development',
        desc: 'We help organizations define their website requirements before committing to design or development.',
        fullDesc: 'We help organizations define their website requirements before committing to design or development. This service is particularly useful for companies planning a new corporate website or replacing an existing one.',
        deliverables: [
          'Business objectives',
          'Website goals',
          'Target audiences',
          'Sitemap and page structure',
          'Content requirements',
          'Functional requirements',
          'Lead-generation requirements',
          'CMS requirements',
          'Integration needs',
          'SEO considerations',
          'Analytics requirements',
          'Hosting and technical requirements',
          'Project scope and priorities'
        ],
        outcome: 'a clearer website roadmap that helps reduce unnecessary development, improve decision making and create a stronger foundation for the final project.'
      }
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We understand the business, audience, objectives, existing digital presence and technical requirements.'
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'We define the appropriate structure, technology, creative direction, marketing channels and measurable objectives.'
  },
  {
    step: '03',
    title: 'Create',
    desc: 'We design and develop the required website, application, brand assets, content or campaign systems.'
  },
  {
    step: '04',
    title: 'Launch',
    desc: 'We configure the technical environment, tracking, integrations and deployment requirements before launch.'
  },
  {
    step: '05',
    title: 'Optimize',
    desc: 'We use performance data, customer behavior and business objectives to identify opportunities for continued improvement.'
  },
  {
    step: '06',
    title: 'Support',
    desc: 'We provide ongoing maintenance, marketing, analytics, technical assistance and strategic support where required.'
  }
];

export const INTEGRATED_SOLUTIONS: IntegratedPackage[] = [
  {
    name: 'Website Launch Package',
    formula: ['Corporate Website', 'UI/UX Design', 'WordPress Development', 'Domain & Hosting', 'GA4', 'Search Console', 'Basic SEO'],
    summary: 'A complete end-to-end web rollout ensuring verified technical setup, search indexing, and professional branding.'
  },
  {
    name: 'Lead Generation Package',
    formula: ['Landing Page', 'Google Ads', 'Meta Ads', 'Conversion Tracking', 'Google Tag Manager', 'Lead Follow-up'],
    summary: 'Engineered for maximum ROI with high-converting pages, paid campaign coordination, and automated inquiry follow-up.'
  },
  {
    name: 'E-commerce Growth Package',
    formula: ['Shopify Development', 'Product Structure', 'Payment Integration', 'GA4', 'SEO', 'Meta Ads', 'Conversion Optimization'],
    summary: 'Built to streamline product discovery, frictionless checkout, automated tracking, and scalable paid traffic.'
  },
  {
    name: 'Brand Launch Package',
    formula: ['Logo Design', 'Brand Identity', 'Business Cards', 'Brochure', 'Website', 'Social Media Post Design'],
    summary: 'Establishes instant market credibility and visual authority across digital, print, and social media touchpoints.'
  },
  {
    name: 'Digital Growth Package',
    formula: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Analytics', 'Conversion Rate Optimization', 'Lead Generation'],
    summary: 'Full-funnel digital acceleration combining organic organic search, performance advertising, and continuous CRO.'
  },
  {
    name: 'Corporate Digital Package',
    formula: ['Corporate Website Consultation', 'UI/UX Design', 'Custom Web Development', 'CMS', 'Analytics', 'SEO', 'Ongoing Maintenance'],
    summary: 'Strategic enterprise digital transformation from architectural roadmap to custom engineering and long-term support.'
  }
];

export const WHY_SERVICES_WORK_TOGETHER = [
  { factor: 'A website', role: 'creates the digital foundation.' },
  { factor: 'Branding', role: 'establishes recognition and trust.' },
  { factor: 'Engineering', role: 'adds functionality and automation.' },
  { factor: 'Content', role: 'creates ongoing communication.' },
  { factor: 'Paid advertising', role: 'brings targeted traffic.' },
  { factor: 'SEO', role: 'builds sustainable search visibility.' },
  { factor: 'Analytics', role: 'provides measurable insight.' },
  { factor: 'Conversion optimization', role: 'turns traffic into action.' },
  { factor: 'Digital marketing', role: 'connects these activities into a growth system.' },
  { factor: 'B2B services', role: 'extends that system into prospecting, business development and commercial operations.' }
];
