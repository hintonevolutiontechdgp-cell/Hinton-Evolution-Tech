import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'light' | 'dark' | 'violet';
  animate?: boolean;
}

/**
 * Base atomic Skeleton box matching the modern clean light theme
 */
export function Skeleton({
  className = '',
  variant = 'light',
  animate = true,
  ...props
}: SkeletonProps) {
  const baseClasses = animate
    ? 'bg-slate-200 animate-pulse'
    : 'bg-slate-200';

  return (
    <div
      className={`rounded-lg ${baseClasses} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * Modern Clean Service Card Skeleton
 */
export function EditorialServiceCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 flex flex-col justify-between shadow-xs">
      <div className="space-y-4">
        {/* Category Number & Pill */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Short Description Lines */}
        <div className="space-y-2 pt-1">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-5/6" />
        </div>

        {/* Deliverables Checklist */}
        <div className="pt-3 space-y-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Skeleton className="w-3.5 h-3.5 shrink-0 rounded-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-3.5 h-3.5 shrink-0 rounded-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      </div>

      {/* Footer / Price & Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}

/**
 * Modern Clean Portfolio Card Skeleton
 */
export function EditorialPortfolioCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between shadow-xs">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>

        <Skeleton className="h-7 w-4/5" />

        <div className="space-y-2">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-11/12" />
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex flex-wrap gap-1.5">
            <Skeleton className="h-6 w-16 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-14 rounded-md" />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
}

/**
 * Modern Clean Policy Skeleton
 */
export function EditorialPolicySkeleton() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      <div className="space-y-4">
        <Skeleton className="h-4 w-32 rounded-full" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-8 rounded-2xl bg-white border border-slate-200 p-8 space-y-8">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="space-y-3 pb-6 border-b border-slate-100 last:border-0">
              <Skeleton className="h-6 w-1/3" />
              <div className="space-y-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-11/12" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-6 w-40" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
