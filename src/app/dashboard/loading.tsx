import { EnhancedDashboardSkeleton } from "@/components/ui/enhanced-skeletons";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar skeleton */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-card lg:border-r lg:border-border lg:flex-shrink-0">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="h-6 w-24 bg-muted rounded animate-pulse"></div>
            <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 space-y-2 px-3 py-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-9 bg-muted rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <main className="p-6 lg:p-8">
          <EnhancedDashboardSkeleton />
        </main>
      </div>
    </div>
  );
}