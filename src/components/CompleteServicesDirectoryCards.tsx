import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { DIRECTORY_CATEGORIES, ServiceDetailItem, CategoryGroup } from '../data/servicesDirectoryData';

export { DIRECTORY_CATEGORIES };
export type ServiceItem = ServiceDetailItem;
export type { CategoryGroup };

interface CompleteServicesDirectoryCardsProps {
  selectedCategory: string;
  searchQuery: string;
  onNavigate?: (page: PageId, serviceId?: string) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export function CompleteServicesDirectoryCards({
  selectedCategory,
  searchQuery,
  onNavigate,
  onOpenConsultation,
}: CompleteServicesDirectoryCardsProps) {
  // Filter groups based on selectedCategory and searchQuery
  const filteredCategories = DIRECTORY_CATEGORIES.map((cat) => {
    // If a category filter is applied and does not match
    const isCategorySelected =
      selectedCategory === 'all' ||
      selectedCategory === cat.id ||
      selectedCategory.padStart(2, '0') === cat.id ||
      selectedCategory.replace(/^0+/, '') === cat.id.replace(/^0+/, '');

    if (!isCategorySelected) {
      return null;
    }

    // Filter items inside the category if search query is present
    if (!searchQuery.trim()) {
      return cat;
    }

    const q = searchQuery.toLowerCase();
    const matchesCategoryTitle = cat.title.toLowerCase().includes(q);
    const filteredItems = cat.items.filter(
      (item) =>
        matchesCategoryTitle ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
    );

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems,
    };
  }).filter(Boolean) as CategoryGroup[];

  // Helper renderer for a single category card
  const renderCategoryCard = (cat: CategoryGroup) => (
    <motion.div
      key={cat.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`rounded-[28px] bg-white border ${
        cat.cardBorderClass || 'border-slate-200'
      } p-8 sm:p-10 transition-all shadow-xs hover:shadow-md space-y-6`}
    >
      <div>
        <div className={`${cat.eyebrowColor} font-mono font-bold tracking-wider text-xs uppercase mb-2`}>
          {cat.eyebrowNumber}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {cat.title}
        </h3>
      </div>

      <div className="space-y-4 pt-2">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="group cursor-pointer p-3 -mx-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all"
            onClick={() => onNavigate && item.id ? onNavigate("service-detail", item.id) : onOpenConsultation?.(`${item.name} Inquiry`)}
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                {item.name}
              </h4>
              <span className="text-xs font-semibold text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center shrink-0">
                View Details →
              </span>
            </div>
            {item.subtitle && (
              <p className="text-xs font-semibold text-violet-700 mt-0.5">
                {item.subtitle}
              </p>
            )}
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed line-clamp-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // If filtered down by search / category, render responsive grid
  if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {filteredCategories.map(renderCategoryCard)}
        </div>

        {/* Bottom Pricing disclaimer */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center text-xs sm:text-sm text-slate-600">
          <strong className="font-bold text-slate-900">Pricing:</strong> No prices are displayed in the Services Directory. Visit the{' '}
          <button
            onClick={() => onNavigate && onNavigate('pricing')}
            className="text-violet-700 font-semibold underline hover:text-violet-900 cursor-pointer"
          >
            Pricing page
          </button>{' '}
          for website package prices and detailed prices for additional services.
        </div>
      </section>
    );
  }

  // Full default layout matching the exact screenshot sequence:
  // Row 1: 02 / WEB (Additional Web Services) + 03 / BRAND (Branding & Creative)
  // Row 2: 04 / ENGINEERING (Development & Technical Services) + Column of [05 / CONTENT (Social Media & Content) and 06 / PAID GROWTH (Advertising)]
  // Row 3: 07 / SEARCH (SEO & Analytics) + 08 / GROWTH (Digital Marketing)
  // Row 4: 09 / BUSINESS (B2B Business Services) (Half width / large card)
  const cat2 = DIRECTORY_CATEGORIES.find((c) => c.id === '02');
  const cat3 = DIRECTORY_CATEGORIES.find((c) => c.id === '03');
  const cat4 = DIRECTORY_CATEGORIES.find((c) => c.id === '04');
  const cat5 = DIRECTORY_CATEGORIES.find((c) => c.id === '05');
  const cat6 = DIRECTORY_CATEGORIES.find((c) => c.id === '06');
  const cat7 = DIRECTORY_CATEGORIES.find((c) => c.id === '07');
  const cat8 = DIRECTORY_CATEGORIES.find((c) => c.id === '08');
  const cat9 = DIRECTORY_CATEGORIES.find((c) => c.id === '09');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Row 1: 02 & 03 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat2 && renderCategoryCard(cat2)}
        {cat3 && renderCategoryCard(cat3)}
      </div>

      {/* Row 2: 04 & (05 + 06 stacked) */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat4 && renderCategoryCard(cat4)}
        <div className="space-y-8">
          {cat5 && renderCategoryCard(cat5)}
          {cat6 && renderCategoryCard(cat6)}
        </div>
      </div>

      {/* Row 3: 07 & 08 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat7 && renderCategoryCard(cat7)}
        {cat8 && renderCategoryCard(cat8)}
      </div>

      {/* Row 4: 09 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat9 && renderCategoryCard(cat9)}
      </div>

      {/* Bottom Pricing disclaimer */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center text-xs sm:text-sm text-slate-600">
        <strong className="font-bold text-slate-900">Pricing:</strong> No prices are displayed in the Services Directory. Visit the{' '}
        <button
          onClick={() => onNavigate && onNavigate('pricing')}
          className="text-violet-700 font-semibold underline hover:text-violet-900 cursor-pointer"
        >
          Pricing page
        </button>{' '}
        for website package prices and detailed prices for additional services.
      </div>
    </section>
  );
}
