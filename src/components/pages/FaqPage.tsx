import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Check, Code, Search, DollarSign, ChevronDown } from 'lucide-react';

interface FaqPageProps {
  onOpenConsultation: (pkg?: string) => void;
}

export function FaqPage({ onOpenConsultation }: FaqPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    { title: 'Website Design & Development', desc: 'Business websites planned around the client’s goals, audience, content and required functionality.' },
    { title: 'WordPress Development', desc: 'WordPress-based websites where an editable content management system is appropriate.' },
    { title: 'Ecommerce Websites', desc: 'Product/catalogue pages, categories, cart functionality and payment integrations as required by the project.' },
    { title: 'Landing Pages', desc: 'Focused pages designed around a specific service, campaign, offer or lead-generation objective.' },
    { title: 'UI/UX Design', desc: 'Page structure, navigation, layout and user experience designed to make information easier to understand and actions easier to complete.' },
    { title: 'SEO Foundations', desc: 'Search-friendly page structure, headings, metadata, mobile responsiveness and performance considerations, with analytics/Search Console setup where included.' },
    { title: 'Local SEO & Google Business Profile', desc: 'Setup and optimization support intended to strengthen a business’s local online presence.' },
    { title: 'Digital Advertising', desc: 'Google Ads and Meta Ads campaign setup, targeting, creatives, tracking and optimization where included.' },
    { title: 'Maintenance & Support', desc: 'Website updates, backups, content changes, troubleshooting and security checks according to the agreed support scope.' },
  ];

  const faqs = [
    { q: '1. What services does your agency provide?', a: 'We provide website design and development, WordPress development, ecommerce websites, landing pages, UI/UX design, SEO foundations, Google Business Profile support, Google Ads, Meta Ads, website maintenance, branding and digital marketing. The exact deliverables depend on the selected package and project scope.' },
    { q: '2. How much does a professional website cost?', a: 'Professional business website packages start from ₹20,000. The final price can vary according to page count, functionality, design requirements, integrations, content requirements and other project-specific needs.' },
    { q: '3. Why choose a ₹20,000 website instead of a ₹3,999 website?', a: 'A ₹3,999 website can be suitable when the main requirement is a simple online presence. The ₹20,000 professional package is positioned for businesses that need more planning, customization, business-focused structure, lead-generation elements, mobile responsiveness and SEO foundations. The correct choice depends on the client’s goals and scope.' },
    { q: '4. What is the main difference between the two packages?', a: 'The difference is not only page count. It can include the level of customization, planning, design, content structure, functionality, integrations, SEO preparation, conversion-focused sections and support. Features should be compared against the final written scope rather than price alone.' },
    { q: '5. Will the website be mobile-friendly?', a: 'The professional package is intended to use responsive layouts so the website can adapt to smartphones, tablets and desktop screens. Final device/browser testing should be performed as part of the agreed project scope.' },
    { q: '6. Will my website be SEO-friendly?', a: 'The website can be built with SEO fundamentals such as logical page structure, descriptive headings, metadata, mobile responsiveness and performance considerations. SEO setup does not guarantee rankings; search visibility depends on the website, content, competition, technical factors and ongoing SEO work.' },
    { q: '7. Can you redesign an existing website?', a: 'Yes. An existing website can be reviewed and redesigned to improve visual presentation, usability, mobile experience, speed, information architecture and conversion potential, subject to the project scope.' },
    { q: '8. Can you create an ecommerce website?', a: 'Yes. Ecommerce projects can include product pages, categories, cart functionality and payment-gateway integration, with additional features determined by the business requirements and selected platform.' },
    { q: '9. Do you provide domain and hosting?', a: 'We can assist with domain registration, hosting setup, SSL, business email and deployment. Domain and hosting charges may be separate unless explicitly included in the final package.' },
    { q: '10. Can I update the website myself?', a: 'For suitable platforms such as WordPress, a content management system can allow the client to edit text, images, products and other content. The exact editing access and training provided should be confirmed in the project scope.' },
    { q: '11. Do you provide website maintenance?', a: 'Yes. Maintenance can cover software updates, backups, content changes, troubleshooting and security checks. The frequency and included tasks depend on the selected maintenance plan.' },
    { q: '12. Can you set up Google Business Profile?', a: 'Yes. Google Business Profile setup and optimization support can be provided to help establish a business’s local online presence. Ownership and verification remain subject to Google’s requirements.' },
    { q: '13. Do you provide Google Ads and Meta Ads?', a: 'Yes. Services can include campaign setup, audience targeting, creative preparation, tracking and optimization. Advertising spend paid to the advertising platform is separate from agency/service fees unless explicitly stated' },
    { q: '14. Can you help generate leads through the website?', a: 'Yes. A website can be structured for lead generation using clear calls-to-action, enquiry forms, WhatsApp integration, landing pages and conversion-focused sections. Lead volume is not guaranteed because results depend on traffic, offer, market, competition and follow-up.' },
    { q: '15. How long does a website take to build?', a: 'Timelines depend on project size, revisions, integrations and how quickly the required text, images, brand assets and approvals are provided. A delivery schedule should be agreed after requirements are finalized.' },
    { q: '16. Will you provide website content and images?', a: 'Content, graphics and image selection can be assisted with depending on the package. Client-provided brand assets and approved content can also be incorporated.' },
    { q: '17. Can you integrate WhatsApp, payment gateways and analytics?', a: 'Yes, where technically supported and included in the project scope. Possible integrations include WhatsApp, enquiry forms, payment gateways, Google Analytics, Google Tag Manager and social-media links.' },
    { q: '18. Is a professional website necessary for a small business?', a: 'Not every business needs the same level of website investment. A professional website can provide a central source of information, support credibility, receive enquiries outside business hours and serve visitors arriving from search, advertising or social media.' },
    { q: '19. Do you guarantee Google rankings or leads?', a: 'No responsible website or SEO service should promise a guaranteed Google ranking or a fixed number of leads. Search rankings and lead volume depend on many factors outside the website alone. Services should be described in terms of the work and deliverables included.' },
    { q: '20. Why should I choose your agency?', a: 'The agency’s stated approach is to focus on business objectives, professional design, user experience, mobile responsiveness, SEO foundations and lead generation rather than simply publishing a template. Clients should compare the final scope, deliverables, support and expected business use before choosing a package.' }
  ];

  const comparisons = [
    { feature: 'Online presence', basic: '✓', pro: '✓' },
    { feature: 'Template-based design', basic: 'Usually', pro: 'As required' },
    { feature: 'Custom business-focused design', basic: 'Limited', pro: '✓' },
    { feature: 'Responsive/mobile layout', basic: 'Depends on provider', pro: '✓' },
    { feature: 'Professional page structure', basic: 'Basic', pro: '✓' },
    { feature: 'Conversion-focused layout', basic: 'Limited', pro: '✓' },
    { feature: 'Lead-generation elements', basic: 'Limited', pro: '✓' },
    { feature: 'SEO foundations', basic: 'Basic / limited', pro: '✓' },
    { feature: 'Analytics setup', basic: 'Depends*', pro: '✓*' },
    { feature: 'Search Console setup', basic: 'Depends*', pro: '✓*' },
    { feature: 'WhatsApp integration', basic: 'Depends*', pro: '✓*' },
    { feature: 'Contact/enquiry forms', basic: 'Basic', pro: '✓' },
    { feature: 'Branding integration', basic: 'Limited', pro: '✓' },
    { feature: 'Custom sections', basic: 'Limited', pro: '✓' },
    { feature: 'Redesign/customization', basic: 'Limited', pro: '✓' },
    { feature: 'Ecommerce', basic: 'Usually extra', pro: 'Available as required' },
    { feature: 'Payment gateway', basic: 'Usually extra', pro: 'Available as required' },
    { feature: 'Professional consultation', basic: 'Limited', pro: '✓' },
    { feature: 'Ongoing support', basic: 'Limited*', pro: '✓*' },
    { feature: 'Scalability', basic: 'Limited', pro: '✓' },
    { feature: 'Business strategy', basic: 'Not included', pro: '✓' }
  ];

  const seoGuidelines = [
    { title: 'Primary service topics', desc: 'website design, website development, WordPress development, ecommerce website development, landing page design, UI/UX design, SEO services, local SEO, Google Business Profile, Google Ads, Meta Ads and website maintenance.' },
    { title: 'On-page SEO', desc: 'Each important page should have a clear search intent, unique title, useful meta description, one primary heading, descriptive subheadings, readable copy, relevant internal links and appropriately optimized images.' },
    { title: 'Local SEO', desc: 'Where relevant, service-area pages should clearly state the actual locations served. Business name, address, phone and operating information should be kept consistent with the business’s real-world details.' },
    { title: 'Technical SEO', desc: 'Use mobile-responsive layouts, crawlable navigation, sensible URL structures, HTTPS, appropriate canonical handling, XML sitemap and robots.txt configuration where applicable. Performance should be tested rather than claimed.' },
    { title: 'Structured data', desc: 'Schema markup may be used when it accurately represents the business and page content. It should not be used to create misleading claims or fabricated review/rating information.' },
    { title: 'Trust & compliance', desc: 'Add genuine company details, contact information, privacy policy, terms where applicable, refund/cancellation terms if relevant, and only real testimonials, certifications, portfolio items and results.' },
    { title: 'SEO reality', desc: 'SEO work can improve a website’s ability to be crawled, understood and discovered, but no agency should guarantee a specific Google ranking, traffic volume or number of leads.' },
  ];

  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              KNOWLEDGE BASE
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Frequently Asked <span className="text-violet-600">Questions</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our services, pricing structure, development scope, and digital growth guidelines.
          </p>
        </div>
      </section>

      {/* 1. Website Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <Code className="w-6 h-6 text-violet-600" />
          <h2 className="text-2xl font-extrabold text-slate-900">Website Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900">{service.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Professional Website FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <HelpCircle className="w-6 h-6 text-violet-600" />
          <h2 className="text-2xl font-extrabold text-slate-900">Professional Website FAQ</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm text-slate-900 pr-4 leading-relaxed">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Pricing Comparison & Website Scope */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <DollarSign className="w-6 h-6 text-violet-600" />
          <h2 className="text-2xl font-extrabold text-slate-900">Pricing Comparison & Scope</h2>
        </div>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-sm font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-6 text-sm font-bold text-slate-900 whitespace-nowrap">₹3,999 Basic</th>
                  <th className="py-4 px-6 text-sm font-bold text-slate-900 whitespace-nowrap">₹20,000 Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-6 text-xs font-medium text-slate-700">{c.feature}</td>
                    <td className="py-3 px-6 text-xs text-slate-600">{c.basic}</td>
                    <td className="py-3 px-6 text-xs text-slate-600">{c.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 italic px-2">
          * Package-dependent. Publish these items only when they are explicitly included in the final quotation/scope.
        </p>
      </section>

      {/* 4. SEO-Ready Website Content Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <Search className="w-6 h-6 text-violet-600" />
          <h2 className="text-2xl font-extrabold text-slate-900">SEO-Ready Website Content Guidelines</h2>
        </div>
        <div className="space-y-4">
          {seoGuidelines.map((guideline, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">{guideline.title}</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{guideline.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Still Have Questions?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Contact us directly or book a free discovery call to discuss your exact project scope and receive a customized quote.
          </p>
          <button
            onClick={() => onOpenConsultation('General Web Consultation')}
            className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Speak With Us
          </button>
        </div>
      </section>
    </div>
  );
}
